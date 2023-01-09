const { src, dest, series } = require('gulp');

const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');

function js() {
	return src('src/js/*.js')
		.pipe(babel())
		.pipe(uglify())
		.pipe(concat('index-min.js'))
		.pipe(dest('build/'));
}

function css() {
	return src('src/styles/*.scss')
		.pipe(sass())
		.pipe(cleanCSS())
		.pipe(concat('style-min.css'))
		.pipe(dest('build/'));
}

exports.default = series(js, css);