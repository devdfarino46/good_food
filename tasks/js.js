const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const babelify = require('babelify');

module.exports = function js() {
    return browserify({
        entries: ['./src/assets/js/main.js'],
        debug: true,
        transform: [babelify.configure({ presets: ['@babel/preset-env'] })]
    })
        .bundle()
        .pipe(source('main.min.js'))
        .pipe(gulp.dest('dist/assets/js'));
}