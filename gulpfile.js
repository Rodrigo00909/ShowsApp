const { series, src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const webp = require('gulp-webp');

const paths = {
    imagenes: 'src/img/**/**',
    scss: 'src/scss/**/*.scss'
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
}

exports.css = css;
exports.minificarcss = minificarcss;
exports.minificarimagenes = minificarimagenes;
exports.watchArchivos = watchArchivos;
exports.default = series(css, minificarimagenes, versionwebp, watchArchivos); // Ejecuta funcion css e minificarimagenes(SERIES)