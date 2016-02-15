import gulp from 'gulp';
import sass from 'gulp-sass';
import rename from 'gulp-rename';
import sourcemaps from 'gulp-sourcemaps';

const sassOpts = {
  outputStyle: 'compressed',
  errLogToConsole: true
};

gulp.task('sass', () => {
  gulp.src('./_sass/main.scss')
  .pipe(sourcemaps.init())
  .pipe(sass(sassOpts))
  .pipe(sourcemaps.write())
  .pipe(rename('styles.css'))
  .pipe(gulp.dest('./static/css'));
});

gulp.task('default', ['sass'], () => {
  gulp.watch('./_sass/**/*.scss', ['sass'])
  .on('change', (e) => {
    console.log(`File ${e.path} was ${e.type}, running Sass task...`);
  });
})
