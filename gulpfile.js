var gulp = require('gulp');

gulp.task('build', ['injectDependencies']);

gulp.task('injectDependencies', function () {
  
  var wiredep = require('wiredep').stream;
  var inject = require('gulp-inject');
  
  gulp.src('./src/index.html')
    .pipe(wiredep())
    .pipe(inject(gulp.src(['./src/**/*.js', './src/**/*.css', '!./src/bower_components/**/*.*'], {read: false}), {relative: true}))
    .pipe(gulp.dest('./src'));
});


// gulp.task('inject', function () {

//   var inject = require('gulp-inject');

//   gulp.src('./src/index.html')
//     .pipe(inject(gulp.src(['./src/**/*.js', './src/**/*.css', '!./src/bower_components/**/*.*'], {read: false}), {relative: true}))
//     .pipe(gulp.dest('./src'));
//   });

gulp.task('serve', function() {
  
  var webserver = require('gulp-webserver');
  
  gulp.src('src')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});