module.exports = function(grunt){
    // Configuration

    grunt.initConfig({
        // pass in options to plugins, ref to file etc
        concat: {
            js: {
                src: ['js/*.js'],
                dest: 'build/scripts/main.js'
            },
            css: {
                src: ['css/reset.css', 'css/bootstrap.css', 'css/styles.css'],
                dest: 'build/css/main.css'
            }
        },
        sass: {
            build: {
                files: [{
                    src: 'sass/styles.scss',
                    dest: 'css/styles.css'
                }]
            }
        },
        uglify: {
            build: {
                files: [{
                    src: 'build/scripts/main.js',
                    dest: 'build/scripts/main.min.js'
                }]
            }
        },
        cssmin: {
            target: {
                files: [{
                  expand: true,
                  cwd: 'build/css',
                  src: ['*.css', '!*.min.css'],
                  dest: 'build/css',
                  ext: '.min.css'
                }]
              }
        }
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    
    

    // Register task


    grunt.registerTask('run', function(){
        console.log('I am running ')
    });
    grunt.registerTask('sleep', function(){
        console.log('I am sleeping ')
    });

    grunt.registerTask('all', ['sleep', 'run']);

    grunt.registerTask('concat-js', ['concat:js']);
    grunt.registerTask('concat-css', ['concat:css']);
    

}