const gulp = require('gulp');
const fontfacegen = require('gulp-fontfacegen');

module.exports = function css_fonts_gen() {
    return gulp.src("src/assets/font/**/*.+(woff|woff2)")
        .pipe(gulp.dest("dist/assets/font"))
        .pipe(fontfacegen({
            filepath: "./src/assets/scss/base",
            filename: "_fonts.scss"
        }))
}