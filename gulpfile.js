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
gulp.task('serve', function() {
  
  gulp.src('src')
    .pipe(webserver({
      livereload: true,
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

  // // Copy remaining files to dist folder
  // gulp.src(['./src/**/*.*', , '!./src/bower_components/**/*.*', '!./src/**/*.js', '!./src/**/*.css'])
  //   .pipe(gulp.dest('./dist'));

  // // Serve content of dist folder
  // gulp.src('dist')
  //   .pipe(webserver({
  //     livereload: false,
  //     directoryListing: false,
  //     open: true
  //   }));
});

// gulp.task('minifyjs', ['wireup','clean'], function(){

//   gulp.src(['./src/**/*.js', '!./src/bower_components/**/*.*'])
//     .pipe(concat('concat.js'))
//     .pipe(gulp.dest('dist'))
//     .pipe(rename('scripts.js'))
//     .pipe(uglify())
//     .pipe(gulp.dest('dist'));
// });

// gulp.task('minifycss', ['wireup','clean'], function(){
  
// });

// Setup dependencies in index.html, both vendor scripts (bower) and your own scripts
gulp.task('wireup', function () {
  
  var inject = require('gulp-inject');
  
  gulp.src('./src/index.html')
    .pipe(wiredep())
    .pipe(inject(gulp.src(['./src/**/*.js', './src/**/*.css', '!./src/bower_components/**/*.*'], {read: false}), {relative: true}))
    .pipe(gulp.dest('./src'));
});

// Remove all content from dist folder
gulp.task('clean', function () {

  del([
    'dist/**/*',
  ]);
});


