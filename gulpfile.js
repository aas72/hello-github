var gulp = require('gulp');
var del = require('del');
var es = require('event-stream');
var templateCache = require('gulp-angular-templatecache');
var minifyHtml = require('gulp-minify-html');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

var paths = {
	scripts: 'src/*.js',
	templates: 'src/*.html',
	output: 'dist'
};

gulp.task('clean', function(cb) {
	del([paths.output], cb);
});

gulp.task('scripts', ['clean'], function() {
	var scripts = gulp.src(paths.scripts);
	var templates = gulp.src(paths.templates)
		.pipe(minifyHtml())
		.pipe(templateCache());

	es.merge(scripts, templates)
		.pipe(concat('index.js'))
		.pipe(gulp.dest(paths.output))
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify())
		.pipe(gulp.dest(paths.output));
});

gulp.task('watch', function() {
	gulp.watch([paths.scripts], ['scripts']);
});

gulp.task('build', ['scripts']);
gulp.task('serve', ['watch']);
