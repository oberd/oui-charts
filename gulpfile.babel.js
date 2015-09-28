
import gulp from 'gulp';
import gutil from 'gulp-util';
import babel from 'gulp-babel';
import nodemon from 'nodemon';

let examples;

gulp.task('babel-examples', () =>
    gulp.src(['./examples/src/**/*.js'])
        .pipe(babel())
        .pipe(gulp.dest('./examples/dist/'))
);

gulp.task('babel-lib', () =>
    gulp.src(['./src/**/*.js'])
        .pipe(babel())
        .pipe(gulp.dest('./lib/'))
);

gulp.task('restart-examples', ['babel-examples', 'babel-lib', 'webpack-examples'], () => examples.emit('restart'));

gulp.task('examples', ['babel-examples', 'webpack-examples'], () => {
    examples = nodemon({ ext: 'none', script: 'examples/dist/bin/run.js', 'watch': []})
        .on('restart', () => gutil.log('restarting node...'));
    gulp.watch(['examples/src/**/*.js', 'src/**/*.js'], ['restart-examples']);
    gulp.watch('src/**/*.css', ['myth']);
});

import webpack from 'webpack-stream';
import wpconfig from '@oberd/oui-webpack-config';
gulp.task('webpack', ['myth'], () => {
    const options = wpconfig({
        entry: {
            build: './src/Charts.js'
        },
        output: {
            filename: 'Charts.js',
            library: 'Charts',
            libraryTarget: 'umd'
        },
        externals: [
            {
                'react': {
                    root: 'React',
                    commonjs2: 'react',
                    commonjs: 'react',
                    amd: 'react'
                },
                'react-addons-transition-group': {
                    root: 'React',
                    commonjs2: 'react-addons-transition-group',
                    commonjs: 'react-addons-transition-group',
                    amd: 'react-addons-transition-group'
                },
                'react-dom': {
                    root: 'ReactDOM',
                    commonjs2: 'react-dom',
                    commonjs: 'react-dom',
                    amd: 'react-dom'
                },
                'd3': {
                    root: 'd3',
                    commonjs2: 'd3',
                    commonjs: 'd3',
                    amd: 'd3'
                }
            }
        ]
    });
    return gulp.src('./src/**/*.js')
        .pipe(webpack(options))
        .pipe(gulp.dest('dist/'))
        .on('error', err => gutil.log(err));
});
gulp.task('webpack-examples', ['myth'], () => {
    const config = wpconfig({
        entry: {
            build: './examples/src/client.js'
        },
        output: {
            filename: 'build.js'
        },
        externals: {}
    });
    return gulp.src('./examples/src/**/*.js')
        .pipe(webpack(config))
        .pipe(gulp.dest('examples/public/'))
        .on('error', err => gutil.log(err));
});


import myth from 'gulp-myth';
import concat from 'gulp-concat';
gulp.task('myth', () =>
    gulp.src('src/**/*.css')
        .pipe(myth())
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('dist'))
        .pipe(gulp.dest('examples/public'))
);

import mocha from 'gulp-mocha';
gulp.task('test', () => {
    process.env.TEST = 1;
    return gulp.src(['test/**/*.test.js'])
        .pipe(babel())
        .pipe(mocha());
});

import { Instrumenter } from 'isparta';
import istanbul from 'gulp-istanbul';
gulp.task('test-coverage', (cb) => {
    process.env.TEST = 1;
    gulp.src(['src/**/*.js'])
        .pipe(istanbul({
            instrumenter: Instrumenter,
            includeUntested: true
        }))
        .pipe(istanbul.hookRequire())
        .on('finish', () =>
            gulp.src(['test/**/*.test.js'])
                .pipe(babel())
                .pipe(mocha())
                .pipe(istanbul.writeReports())
                // .pipe(istanbul.enforceThresholds())
                .on('end', cb)
        );
});

gulp.task('test-watch', ['test'], () => {
    gulp.watch(['test/**/*.js', 'src/**/*.js'], ['test']);
});

gulp.task('default', ['webpack', 'myth'], () => {
    gulp.watch('src/**/*.js', ['webpack']);
    gulp.watch('src/**/*.css', ['myth']);
});
