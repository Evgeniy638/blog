const gulp = require('gulp');
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const cssnano = require('gulp-cssnano')
const plumber = require('gulp-plumber');
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')

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

const scripts = () => {
    return gulp.src(['dev/js/auth.js'])
    .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public/javascripts'))
}

const defaultTask = (cd) => {
    gulp.parallel(scss, scripts)

    //gulp.watch('dev/js/**/*.js', scripts)
    //gulp.watch('dev/scss/**/*.scss', scss)

    return cd()
}

exports.default = gulp.parallel(scss, scripts)