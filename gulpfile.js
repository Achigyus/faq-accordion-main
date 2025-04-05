const {  src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return src('./sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('dist'));
}

function watchFiles() {
  watch('./sass/**/*.sass', buildStyles);
}

exports.default = series(buildStyles, watchFiles);