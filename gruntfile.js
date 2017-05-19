module.exports = function(grunt) {
	grunt.initConfig({

		concat : { // Коннкатенация файлов
			options : {
				separator : '\n\n//************************************************************//\n\n',
			},
			dist : {
				src : ['source/scripts/*.js'],
				dest : 'build/dev/js/script.js',
			}
		}, //concat

		less : { // Препроцессор LESS
			dev: {
    		options: {
    	  	paths: ['source/less'],
    		},
    		files: {
    	  	'build/dev/css/style.css': 'source/less/bootstrap.less'
    		}
  		},
      prod : {
        options : {
          paths: ['source/less'],
          plugins: [
            new (require('less-plugin-autoprefix'))({browsers: ["last 5 versions"]}),
            // new (require('less-plugin-clean-css'))(cleanCssOptions)
          ],
        },
        files: {
          'build/dev/css/style.css': 'source/less/bootstrap.less'
        }
      },
  	}, //less

  	connect : { // Автоматическая перезагрузка HTML страницы
  		server : {
  			options : {
  				hostname : 'localhost',
  				port : 3000,
  				base : 'build/dev',
  				livereload : true
  			}
  		},
  	}, //connect

  	watch : { // Отслеживание изменений в файлах
  		options : {
  			spawn: false,
  			livereload : true
  		},
  		scripts : {
  			files : [
  				'build/dev/**/*.html',
  				'source/less/*.less',
  				'source/scripts/*.js'
  				],
  			tasks : ['concat', 'less']
  		}
  	}, //watch

  	svgmin: { // Минимизирует SVG файл
        options: {
            plugins: [
                {
                    removeViewBox: false
                }, {
                    removeUselessStrokeAndFill: false
                }, {
                    removeAttrs: {
                        attrs: ['xmlns']
                    }
                }, {
                    removeStyleElement: true
                }
            ]
        },
        dist: {
            expand: true,
            cwd: 'source/icons',
            src: '*.svg',
            dest: 'source/icons-min'
        }
    }, // svgmin

    svgstore: { // Объединяем SVG в один файл
        options: {
            prefix : 'icon-',
            svg: {
                xmlns: 'http://www.w3.org/2000/svg',
                style: 'display: none;'
            },
            inheritviewbox: true,
            cleanupdefs: true
        },
        card : {
            files: {
                'build/dev/icons/iconsset.svg': 'source/icons-min/*.svg'
            }
        }
    }, // svgstore

	}); //initConfig

	grunt.loadNpmTasks('grunt-contrib-concat');
 	grunt.loadNpmTasks('grunt-contrib-less');
 	grunt.loadNpmTasks('grunt-contrib-watch');
 	grunt.loadNpmTasks('grunt-contrib-connect');
 	grunt.loadNpmTasks('grunt-svgmin');
 	grunt.loadNpmTasks('grunt-svgstore');

 	grunt.registerTask('default',['concat','less', 'connect', 'watch']);
 	grunt.registerTask('svg', ['svgmin', 'svgstore:card']);
};