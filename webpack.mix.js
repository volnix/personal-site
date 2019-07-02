const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('src/js/calendar.js', 'public/js')
    //.js('src/js/main.js', 'dist/js')
    .sass('src/sass/home.scss', 'public/css')
    .sass('src/sass/running.scss', 'public/css');

mix.copy('src/*.html', 'public');
mix.copy('src/images/*', 'public/images');