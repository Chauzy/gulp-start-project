import browserSync from 'browser-sync';
import config from '../config';

const server = (done) => {
  browserSync.create().init({
    server: {
      baseDir: config.dest.root,
    },
    files: [
      `${config.dest.html}/*.html`,
      `${config.dest.css}/*.css`,
      `${config.dest.js}/*.js`,
      {
        match: `${config.dest.images}/**/*`,
        fn() {
          this.reload();
        },
      },
    ],
    notify: false,
  });

  done();
};

export default server;
