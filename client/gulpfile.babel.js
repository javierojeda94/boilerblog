import gulp         from "gulp";
import browserify   from "browserify";
import source       from "vinyl-source-stream";
import htmlmin      from "gulp-htmlmin";
import streamify    from "gulp-streamify";
import uglify       from "gulp-uglify";
import glob         from "glob";
import del          from "del";
let browserSync = require("browser-sync").create();

gulp.task("default", ["serve"]);

gulp.task("move-html", () => {
  gulp.src("src/index.html")
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest("dist"));
  return gulp.src("src/views/**/*")
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest("dist/views", {force: true}));
});

gulp.task("move-img", () => {
  gulp.src("src/favicon.png").pipe(gulp.dest("dist"));
  return gulp.src("src/img/**/*")
    .pipe(gulp.dest("dist/img"));
});

gulp.task("move-css", () => {
  return gulp.src("src/css/**/*")
    .pipe(gulp.dest("dist/css"));
});

gulp.task('clean-dist', () => {
  return del.sync("dist/**/*");
});

gulp.task("transpile", ["clean-dist", "move-html", "move-img", "move-css"], () => {
  let files = glob.sync("src/js/**/*.js");
  return browserify({entries: files})
    .transform("babelify")
    .bundle()
    .on("error", function(error){
      console.error( "\nError: ", error.message, "\n");
      this.emit("end");
    }).pipe(source("bundle.js"))
    //.pipe(streamify(uglify()))
    .pipe(gulp.dest("dist"));
});

gulp.task("reload", ["transpile"], () => {
  browserSync.reload();
});

gulp.task("serve", ["transpile"], () => {
  browserSync.init({
    server: {
      baseDir: "dist"
    }
  });
  gulp.watch(["src/**/*"],["reload"]);
});
