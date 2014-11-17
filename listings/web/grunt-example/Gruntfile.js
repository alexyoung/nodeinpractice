module.exports = function(grunt) { //<co id="callout-gruntfile-1" />
  grunt.loadNpmTasks('grunt-contrib-connect'); //<co id="callout-gruntfile-2" />

  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 8080,
          base: 'public', //<co id="callout-gruntfile-3" />
          keepalive: true
        }
      }
    }
  });

  grunt.registerTask('default', ['connect:server']); //<co id="callout-gruntfile-4" />
};
