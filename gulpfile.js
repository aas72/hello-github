var gulp = require('gulp');

gulp.task('scripts', function() {
  gulp.src('src/**/*.js')
   .pipe(gulp.dest('dist'));
});
