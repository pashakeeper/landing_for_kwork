var gulp = require('gulp'),
  sass = require('gulp-sass'),
  media = require('gulp-sass'),
  libs = require('gulp-sass'),
  browserSync = require('browser-sync'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglifyjs'),
  cssnano = require('gulp-cssnano'),
  rename = require('gulp-rename'),
  del = require('del'),
  cache = require('gulp-cache'),
  autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', ['media'], function () {
  return gulp.src(['app/sass/style.scss',])
  .pipe(sass())
  .pipe(autoprefixer(['last 25 versions', '> 1%', 'ie 8', 'ie 7', 'ie 10', 'ie 9', 'ie 11'],
    { cascade: false }))
  .pipe(gulp.dest('app/css'))
  .pipe(browserSync.reload({ stream: true }))
});
gulp.task('media', ['libs'], function () {
  return gulp.src('app/sass/media.scss')
  .pipe(media())
  .pipe(autoprefixer(['last 25 versions', '> 1%', 'ie 8', 'ie 7', 'ie 10', 'ie 9', 'ie 11'],
    { cascade: false }))
  .pipe(gulp.dest('app/css'))
  .pipe(browserSync.reload({ stream: true }))
});
gulp.task('libs', function () {
  return gulp.src(['app/sass/*.sass',])
  .pipe(sass())
  .pipe(autoprefixer(['last 25 versions', '> 1%', 'ie 8', 'ie 7', 'ie 10', 'ie 9', 'ie 11'],
    { cascade: false }))
  .pipe(gulp.dest('app/css'))
  .pipe(browserSync.reload({ stream: true }))
});

gulp.task('scripts', function () {
  return gulp.src([
    './app/libs/jquery/dist/jquery.min.js',
    './app/libs/bootstrap4/dist/js/bootstrap.min.js',
    './app/libs/owl.carousel/dist/owl.carousel.min.js',
  ])
  .pipe(concat('libs.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('app/js'));
});
gulp.task('browser-sync', function () {
  browserSync({
    server: {
      baseDir: 'app'
    },
    notify: false
  });
});
gulp.task('css-libs', ['sass'], function () {
  return gulp.src('app/css/libs.css')
  .pipe(cssnano())
  .pipe(rename({ suffix: '.min' }))
  .pipe(gulp.dest('app/css'))
});
gulp.task('clean', function () {
  return del.sync('dist');
});
gulp.task('clear', function () {
  return cache.clearAll();
});


gulp.task('watch', ['browser-sync', 'scripts', 'css-libs'], function () {
  gulp.watch('app/sass/**/*.scss', ['sass']);
  gulp.watch('app/**/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('build', ['clean', 'css-libs', 'scripts'], function () {
  var buildCss = gulp.src([
    'app/css/*.css'
  ])
  .pipe(gulp.dest('dist/css'));

  var buildFonts = gulp.src('app/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'));

  var buildJs = gulp.src('app/js/**/*.js')
  .pipe(gulp.dest('dist/js'));

  var buildHtml = gulp.src('app/**/*.html')
  .pipe(gulp.dest('dist'));

  var buildImg = gulp.src('app/img/**')
  .pipe(gulp.dest('dist/img/'));

});
