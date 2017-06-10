const gulp = require('gulp')

const pug = require('gulp-pug')
const eslint = require('gulp-eslint')
const sass = require('gulp-sass')
const minify = require('gulp-minify')
const babel = require('gulp-babel')

gulp.task('pug -> html', () => {
	return gulp.src('./public/**/*.pug')
		.pipe(pug())
		.pipe(gulp.dest('../dev/public/'))
})

gulp.task('sass -> css', () => {
	return gulp.src('./public/styles/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('../dev/public/css'))
})

gulp.task('copy', () => {
	return gulp.src('./**/*.json')
		.pipe(gulp.dest('../dev'))
})


gulp.task('js -> babel', () => {
	return gulp.src(['./public/js/**/*.js'])
		.pipe(babel({presets: ['es2015']}))
		.pipe(gulp.dest('../dev/public/js'))
})

gulp.task('lint', () => {
	return gulp.src(['./public/js/**/*.js'])
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failAfterError())
})

gulp.task('watch:pug', () => {
	gulp.watch('./public/**/*.pug', ['pug -> html'])
})

gulp.task('watch:sass', () => {
	gulp.watch('./public/styles/**/*.scss', ['sass -> css'])
})

gulp.task('watch:js', () => {
	gulp.watch(['./public/js/**/*.js'], ['lint', 'js -> babel'])
})
gulp.task('watch:copy', () => {
	gulp.watch('./**/*.json', ['copy'])
})


gulp.task('default', function () {
	gulp.start(
		'lint', 
		'js -> babel', 
		'sass -> css', 
		'pug -> html',
		'copy',
		'watch:pug',
		'watch:sass',
		'watch:js',
		'watch:copy'
	)
})