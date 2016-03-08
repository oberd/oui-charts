
import gulp from 'gulp';
import gutil from 'gulp-util';
import babel from 'gulp-babel';
import nodemon from 'nodemon';
import rimraf from 'rimraf';

let examples;

gulp.task('clean-examples', (cb) => rimraf('./examples/dist', cb));
gulp.task('babel-examples', ['clean-examples'], () =>
    gulp.src(['./examples/src/**/*.js'])
        .pipe(babel())
        .pipe(gulp.dest('./examples/dist/'))
);
gulp.task('copy-styles', ['webpack'], () =>
    gulp.src('./dist/style.css')
        .pipe(gulp.dest('./examples/public/'))
);
gulp.task('restart-examples', ['babel-examples', 'webpack-examples', 'copy-styles'], () => examples.emit('restart'));

gulp.task('examples', ['babel-examples', 'webpack-examples', 'copy-styles'], () => {
    examples = nodemon({ ext: 'none', script: 'examples/dist/bin/run.js', watch: []})
        .on('restart', () => gutil.log('restarting node...'));
    gulp.watch(['examples/src/**/*.js', 'src/**/*.{js,css}'], ['restart-examples']);
});

import webpack from 'webpack-stream';
gulp.task('clean-dist', (cb) => rimraf('./dist', cb));
gulp.task('webpack', ['clean-dist'], () => {
    const options = require('./webpack.config');
    return gulp.src('./src/**/*.js')
        .pipe(webpack(options))
        .pipe(gulp.dest('dist/'))
        .on('error', err => gutil.log(err));
});
gulp.task('webpack-examples', ['webpack'], () => {
    const options = require('./webpack.config');
    const config = Object.assign({}, options, {
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

gulp.task('default', ['webpack'], () => {
    gulp.watch('src/**/*.js', ['webpack']);
});
