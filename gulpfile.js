'use strict';

var gulp       = require('gulp');
var compass    = require('gulp-compass');
var connect    = require('gulp-connect');
var browserify = require('browserify');
var source     = require('vinyl-source-stream');

var srcDir = 'assets';
var buildDir = 'builds/dev';

gulp.task('html', function() {
  return gulp.src(srcDir + '/html/**/*.html')
    .pipe(gulp.dest(buildDir));
});

gulp.task('server', function() {
  connect.server({
    root: buildDir,
    livereload: true
  });
});

gulp.task('styles', function() {
  return gulp.src(srcDir + '/styles/**/*.scss')
    .pipe(compass({
      css: buildDir + '/styles',
      sass: srcDir + '/styles',
      image: srcDir + '/images'
    }))
    .pipe(gulp.dest(buildDir + '/css'));
});

gulp.task('scripts', function() {
  return browserify('./' + srcDir + '/scripts/main.js', { debug: true })
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest(buildDir + '/scripts'));
});

gulp.task('watch', function() {
  gulp.watch(srcDir + '/styles/**/*.scss', ['styles']);
  gulp.watch(srcDir + '/html/**/*.html', ['html']);
  gulp.watch(srcDir + '/scripts/**/*.js', ['scripts']);
});

gulp.task('build', ['styles', 'scripts', 'html']);

gulp.task('default', ['build', 'watch', 'server']);
