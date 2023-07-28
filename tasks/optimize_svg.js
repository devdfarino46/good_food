const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const changed = require('gulp-changed');

module.exports = function optimize_svg() {
    return gulp.src("src/assets/img/**/*.+(svg|ico|gif)")
        .pipe(changed('dist/assets/img/', {
            hasChanged: changed.compareLastModifiedTime
        }))
        .pipe(imagemin([
            imagemin.svgo()
        ], {
            verbose: true
        }))
        .pipe(gulp.dest("dist/assets/img"));
}