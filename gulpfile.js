// Setup dependencies
var gulp = require('gulp');
var wiredep = require('wiredep').stream;
var webserver = require('gulp-webserver');
var del = require('del');
var uglify = require('gulp-uglify');
var usemin = require('gulp-usemin');
var minifyHtml = require('gulp-minify-html');
var minifyCss = require('gulp-minify-css');
var rev = require('gulp-rev');

// Setup webserver for development environment
gulp.task('serve', ['wireup'], function() {
  
  return gulp.src('src')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});

// Setup webserver for production environment
gulp.task('serve-dist', ['build'], function() {
  
  return gulp.src('dist')
    .pipe(webserver({
      livereload: false,
      directoryListing: false,
      open: true
    }));
});

// Build production environment, output is stored in dist folder
gulp.task('build', ['wireup','clean'], function(){

  gulp.src('./src/index.html')
      .pipe(usemin({
        vendorcss: [minifyCss(), 'concat'],
        customcss: [minifyCss(), 'concat'],
        html: [minifyHtml({empty: true})],
        vendorjs: [uglify(), rev()],
        customjs: [uglify(), rev()]
      }))
      .pipe(gulp.dest('./dist'));

  // Copy remaining files to dist folder
  return gulp.src(['./src/**/*.*', '!.src/index.html', '!./src/bower_components/**/*.*', '!./src/**/*.js', '!./src/**/*.css'])
    .pipe(gulp.dest('./dist'));
});

// Wireup dependencies, uses wiredep for bower components and gulp-inject for custom css and js
gulp.task('wireup', function () {
  
  var inject = require('gulp-inject');
  
  return gulp.src('./src/index.html')
    .pipe(wiredep())
    .pipe(inject(gulp.src(['./src/**/*.js', './src/**/*.css', '!./src/bower_components/**/*.*'], {read: false}), {relative: true}))
    .pipe(gulp.dest('./src'));
});

// Remove all content from dist folder
gulp.task('clean', function () {

  return del([
    'dist/**/*',
  ]);
});


