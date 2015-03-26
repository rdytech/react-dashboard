var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var jest = require('gulp-jest');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var streamify = require('gulp-streamify');
var debug = require('gulp-debug');
var path = require('path');
var jshint = require('gulp-jshint');

var scriptsDir = './src/**/*';
var buildDir = './dist';
var exampleDir = './example';
var testDir = './test';

//gulp.task('watch', function() {
//  gulp.watch(scriptsDir, ['build']);
//});

gulp.task('build', function () {
  browserify({
    entries: './src/react-dashboard.js',
    extensions: ['.js'],
  })
  .transform(babelify)
  .bundle()
  .pipe(source('react-dashboard.js'))
  .pipe(gulp.dest('dist'))
});

gulp.task('compress', ['build'], function() {
  gulp.src('dist/react-dashboard.js')
  .pipe(streamify(uglify()))
  .pipe(rename('react-dashboard.min.js'))
  .pipe(gulp.dest('dist'));
});

gulp.task('jest', function () {
    var nodeModules = path.resolve('./node_modules');
    return gulp.src('test')

        .pipe(jest({
            scriptPreprocessor: nodeModules + '/babel-jest',
            testPathIgnorePatterns: [
                "node_modules",
                "test/support"
            ],
            moduleFileExtensions: [
                "jsx",
                "js",
                "json",
                "react"
            ],
            //rootDir: "src",
            testDirectoryName: "test",
            unmockedModulePathPatterns: [nodeModules + '/react']
        }));
});

gulp.task('test', ['jest']);
gulp.task('default',['test']);
gulp.task('dist', ['build', 'compress']);
