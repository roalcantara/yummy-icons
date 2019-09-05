// tslint:disable: ban-types

'use strict'

import del from 'del'
// import { dest, src, task } from 'gulp'
// import concat from 'gulp-concat'
// import pug from 'gulp-pug'
// import sass, { logError } from 'gulp-sass'
// import ts from 'gulp-typescript'
// import { Gulpclass, MergedTask, SequenceTask, Task } from 'gulpclass'
// const tsProject = ts.createProject('tsconfig.json')

@Gulpclass()
export class Gulpfile {
  @Task()
  clean(cb: Function): void {
    return del(['./build/**'], cb)
  }
}

// task('dist:clean', () => {
//   return src('./dist', { read: false }).pipe(clean())
// })

// task('sass:compile', () => {
//   return src('./src/sass/yummy-icons.sass')
//     .pipe(
//       sass({
//         outputStyle: 'extended'
//       }).on('error', logError)
//     )
//     .pipe(concat('yummy-icons.css'))
//     .pipe(dest('dist'))
// })

// task('sass:minify', () => {
//   return src('./src/sass/yummy-icons.sass')
//     .pipe(
//       sass({
//         outputStyle: 'compressed'
//       }).on('error', logError)
//     )
//     .pipe(concat('yummy-icons.min.css'))
//     .pipe(dest('dist'))
// })

// task('fonts:copy', () => {
//   return src('./src/web-fonts/*.*').pipe(dest('dist/web-fonts'))
// })

// task('pug:compile', () => {
//   return src('./src/index.pug')
//     .pipe(
//       pug({
//         pretty: true
//       })
//     )
//     .pipe(dest('./'))
// })

// task('default', ['dist:clean', 'sass:compile', 'sass:minify', 'fonts:copy', 'pug:compile'])
