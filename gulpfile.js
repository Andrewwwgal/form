const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const uglify = require('gulp-uglify-es').default;
const sass = require("gulp-sass");
const concat = require("gulp-concat");
const autoprefixer = require('gulp-autoprefixer');


gulp.task("copyHtml", () => gulp.src("./src/*.html")
                            .pipe(gulp.dest("./dist")));

gulp.task("imageMin", () => gulp.src("./src/img/*")
                            .pipe(imagemin())
                            .pipe(gulp.dest("./dist/img")));

gulp.task("sass", () => gulp.src("./src/sass/*.scss")
                            .pipe(autoprefixer({
                                browsers: ['last 10 versions'],
                                cascade: false
                            }))
                            .pipe(sass().on("error", sass.logError))
                            .pipe(gulp.dest("./dist/style")));

gulp.task("concat", () => gulp.src("./src/script/*.js")
                            .pipe(concat("main.js"))
                            .pipe(uglify())
                            .pipe(gulp.dest("./dist/script")));


// gulp.task('default', ['copyHtml', 'imageMin', 'sass', 'concat']);

gulp.task("watch", () => {
    gulp.watch('./src/script/*.js', gulp.series('concat'));
    gulp.watch('./src/img/*', gulp.series('imageMin'));
    gulp.watch('./src/sass/*.scss', gulp.series('sass'));
    gulp.watch('./src/*.html', gulp.series('copyHtml'));
})