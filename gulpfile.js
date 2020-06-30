const gulp = require('gulp');
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const cssnano = require('gulp-cssnano')
const plumber = require('gulp-plumber');

const scss = () => {
    return gulp.src('dev/scss/**/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(cssnano())
    .pipe(gulp.dest('./public/stylesheets'))
}

const defaultTask = (cb) => {
    scss()

    //gulp.watch('dev/scss/**/*.scss', scss)

    cb()
}

exports.default = defaultTask