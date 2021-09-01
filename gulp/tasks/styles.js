import gulp from 'gulp';
import sass from 'gulp-sass';
import plumber from 'gulp-plumber';
import autoprefixer from 'gulp-autoprefixer';
import gcmq from 'gulp-group-css-media-queries';
import cleanCSS from 'gulp-clean-css';
import rename from 'gulp-rename';
import sourcemaps from 'gulp-sourcemaps';
import gulpIf from 'gulp-if';
import config from '../config';

export const sassBuild = () => (
  gulp.src(`${config.src.sass}/main.scss`)
    .pipe(plumber())
    .pipe(gulpIf(config.isDev, sourcemaps.init()))
    .pipe(sass())
    .pipe(gulpIf(config.isProd, gcmq()))
    .pipe(gulpIf(config.isProd, autoprefixer()))
    .pipe(gulpIf(config.isProd, cleanCSS({ level: 2 })))
    .pipe(rename({
      suffix: '.min',
    }))
    .pipe(gulpIf(config.isDev, sourcemaps.write()))
    .pipe(gulp.dest(config.dest.css))
);

export const sassWatch = () => gulp.watch(`${config.src.sass}/**/*.scss`, sassBuild);
