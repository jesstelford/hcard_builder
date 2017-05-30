'use strict';

var gulp=require('gulp'),
	sass=require('gulp-sass'),
	maps=require('gulp-sourcemaps'),
	uglify=require('gulp-uglify'),
	rename=require('gulp-rename');


gulp.task('compileSass',function(){
	 gulp.src('scss/application.scss')
	.pipe(maps.init())
	.pipe(sass())
	.pipe(maps.write('./'))
	.pipe(gulp.dest('css'));
});

gulp.task("build",["compileSass"]);

gulp.task('watchSass',function(){
	gulp.watch('scss/**/*.scss',['compileSass']);
});

gulp.task("default",["build"]);