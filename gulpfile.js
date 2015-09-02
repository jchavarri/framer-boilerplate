var gulp      = require('gulp'),
  connect     = require('gulp-connect'),
  watch       = require('gulp-watch'),
  sourcemaps  = require('gulp-sourcemaps');
  browserify  = require('browserify');
  buffer      = require('vinyl-buffer'); // to transform the browserify results into a 'stream'
  source      = require('vinyl-source-stream'); //to 'rename' your resulting file

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

// Recipe from http://www.uberbrady.com/2015/05/how-to-do-gulp-browserify-coffeescript.html
gulp.task('coffee', function() {
  browserify({
    entries: ["./app/app.coffee"],
    debug: true,
    extensions: [".coffee"],
    transform: ["coffeeify"] // npm install --save-dev coffeeify
    })
  .bundle()
  .pipe(source('app.js'))
  .pipe(buffer())
  .pipe(sourcemaps.init({loadMaps: true,debug: true}))
  // .pipe(uglify( {
  //       debug: true,
  //       options: {
  //         sourceMap: true,
  //       }
  //   }))
  .pipe(sourcemaps.write("./" /* optional second param here */))
  .pipe(gulp.dest('build'))
  .pipe(connect.reload());
});
 
gulp.task('watch', function() {
  gulp.watch(['./*.html'], ['html']);
  gulp.watch('./app/**/*.coffee', ['coffee']);
})
 
gulp.task('default', ['coffee', 'webserver', 'html', 'watch']);