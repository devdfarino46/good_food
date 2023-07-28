const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprite');
const imagemin = require('gulp-imagemin');

module.exports = function svg_sprite() {
    return gulp.src('src/assets/svg-icons/*.svg')
        .pipe(svgSprite({
            shape: {
                dimension: {
                    maxWidth: 500,
                    maxHeight: 500
                },
                spacing: {
                    padding: 0
                }
            },
            mode: {
                symbol: {
                    dest: '.',
                    sprite: 'sprite.svg'
                }
            }
        })).on('error', function(error) {console.log(error)})
        .pipe(imagemin([
            imagemin.svgo({
                plugins: [
                    { removeViewBox: false },
                    { removeUnusedNS: false },
                    { removeUselessStrokeAndFill: true },
                    { cleanupIDs: false },
                    { removeComments: true },
                    { removeEmptyAttrs: true },
                    { removeEmptyText: true },
                    { collapseGroups: true },
                    { removeAttrs: { attrs: '(fill|stroke|style)' } }
                ]
            })
        ]))
        .pipe(gulp.dest('dist/assets/img'));
}