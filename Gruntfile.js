module.exports = function (grunt) {

    'use strict';

    var libraries = [
        'bower_components/momentjs/moment.js',
        'bower_components/angular/angular.js',
        'bower_components/angular-resource/angular-resource.js',
        'bower_components/angular-route/angular-route.js'
    ];


    grunt.initConfig({

        concat: {
            libraries: {
                src: libraries,
                dest: '_build/libs.js'
            },
            scripts: {
                src: ['src/app/config/config.js', 'src/**/*.js', '!src/**/*.spec.js'],
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

        ngtemplates: {
            'amb.templates': {
                src: '<%= watch.templates.files %>',
                dest: '_build/_templates.js',
                options: {
                    url: function (url) {
                        return url.replace('src/app/', '');
                    },
                    standalone: 'true',
                    htmlmin: {
                        collapseBooleanAttributes:      true,
                        collapseWhitespace:             true,
                        removeAttributeQuotes:          true,
                        removeComments:                 true,
                        removeEmptyAttributes:          true,
                        removeScriptTypeAttributes:     true,
                        removeStyleLinkTypeAttributes:  true
                    }
                }
            }
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
                files: ['src/**/*.html'],
                tasks: ['ngtemplates:amb.templates']
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
                        '_build/_templates.js',
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
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('default', [
        'jshint:all',
        'ngtemplates:amb.templates',
        'concat:libraries',
        'concat:scripts',
        'copy:styles',
        'compass:dev',
        'karma:unit',
        'watch'
    ]);
};
