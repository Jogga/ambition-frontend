var gulp = require('gulp');
var watch = require('gulp-watch');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat-util');
var livereload = require('gulp-livereload');
var compass = require('gulp-compass');
var flatten = require('gulp-flatten');
var karma = require('gulp-karma');
var templateCache = require('gulp-ng-html2js');
var minifyHtml = require('gulp-minify-html');



var jsLibraries = [
    'bower_components/momentjs/moment.js',
    'bower_components/angular/angular.js',
    'bower_components/angular-resource/angular-resource.js',
    'bower_components/angular-route/angular-route.js'
];

var otherLibraries = [
    'bower_components/fontawesome/css/font-awesome.min.css'
];
var fonts = [
    'bower_components/fontawesome/fonts/*.*'
];

var scripts = ['src/**/*.js', '!src/**/*.spec.js'];

var templateFiles = 'src/**/*.html';

var sassFiles = 'src/**/*.scss';

var unitInput = [
    '_build/libs.js',
    '_build/templates.js',
    '_build/app.js',
    'bower_components/angular-mocks/angular-mocks.js',
    'src/**/*.spec.js'
];


gulp.task('scripts', ['templates'], function () {
    return gulp.src(scripts)
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'))
        .pipe(concat('app.js', {
            process: function (src) {
                return [
                    '(function (sandbox) {',
                    '\'use strict\';',
                    src,
                    '}(this));'
                ].join('\n');
            }
        }))
        .pipe(gulp.dest('_build/'));
});

gulp.task('compass', function () {
    return gulp.src(sassFiles)
        .pipe(flatten())
        .pipe(gulp.dest('_tmp/sass'))
        .pipe(compass({
            css: '_build',
            sass: '_tmp/sass',
            image: 'assets/img'
        }))
        .on('error', function (err) {
            throw err;
        })
        .pipe(gulp.dest('_build/'));
});


gulp.task('templates', function () {
    return gulp.src(templateFiles)
    .pipe(minifyHtml({
        empty: true,
        spare: true,
        quotes: true
    }))
    .pipe(templateCache({
        moduleName: 'amb.templates',
        rename: function (url) {
            return url.replace('app/', '');
        }
    }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('_build/'));
});


gulp.task('libs', function () {
    return gulp.src(jsLibraries)
        .pipe(concat('libs.js'))
        .pipe(gulp.dest('_build/'));
});


gulp.task('fontawesome', ['fonts'], function () {
    gulp.src(otherLibraries)
    .pipe(gulp.dest('_build/fontawesome'));
});


gulp.task('fonts', function () {
    gulp.src(fonts)
    .pipe(gulp.dest('_build/fonts'));
});


gulp.task('test', ['scripts', 'templates'], function () {
    return gulp.src(unitInput)
        .pipe(karma({
            configFile: 'karma.conf.js',
            action: 'run'
        }))
        .on('error', function (err) {
            console.log(err);
            throw err;
        });
});

// gulp.task('reload', [], function () {
//     return gulp.src(['build/*'])
//         .pipe(livereload());
// });


gulp.task('watch', ['default'], function () {
    gulp.watch(scripts, ['scripts']);
    gulp.watch(sassFiles, ['compass']);
    gulp.watch(templateFiles, ['templates']);
    gulp.src(unitInput)
    .pipe(karma({
        action: 'watch',
        configFile: 'karma.conf.js'
    }));
    livereload.listen();
    gulp.watch('_build/**').on('change', livereload.changed);


    //
    // gulp.watch('build/**').on('change', function (file) {
    //     server.changed(file.path);
    // });

});


gulp.task('default', function () {
    gulp.start('libs', 'compass', 'scripts', 'test', 'fontawesome');
});

gulp.task('clean-build-dir', function () {
    gulp.src('_build/**/*', {read: false}).pipe(clean());
});

// function handleError(err) {
//   console.log(err.toString());
//   this.emit('end');
// }
