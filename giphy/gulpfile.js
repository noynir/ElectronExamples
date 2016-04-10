'use strict';

const gulp = require('gulp');
const path = require('path');
const $=require('gulp-load-plugins')({lazy:true});

const paths =(function (){
    let root ='./src';
    let dist = 'app';

    return {
        baseSrc:root,
        baseDest:dist,
        jsFiles:root + '/**/*.js',
        jsxFiles:root + '/**/*.jsx',
        htmlFiles:root + '/**/*.html'
    }
    
}());

gulp.task('babel',() => {
    console.log(paths.jsFiles);
    return gulp.src([paths.jsFiles, paths.jsxFiles])
            .pipe($.babel({presets:['react','es2015']}))
            .pipe(gulp.dest(paths.baseDest));
});

gulp.task('copyHtml',() => {
    return gulp.src([paths.htmlFiles])
            .pipe($.copy(paths.baseDest,{prefix:1})); 
});

gulp.task('watchFiles',function(){
    gulp.watch([paths.jsFiles,paths.jsxFiles,paths.htmlFiles]);
});
gulp.task('default',['babel','copyHtml','watchFiles']);



