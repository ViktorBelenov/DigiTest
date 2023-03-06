import gulp from 'gulp';
import plumber from 'gulp-plumber';
import less from 'gulp-less';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import csso from 'gulp-csso';
import rename from 'gulp-rename';
import browser from 'browser-sync';
import {deleteAsync} from 'del';

// Less+min
export const styles = () => {
    return gulp.src('source/less/style.less', { sourcemaps: true })
      .pipe(plumber())
      .pipe(less())
      .pipe(postcss([
        autoprefixer()
      ])
      .pipe(csso())
      )
      .pipe(rename("style.min.css"))
      .pipe(gulp.dest('build/css', { sourcemaps: '.' }))
      .pipe(browser.stream());
  }

  // Html

const html = () => {
  return gulp.src('source/*.html')
  .pipe(gulp.dest('build'));
}

//js

const js = () => {
  return gulp.src('source/js/*.js')
  .pipe(gulp.dest('build/js'));
}


//Images
export const copyImages = () => {
  return gulp.src('source/img/**/*.{png,jpg,svg}')
  .pipe(gulp.dest('build/img'));
}

//Copy fonts ico
const copy = (done) => {
  gulp.src([
  'source/fonts/*.{woff2,woff}',
  'source/*.ico',
  ], {
  base: 'source'
  })
  .pipe(gulp.dest('build'))
  done();
  }

  // Clean

  const clean = () => {
    return deleteAsync('build')
  }

  // Server

const server = (done) => {
  browser.init({
    server: {
      baseDir: 'build'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

// Reload

const reload = (done) => {
  browser.reload();
  done();
  }

//  watcher
  const watcher = () => {
    gulp.watch('source/less/**/*.less', gulp.series(styles));
    gulp.watch('source/*.html', gulp.series(html, reload));
  }

  export default gulp.series(
    clean,
    copy,
    copyImages,
    gulp.parallel(
      styles,
      html,
      js
      ),
      gulp.series(
      server,
      watcher
      ));

