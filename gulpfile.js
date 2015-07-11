var gulp = require('gulp');
var del = require('del');

var paths = {
  scripts: 'src/*.js',
  output: 'dist'
};

gulp.task('clean', function(cb) {
  del([paths.output], cb);
});

gulp.task('scripts', ['clean'], function() {
  gulp.src(paths.scripts)
   .pipe(gulp.dest(paths.output));
});

gulp.task('watch', function() {
  gulp.watch([paths.scripts], ['scripts']);
});

gulp.task('build', ['scripts']);
gulp.task('serve', ['watch']);
