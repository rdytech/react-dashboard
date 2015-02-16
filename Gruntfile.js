/*global module:false*/
module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserify: {
            all: {
                src: ['src/Dashboard.js'],
                dest: 'react-dashboard.js',
                options: {
                    transform: ['reactify'],
                    browserifyOptions: {
                      external: ['react/addons','react']
                    }
                }
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-bower');
    grunt.loadNpmTasks('grunt-jest');
    grunt.loadNpmTasks('grunt-browserify');

    // Default task.
    grunt.registerTask('default', ['jest']);

};
