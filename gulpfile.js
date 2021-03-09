var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    header  = require('gulp-header'),
    rename = require('gulp-rename'),
    cssnano = require('gulp-cssnano'),
    concat = require('gulp-concat'),
    gutil = require('gulp-util'),
    sourcemaps = require('gulp-sourcemaps'),
    package = require('./package.json');

var banner = [
  '/*!\n' +
  ' * <%= package.name %>\n' +
  ' * <%= package.title %>\n' +
  ' * <%= package.url %>\n' +
  ' * @author <%= package.author %>\n' +
  ' * @version <%= package.version %>\n' +
  ' * Copyright ' + new Date().getFullYear() + '. <%= package.license %> licensed.\n' +
  ' */',
  '\n'
].join('');

var cssFiles = ['src/scss/style.scss'],
    cssDest = 'app/assets/css';

gulp.task('css', function (done) {
    return gulp.src(cssFiles)
    .pipe(sourcemaps.init())
    .pipe(sass({errLogToConsole: true}))
    .pipe(autoprefixer('last 4 version'))
    .pipe(gulp.dest(cssDest))
    .pipe(cssnano())
    .pipe(rename({ suffix: '.min' }))
    .pipe(header(banner, { package : package }))
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest(cssDest))
    .pipe(browserSync.reload({stream:true}));
    done();
});

var jsFiles = ['src/js/vendors/*.js', 'src/js/wrapper-begin.js', 'src/js/layouts/*.js', 'src/js/scripts.js', 'src/js/wrapper-end.js'],
    jsDest = 'app/assets/js';

gulp.task('js',function(done){
  gulp.src(jsFiles)
    .pipe(sourcemaps.init())
    .pipe(concat('scripts.js'))
    .pipe(jshint('.jshintrc'))
    // .pipe(jshint.reporter('default'))
    .pipe(header(banner, { package : package }))
    .pipe(gulp.dest(jsDest))
    // .pipe(uglify().on('error', gutil.log))
    .pipe(header(banner, { package : package }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest(jsDest))
    .pipe(browserSync.reload({stream:true, once: true}));
    done();
});

gulp.task('browser-sync', function(done) {
    browserSync.init(null, {
        server: {
            baseDir: "app"
        }
    });
    done();
});
gulp.task('bs-reload', function () {
    browserSync.reload();
});

gulp.task('default', gulp.series('css', 'js', 'browser-sync'), function () {

});