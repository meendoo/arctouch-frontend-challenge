module.exports = function(grunt) {

    grunt.initConfig({
        clean: ['dist/'],
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'dist/index.html': 'src/index.html'
                }
            }
        },
        copy: {
            fonts: {
                expand: true,
                src: 'src/fonts/*',
                dest: 'dist/fonts/',
                flatten: true,
                filter: 'isFile'
            }
        },
        imagemin: {
            dynamic: {
                options: {
                    optimizationLevel: 3,
                    svgoPlugins: [{removeViewBox: false}]
                },
                files: [{
                    expand: true,
                    cwd: 'src/imgs/',
                    src: ['**/*.{png,jpg,jpeg,gif,svg}'],
                    dest: 'dist/imgs/'
                }]
            }
        },
        uglify: {
            options: {
                mangle: true
            },
            dist: {
                files: {
                    'dist/js/scripts.js': 'src/js/scripts.js'
                }
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'dist/css/styles.css': 'src/css/styles.scss'
                }
            }
        },
        watch: {
            gruntfile: {
                files: 'GruntFile.js'
            },
            fonts: {
                files: ['src/fonts/*'],
                tasks: ['copy']
            },
            css: {
                files: ['src/css/*.scss', 'src/css/scss/*.scss'],
                tasks: ['sass'],
                options: {
                  livereload: true,
                }
            },
            images: {
                files: 'src/imgs/*',
                tasks: ['imagemin']
            },
            html: {
                files: 'src/index.html',
                tasks: ['htmlmin']
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('build', ['clean', 'copy', 'uglify', 'imagemin', 'htmlmin', 'sass']);
    grunt.registerTask('default', ['watch']);

};