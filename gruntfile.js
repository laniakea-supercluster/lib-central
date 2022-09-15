module.exports = function(grunt) {
  'use strict';

  const parentPath = '../../node_modules';

  grunt.initConfig({
    clean: ['./dist/**/*'],
    ts: {
      default: {
        tsconfig: false
      },
      options: {
        fast: 'never'
      },
      app: {
        files: [
          {
            src: ['src/**/*.ts', '!src/.baseDir.ts'],
            dest: './dist'
          }
        ],
        options: {
          module: "commonjs",
          target: "ES2017",          
          sourceMap: false,
          rootDir: 'src',
          experimentalDecorators: true,
          emitDecoratorMetadata: true
        }
      }
    },
    watch: {
      ts: {
        files: ['src/**/*.ts'],
        tasks: ['ts']
      }
    }
  });

  grunt.loadNpmTasks(`${parentPath}/grunt-ts`);
  grunt.loadNpmTasks(`${parentPath}/grunt-contrib-clean`);
  grunt.loadNpmTasks(`${parentPath}/grunt-contrib-copy`);
  grunt.loadNpmTasks(`${parentPath}/grunt-contrib-watch`);

  grunt.registerTask('default', ['clean', 'ts']);
};
