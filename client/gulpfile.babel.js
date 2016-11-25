import gulp         from "gulp";
import browserify   from "browserify";
import source       from "vinyl-source-stream";
import htmlmin      from "gulp-htmlmin";
import streamify    from "gulp-streamify";
import uglify       from "gulp-uglify";
let browserSync = require("browser-sync").create();

gulp.task("default", ["serve"]);

gulp.task("move-html", () => {
  return gulp.src("index.html")
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest("dist"));
});

gulp.task("transpile", ["move-html"], () => {
  return browserify("src/app.js")
    .transform("babelify")
    .bundle()
    .on("error", function(error){
      console.error( "\nError: ", error.message, "\n");
      this.emit("end");
    }).pipe(source("bundle.js"))
    .pipe(streamify(uglify()))
    .pipe(gulp.dest("dist"));
});

gulp.task("reload", ["transpile"], () => {
  browserSync.reload();
});

gulp.task("serve", () => {
  browserSync.init({
    server: {
      baseDir: "dist"
    }
  });
  gulp.watch([
    "src/*.js",
    "src/controllers/*.js",
  ], ["reload"]);
});
