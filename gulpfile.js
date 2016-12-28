'use strict';
const gulp = require('gulp');
const gutil = require('gulp-util');
const jshint = require('gulp-jshint');
const coffee = require('gulp-coffee');
const uglify = require('gulp-uglifyjs');
const sh = require('shelljs');

gulp.task('lint', function() {
    return gulp.src('*.js')
      .pipe(jshint())
      .pipe(jshint.reporter('default'))
});

gulp.task('coffee', function() {
  gulp.src('*.coffee', { sourcemaps: true })
    .pipe(coffee({ bare: true }))
    .pipe(gulp.dest('./compile/js'));
});

gulp.task('uglify', function() {
  gulp.src(['kakao.login.js'])
    .pipe(uglify())
    .pipe(gulp.dest('dist/js/uglify'))
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  } else {
    console.log(gutil.colors.red('깃 설치가 잘되있구만유 :)'),gutil.colors.cyan('일단 뭐라도 잘했습니다:)'));
  }
  done();
});

gulp.task('default',['lint','coffee','uglify','git-check']);
