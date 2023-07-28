const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

module.exports =  function css() {
    return gulp.src(["src/assets/scss/**/*.+(scss|css)"])
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cleanCSS({
            compatibility: 'ie9'
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest("dist/assets/css"));
}