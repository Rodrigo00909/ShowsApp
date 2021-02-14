const { series } = requiere('gulp');
const sass = requiere('gulp-sass');

function css(done) {
    console.log('compilando');

    done();
}

exports.css = css;