module.exports = function(grunt) {
  return {
    gruntfile: {
      files: './Gruntfile.js',
      tasks: [
        'jshint:gruntfile'
      ]
    },
    grunttasks: {
      files: [
        'grunt/**/*',
        '.jshintrc',
        '.jscs.jquery.json'
      ],
      options: {
        reload: true
      },
      tasks: [
        'jshint:grunttasks'
      ]
    },
    readme: {
      files: 'README.md',
      tasks: ['groc']
    },
    demo: {
      files: ['<%= paths.src %>/demo/**'],
      tasks: [
        'copy:devdemo',
        'preprocess:dev',
      ]
    },
    js: {
      files: ['<%= jshint.src.src %>'],
      tasks: [
        'build:dev',
        'test',
      ],
    },
    peg: {
      files: "<%= paths.src %>/grammar/*",
      tasks: [
        'peg',
        'clean:devjscompiled',
        'copy:devjs',
        'concat:dev',
        'uglify:dev',
        'test',
      ]
    },
    sass: {
      files: '<%= paths.src %>/scss/**/*.scss',
      tasks: ['copy:devscss', 'sass:dev'],
    },
    tests: {
      files: ['<%= paths.src %>/test/**'],
      tasks: ['jshint:test', 'copy:devtest', 'test']
    },
    livereload: {
      options: {
        livereload: true,
      },
      files: ['<%= paths.dev %>/**', '<%= paths.docs %>/**'],
    }
  };
};
