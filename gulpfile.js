var gulp = require('gulp'),
  connect = require('gulp-connect'),
  watch = require('gulp-watch'),
  plumber = require('gulp-plumber');
  browserify = require('gulp-browserify');
  concat = require('gulp-concat');

gulp.task('webserver', function() {
  connect.server({
    livereload: true,
    port: 3000,
    root: [__dirname, __dirname + '/build']
  });
});
 
gulp.task('html', function() {
  gulp.src(['./*.html'])
    .pipe(connect.reload());
});
 
gulp.task('coffee', function() {
  gulp.src('./app/app.coffee', { read: false })
    .pipe(plumber())
    .pipe(browserify({ transform: ['coffeeify'], extensions: ['.coffee'] }))
    .pipe(concat('app.js'))
    .pipe(gulp.dest('build'))
    .pipe(connect.reload());
});
 
gulp.task('watch', function() {
  gulp.watch(['./*.html'], ['html']);
  gulp.watch('./app/**/*.coffee', ['coffee']);
})
 
gulp.task('default', ['coffee', 'webserver', 'html', 'watch']);