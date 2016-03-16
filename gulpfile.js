var gulp = require('gulp');
var LiveServer = require('gulp-live-server');
var browserSync = require('browser-sync');
var browserify = require('browserify')
var reactify = require('reactify')
var source = require('vinyl-source-stream')

gulp.task('live-server', function() {
	var server = new LiveServer('server/main.js')
	server.start();
})

gulp.task('bundle', function() {
  return browserify({
  	entries:'app/main.jsx',
  	debug:true,

  })
  .transform(reactify)
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('./.tmp'));		
})

/** live-server is dependant, needs to run first */
gulp.task('serve', ['live-server'], function() {
  browserSync.init(null, {
  	proxy: "http://localhost:7777",
  	port: 9001
  })
})


