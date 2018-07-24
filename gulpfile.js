var gulp = require('gulp');
var sass = require('gulp-sass');

//style paths
var sassFiles = 'src/scss/**/*.scss',
    cssDest = 'src/css/';

gulp.task('styles', function(){
    gulp.src(sassFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(cssDest));
});
gulp.task('watch',function() {
  gulp.watch(sassFiles,['styles']);
});
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['styles']);
});

gulp.task('default', function(){
  console.log('starting gulp ->')
})
