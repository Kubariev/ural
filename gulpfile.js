var gulp         = require('gulp'),
    gutil        = require('gulp-util'),
    sass         = require('gulp-sass'),
    jshint       = require('gulp-jshint'),
    sourcemaps   = require('gulp-sourcemaps'),
    fileinclude  = require('gulp-file-include'),
    connect      = require('gulp-connect'),
    plumber      = require('gulp-plumber'),
    colors       = require('colors'),
    imagemin     = require('gulp-imagemin'),
    uglify       = require('gulp-uglify'),
    rename       = require('gulp-rename'),
    concat       = require('gulp-concat'),
    clean        = require('gulp-clean');

var jsFiles = 'js/*.js',
    jsDest = 'dev/js';

// Gulp Sass Task 
gulp.task('sass', function () {
    return gulp.src('scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest("dev/css"))
        .pipe(connect.reload());
});
// Gulp Fileinclude Task
gulp.task('fileinclude', function() {
    gulp.src(['./templates/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('dev'))
    .pipe(connect.reload());
});

// Gulp Imagemin Task
gulp.task('imagemin', () =>
gulp.src('images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dev/images'))
);

gulp.task('jshint', function() {
    return gulp.src('js/main.js')
      .pipe(plumber(function (error){
            gutil.beep();
            gutil.log(gutil.colors.red('error in ' + error.fileName + '\n' + 'line - ' + error.lineNumber));
            this.emit('end');
        }))
      .pipe(jshint())
      .pipe(jshint.reporter('default'));
});

gulp.task('clean-scripts', function () {
    return gulp.src('dev/js/*.js', {read: false})
        .pipe(clean());
});

gulp.task('scripts', ['clean-scripts'], function() {
    return gulp.src(jsFiles)
        .pipe(concat('main.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
});

//Server
gulp.task('server', function() {
  connect.server({
    livereload: true,
    port: 3000
  });
});

// Gulp watch 
gulp.task('watch', function(){
  gulp.watch('./templates/**/*.html', ['fileinclude']);
  gulp.watch('scss/**/*.scss', ['sass']);
  gulp.watch('images/**/*', ['imagemin']);
  gulp.watch('js/*.js', ['scripts']);
});

gulp.task('default', ['scripts', 'fileinclude', 'sass', 'imagemin', 'jshint', 'server', 'watch']);