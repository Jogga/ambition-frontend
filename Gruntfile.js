module.exports = function (grunt) {

    'use strict';

    var libraries = [
        'bower_components/angular/angular.js'
    ];


    grunt.initConfig({

        concat: {
            libraries: {
                src: libraries,
                dest: '_build/libs.js'
            },
            build: {
                src: ['src/**/*.js', '!src/**/*.spec.js'],
                dest: '_build/app.js'
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
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('default', [
        'jshint:all',
        'concat:libraries',
        'concat:build',
        'karma:unit'
    ]);

    grunt.registerTask('build', [
        'jshint:all',
        'concat:libraries',
        'concat:build'
    ]);
};
