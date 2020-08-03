const gulp = require('gulp');
const pm2 = require('pm2');
const debug = require('gulp-debug');
gulp.task('webpackReactJs', () => {
    gulp.src('*')
        .pipe(debug());
    pm2.connect(true, () => {
        pm2.start({
            name: 'webpackReactJs',
            script: './server.js',
            // watch: ['controllers', 'models'],
            watch: ['models'],
            ignore_watch: [],
        }, () => {
            console.log('pm2 started');
        });
    });
});
