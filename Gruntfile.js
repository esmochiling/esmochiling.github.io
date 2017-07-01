'use strict';

// Directory reference:
//   css: css
//   sass: _scss
//   javascript: js
//   images: img
//   fonts: fonts

module.exports = function (grunt) {
  // Show elapsed time after tasks run
  require('time-grunt')(grunt);
  // Load all Grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    // Configurable paths
    js: 'js',
    app: {
      app: 'app',
      dist: 'dist'
    },
    watch: {
      sass: {
        files: ['<%= app.app %>/_assets/scss/**/*.{scss,sass}'],
        tasks: ['sass:server', 'autoprefixer']
      },
      browserify: {
        files: ['<%= app.app %>/_assets/js/**/*.js'],
        tasks: ['browserify:dev']
      },
      autoprefixer: {
        files: ['<%= app.app %>/css/**/*.css'],
        tasks: ['copy:stageCss', 'autoprefixer:server']
      },
      jekyll: {
        files: [
          '<%= app.app %>/**/*.{html,yml,md,mkd,markdown}',
          '!<%= app.app %>/_bower_components/**/*'
        ],
        tasks: ['jekyll:server']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '.jekyll/**/*.html',
          '.tmp/css/**/*.css',
          '{.tmp,<%= app.app %>/_assets}/js/**/*.js',
          '<%= app.app %>/img/**/*.{gif,jpg,jpeg,png,svg,webp}'
        ]
      }
    },
    browserify: {
      dev: {
        files: {
          '.tmp/js/member.js': ['<%= app.app %>/_assets/js/member.js'],
          '.tmp/js/members.js': ['<%= app.app %>/_assets/js/members.js'],
          '.tmp/js/experience.js': ['<%= app.app %>/_assets/js/experience.js'],
          '.tmp/js/experiences.js': ['<%= app.app %>/_assets/js/experiences.js'],
          '.tmp/js/contact.js': ['<%= app.app %>/_assets/js/contact.js'],
          '.tmp/js/proposals.js': ['<%= app.app %>/_assets/js/proposals.js'],
          '.tmp/js/cookies.js': ['<%= app.app %>/_assets/js/cookies.js'],
          '.tmp/js/home.js': ['<%= app.app %>/_assets/js/home.js']
        }
      },
      dist: {
        files: {
          '<%= app.dist %>/js/member.js': ['<%= app.app %>/_assets/js/member.js'],
          '<%= app.dist %>/js/members.js': ['<%= app.app %>/_assets/js/members.js'],
          '<%= app.dist %>/js/experience.js': ['<%= app.app %>/_assets/js/experience.js'],
          '<%= app.dist %>/js/experiences.js': ['<%= app.app %>/_assets/js/experiences.js'],
          '<%= app.dist %>/js/contact.js': ['<%= app.app %>/_assets/js/contact.js'],
          '<%= app.dist %>/js/proposals.js': ['<%= app.app %>/_assets/js/proposals.js'],
          '<%= app.dist %>/js/cookies.js': ['<%= app.app %>/_assets/js/cookies.js'],
          '<%= app.dist %>/js/home.js': ['<%= app.app %>/_assets/js/home.js']
        }
      }
    },
    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        // change this to '0.0.0.0' to access the server from outside
        hostname: '0.0.0.0'
      },
      livereload: {
        options: {
          open: true,
          base: [
            '.tmp',
            '.jekyll',
            '<%= app.app %>'
          ]
        }
      },
      dist: {
        options: {
          open: true,
          base: [
            '<%= app.dist %>'
          ]
        }
      },
      test: {
        options: {
          base: [
            '.tmp',
            '.jekyll',
            'test',
            '<%= app.app %>'
          ]
        }
      }
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '<%= app.dist %>/*',
            // Running Jekyll also cleans the target directory.  Exclude any
            // non-standard `keep_files` here (e.g., the generated files
            // directory from Jekyll Picture Tag).
            '!<%= app.dist %>/.git*'
          ]
        }]
      },
      server: [
        '.tmp',
        '.jekyll'
      ]
    },
    sass: {
      server: {
        options: {
          sourceMap: true
        },
        files: [{
          expand: true,
          cwd: '<%= app.app %>/_assets/scss',
          src: '**/*.{scss,sass}',
          dest: '.tmp/<%= app.baseurl %>/css',
          ext: '.css'
        }]
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: [{
          expand: true,
          cwd: '<%= app.app %>/_assets/scss',
          src: '**/*.{scss,sass}',
          dest: '.tmp/<%= app.baseurl %>/css',
          ext: '.css'
        }]
      }
    },
    autoprefixer: {
      options: {
        browsers: [ '> 5%', 'ie > 6' ]
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%= app.dist %>/css',
          src: '**/*.css',
          dest: '<%= app.dist %>/css'
        }]
      },
      server: {
        files: [{
          expand: true,
          cwd: '.tmp/css',
          src: '**/*.css',
          dest: '.tmp/css'
        }]
      }
    },
    jekyll: {
      options: {
        bundleExec: true,
        config: '_config.yml,_config.build.yml',
        src: '<%= app.app %>'
      },
      dist: {
        options: {
          dest: '<%= app.dist %>',
        }
      },
      server: {
        options: {
          config: '_config.yml',
          dest: '.jekyll'
        }
      },
      check: {
        options: {
          doctor: true
        }
      }
    },
    useminPrepare: {
      options: {
        dest: '<%= app.dist %>'
      },
      html: [
        '<%= app.dist %>/**/*.html',
      ]
    },
    usemin: {
      options: {
        assetsDirs: '<%= app.dist %>',
        patterns: {
          js: [
            [/(img\/.*?\.(?:gif|jpeg|jpg|png|webp|svg))/gm, 'Update the JS to reference our revved images']
          ]
        }
      },
      html: ['<%= app.dist %>/**/*.html'],
      css: ['<%= app.dist %>/css/**/*.css'],
      // js: '<%= app.dist %>/js/**/*.js'
    },
    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true
        },
        files: [{
          expand: true,
          cwd: '<%= app.dist %>',
          src: '**/*.html',
          dest: '<%= app.dist %>'
        }]
      }
    },
    // Usemin adds files to concat
    concat: {},
    // Usemin adds files to uglify
    uglify: {
      // options: {
      //   banner: '/*! Grunt Uglify <%= grunt.template.today("yyyy-mm-dd") %> */ '
      // },
      // build: {
      //   src: 'bundle.js',
      //   dest: 'bundle.min.js'
      // }
    },
    // Usemin adds files to cssmin
    cssmin: {
      dist: {
        options: {
          check: 'gzip'
        }
      }
    },
    imagemin: {
      dist: {
        options: {
          progressive: true
        },
        files: [{
          expand: true,
          cwd: '<%= app.dist %>',
          src: ['*.{png,jpg,gif}'],
          dest: '<%= app.dist %>'
        }]
      }
    },
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= app.dist %>',
          src: '**/*.svg',
          dest: '<%= app.dist %>'
        }]
      }
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= app.app %>',
          src: 'favicon.ico',
          dest: '<%= app.dist %>'
        }, {
          expand: true,
          dot: true,
          cwd: '<%= app.app %>/_assets',
          src: 'fonts/**/*',
          dest: '<%= app.dist %>'
        }, {
          expand: true,
          dot: true,
          cwd: '<%= app.app %>/_assets',
          src: 'img/**/*',
          dest: '<%= app.dist %>'
        }, {
          expand: true,
          dot: true,
          cwd: '<%= app.app %>/_assets',
          src: 'svg/*.svg',
          dest: '<%= app.dist %>'
        }]
      },
      // Copy CSS, fonts and images into .tmp directory for Autoprefixer processing
      stageCss: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= app.app %>/css',
          src: '**/*.css',
          dest: '.tmp/css'
        }, {
          expand: true,
          dot: true,
          cwd: '<%= app.app %>/_assets/fonts',
          src: '**/*',
          dest: '.tmp/fonts'
        }, {
          expand: true,
          dot: true,
          cwd: '<%= app.app %>/_assets/img',
          src: '**/*',
          dest: '.tmp/img'
        }, {
          expand: true,
          dot: true,
          cwd: '<%= app.app %>/_assets/svg',
          src: '**/*',
          dest: '.tmp/svg'
        }]
      }
    },
    filerev: {
      options: {
        length: 4
      },
      dist: {
        files: [{
          src: [
            '<%= app.dist %>/js/**/*.js',
            '<%= app.dist %>/css/**/*.css',
            '<%= app.dist %>/img/**/*.{gif,jpg,jpeg,png,svg,webp}',
            '<%= app.dist %>/fonts/**/*.{eot*,otf,svg,ttf,woff}'
          ]
        }]
      }
    },
    buildcontrol: {
      options: {
        dir: 'dist',
        commit: true,
        push: true,
        message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
      },
      pages: {
        options: {
          remote: 'git@github.com:xavijam/mochiling.git',
          branch: 'gh-pages'
        }
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        '<%= app.app %>/js/**/*.js',
        'test/spec/**/*.js'
      ]
    },
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      check: {
        src: [
          '<%= app.app %>/css/**/*.css',
          '<%= app.app %>/_scss/**/*.scss'
        ]
      }
    },
    concurrent: {
      server: [
        'sass:server',
        'copy:stageCss',
        'jekyll:server'
      ],
      dist: [
        'sass:dist',
        'copy:dist'
      ]
    }
  });

  // Define Tasks
  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'concurrent:server',
      'autoprefixer:server',
      'connect:livereload',
      'browserify:dev',
      'watch'
    ]);
  });

  grunt.registerTask('server', function () {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve']);
  });

  // No real tests yet. Add your own.
  grunt.registerTask('test', [
    'clean:server',
    'concurrent:test',
    'connect:test'
  ]);

  grunt.registerTask('check', [
    'clean:server',
    'jekyll:check',
    'sass:server',
    'jshint:all',
    'csslint:check'
  ]);

  grunt.registerTask('build', [
    'clean',
    // Jekyll cleans files from the target directory, so must run first
    'jekyll:dist',
    'concurrent:dist',
    'useminPrepare',
    'concat',
    'autoprefixer:dist',
    'cssmin',
    'browserify:dist',
    'uglify',
    'imagemin',
    'svgmin',
    'filerev',
    'usemin',
    'htmlmin'
  ]);

  grunt.registerTask('deploy', [
    // 'check',
    // 'test',
    'build',
    'buildcontrol:pages'
  ]);

  grunt.registerTask('default', [
    'check',
    'test',
    'build'
  ]);
};
