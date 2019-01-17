const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const react = require('gulp-react');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const watch = require('gulp-watch'); 

// ES6转ES5时，使用@babel/preset-env，并在.babelrc中指定presets为"env"
// React .jsx文件转译时，使用babel插件

gulp.task('default', () => {
    return gulp.src('app/*.jsx')
        // .pipe(babel())
        .pipe(sourcemaps.init())
        .pipe(babel({
            plugins: ['transform-react-jsx']
        }))
        .pipe(uglify())
        .pipe(concat('all.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));
}); 

// gulp.task('watch', () => {
//     watch('app/*.jsx', () => gulp.start('default'));
// }); 