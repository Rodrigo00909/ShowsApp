const { series, src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const webp = require('gulp-webp');
const concat = require('gulp-concat');

const paths = {
    imagenes: 'src/img/**/**',
    scss: 'src/scss/**/*.scss',
    js: 'src/js/**/*.js'
}

function css() {
    return src(paths.scss)
        .pipe(sass())
        .pipe(dest('./build/css'));
}

function minificarcss() {
    return src(paths.scss)
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(dest('./build/css'));
}

function javascript() { // Gulp-concat es para tener archivos con _ como en sass
    // Cada archivo nuevo q tenga de js, seprados x funcionalidad se compilan en bundle.js
    return src(paths.js)
        .pipe(concat('bundle.js'))
        .pipe(dest('./build/js'))
}

function minificarimagenes() {
    return src(paths.imagenes)
        .pipe(imagemin())
        .pipe(dest('./build/img'))
        .pipe(notify({message: 'Imagen Minificada'}));
}

function versionwebp() {
    return src(paths.imagenes)
        .pipe(webp())
        .pipe(dest('./build/img'))
        .pipe(notify({message: 'Versión Webp Lista'}));
}

function watchArchivos() {
    watch(paths.scss, css)
    watch(paths.js, javascript)
}

exports.css = css;
exports.minificarcss = minificarcss;
exports.minificarimagenes = minificarimagenes;
exports.watchArchivos = watchArchivos;
exports.default = series(css, javascript, minificarimagenes, versionwebp, watchArchivos); // Ejecuta funcion css e minificarimagenes(SERIES)