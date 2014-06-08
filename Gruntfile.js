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
            }
        },

        copy: {
            styles: {
                expand: true,
                flatten: true,
                src: ['src/**/*.scss'],
                dest: '_tmp/',
                filter: 'isFile'
            }
        },

        compass: {
            dev: {
                options: {
                    sassDir: '_tmp',
                    cssDir: '_build',
                    environment: 'development'
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
                tasks: ['copy:styles', 'compass:dev']
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
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('default', [
        'jshint:all',
        'concat:libraries',
        'concat:scripts',
        'copy:styles',
        'compass:dev',
        'karma:unit',
        'watch'
    ]);
};
