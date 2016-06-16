var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('css/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
gulp.task('watch',function() {
	gulp.watch('css/**/*.scss', ['sass']);
})
gulp.task('default',['sass','watch']);
