module.exports = function (grunt) {

    'use strict';

    var libraries = [
        'bower_components/angular/angular.js',
        'bower_components/angular-route/angular-route.js'
    ];


    grunt.initConfig({

        concat: {
            libraries: {
                src: libraries,
                dest: '_build/libs.js'
            },
            scripts: {
                src: ['src/**/*.js', '!src/**/*.spec.js'],
                dest: '_build/app.js'
            },
            styles: {
                src: 'src/**/*.scss',
                dest: '_tmp/app.scss'
            }
        },


        sass: {
            dist: {
                files: {
                    '_build/app.css': '_tmp/app.scss'
                }
            }
        },


        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: ['src/**/*.js']
        },


        watch: {
            options: {
                spawn: false,
                livereload: true
            },
            scripts: {
                files: ['src/**/*.js'],
                tasks: ['default']
            },
            templates: {
                files: ['src/**/*.html']
            },
            styles: {
                files: ['src/**/*.scss'],
                tasks: ['concat:styles', 'sass:dist']
            }
        },

        karma: {
            unit: {
                configFile: 'karma.conf.js',
                options: {
                    singleRun: true,
                    files: [
                        '_build/libs.js',
                        '_build/app.js',
                        'bower_components/angular-mocks/angular-mocks.js',
                        'src/**/*.spec.js'
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('default', [
        'jshint:all',
        'concat:libraries',
        'concat:scripts',
        'concat:styles',
        'sass:dist',
        'karma:unit',
        'watch'
    ]);
};
