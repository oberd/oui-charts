
import koa from 'koa';
import stat from 'koa-static';
import path from 'path';
// import koaRouter from 'koa-router';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { RoutingContext, match } from 'react-router';
import createLocation from 'history/lib/createLocation';
import routes from './routes';

const app = koa();
// const router = koaRouter();

function *react(location) {
    return new Promise(resolve => {
        match({ routes, location }, (error, redirectLocation, renderProps) => {
            if (error || !renderProps) {
                resolve(false);
            } else {
                let content = '<!doctype html>';
                content += renderToString(<RoutingContext {...renderProps} />);
                resolve(content);
            }
        });
    });
}

app.use(function*(next) {
    const location = createLocation(this.request.path, this.request.query);
    const result = yield react(location);
    if (!result) {
        yield next;
    } else {
        this.body = result;
    }
});

app.use(stat(path.join(process.cwd(), 'examples', 'public')));

export default app;
