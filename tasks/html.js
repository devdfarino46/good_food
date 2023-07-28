const gulp = require('gulp');
const pug = require('gulp-pug');

module.exports =  function html() {
    return gulp.src([
        "src/**/*.pug",
        "!src/**/_*.pug"
    ])
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest("dist/"));
}