var gulp = require('gulp'),
    typescript = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps'),
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    watch = require('gulp-watch'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect');

var buildDir = './build';

/********************************************
  Files
********************************************/

var tsFiles = './src/ts/**/*.ts';

var lessFiles = './src/less/**/*.less';

var jsFiles = [
  'bower_components/jquery/dist/jquery.min.js',
  'bower_components/purl/purl.js',
  'bower_components/three.js/build/three.min.js',
  'bower_components/three.js/examples/js/loaders/ColladaLoader.js',
  'bower_components/three.js/examples/js/controls/OrbitControls.js',
];

var cssFiles = [
];

var resourceFiles = [
  './src/index.html',
  './src/models/**/*.*',
  './src/images/**/*.*'
];

/********************************************
  Tasks
********************************************/

gulp.task('ts', function() {
  return gulp.src(tsFiles)
    .pipe(sourcemaps.init())
    .pipe(typescript({ sortOutput: true }))
    .pipe(concat('main.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(buildDir))
});

gulp.task('less', function() {
  return gulp.src(lessFiles)
    .pipe(less())
    .pipe(concat('main.css'))
    .pipe(gulp.dest(buildDir))
});

gulp.task('js', function() {
  return gulp.src(jsFiles)
    .pipe(concat('all.js'))
    .pipe(gulp.dest(buildDir))
});

gulp.task('css', function() {
  return gulp.src(cssFiles)
    .pipe(concat('all.css'))
    .pipe(gulp.dest(buildDir))
});

gulp.task('resources', function() {
  return gulp.src(resourceFiles, {base: './src'})
    .pipe(gulp.dest(buildDir));
});

gulp.task('watch', function() {
  gulp.watch(tsFiles, ['ts']);
  gulp.watch(lessFiles, ['less']);
  gulp.watch(jsFiles, ['js']);
  gulp.watch(cssFiles, ['css']);
  gulp.watch(resourceFiles, ['resources']);
});

gulp.task('livereload', function() {
  gulp.src(buildDir + '**/*.*')
    .pipe(watch(buildDir + '**/*.*'))
    .pipe(connect.reload())
    .pipe(livereload());
});

gulp.task('serve', function() {
  connect.server({
    root: [buildDir],
    port: 8080,
    livereload: true
  });
});

gulp.task('build', ['ts', 'less', 'js', 'css', 'resources']);

gulp.task('default', ['build', 'serve', 'livereload', 'watch']);
