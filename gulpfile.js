const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const babel = require('gulp-babel');
const terser = require('gulp-terser');
const browsersync = require('browser-sync').create();

// Copy all HTML files
function copyHtml() {
    return src('src/**/*.html')
        .pipe(dest('build'));
}

// Copy all images as they are (no optimization required)
function copyImages() {
    return src('src/assets/**/*.{jpg, png, webp}')
        .pipe(dest('build/assets'));
}

// Compile and minify scss files
function scssTask() {
    return src('src/scss/style.scss', { sourcemaps: true })
        .pipe(sass())
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(dest('build/css/', { sourcemaps: '.' }));
}

// Concat and minify JS
function jsTask() {
    return src('src/js/script.js', { sourcemaps: true })
        .pipe(babel({ presets: ['@babel/preset-env'] }))
        .pipe(terser())
        .pipe(dest('build/js/', { sourcemaps: '.' }));
}

// Browsersync - Initialize a local server
function browserSyncServe(cb) {
    browsersync.init({
        server: {
            baseDir: './build'
        }
    });
    cb();
}
// Browsersync - Reload server onChange
function browserSyncReload(cb) {
    browsersync.reload();
    cb();
}

// Watch Task
function watchTask() {
	watch(
        'src/**/*.html', 
        series(copyHtml, browserSyncReload)
    );
	watch(
        'src/assets/**/*.{jpg, png, webp}', 
        series(copyImages, browserSyncReload)
    );
	watch(
		['src/scss/**/*.scss', 'src/**/*.js'],
		series(scssTask, jsTask, browserSyncReload)
	);
}

// Build Task
exports.build = series(
    copyHtml,
    copyImages,
    scssTask,
    jsTask
); 
// Default Gulp Task
exports.default = series(
    copyHtml,
    copyImages,
    scssTask,
    jsTask,
    browserSyncServe,
    watchTask
);