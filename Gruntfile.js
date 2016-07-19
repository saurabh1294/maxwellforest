module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'tests/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      },
    },
	
	bgShell: {
		_defaults: {
        bg: true
      },
	 
	 runServer: {
        cmd: 'webdriver-manager start'
      }
	},
	
	shell: {
		deploy : {
			command : [
				'ping localhost -n 5 -w 1000',
				'protractor tests/conf.js'
			].join('&&')
		}
	},

    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    },

    exec: {
		execBatchfile: {
			command : 'exec',
			stdout: true,
			stderr: true
		}
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-bg-shell');
  grunt.loadNpmTasks('grunt-exec');

  grunt.registerTask('default', ['jshint', 'bgShell', 'shell']);

};