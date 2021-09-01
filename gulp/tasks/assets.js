import gulp from 'gulp';
import config from '../config';

const fontsBuild = () => (
  gulp.src(`${config.src.fonts}/**/*`)
    .pipe(gulp.dest(config.dest.fonts))
);

// const videoBuild = () => (
//  gulp.src(`${config.src.video}/**/*`)
//    .pipe(gulp.dest(config.dest.video))
// );

export const assetsBuild = gulp.parallel(fontsBuild /* videoBuild */);

export const assetsWatch = () => {
  gulp.watch(`${config.src.fonts}/**/*`, fontsBuild);
  // gulp.watch(`${config.src.video}/**/*`, videoBuild);
};
