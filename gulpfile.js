"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const { watch, series } = require("gulp");
var uglifycss = require("gulp-uglifycss");
var uglify = require("gulp-uglify");
var pipeline = require("readable-stream").pipeline;
// import imagemin from "gulp-imagemin";

function buildStyles() {
  return gulp
    .src("./sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./css"));
}

exports.buildStyles = buildStyles;

gulp.task("css", async function () {
  gulp
    .src("./css/*.css")
    .pipe(
      uglifycss({
        uglyComments: true,
      })
    )
    .pipe(gulp.dest("./dist/"));
});

gulp.task("compress", function () {
  return pipeline(gulp.src("./js/*.js"), uglify(), gulp.dest("dist"));
});

// export default () =>
//   gulp.src("./img/*").pipe(imagemin()).pipe(gulp.dest("dist/images"));

exports.default = function () {
  // You can use a single task
  watch("./sass/**/*.scss", buildStyles);
};
