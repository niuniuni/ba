var gulp = require('gulp');
var server = require('gulp-webserver');
var url = require('url');
var data = require('./src/data/data.json')
gulp.task('ser', function() {
    gulp.src('src')
        .pipe(server({
            host: 'localhost',
            port: 8000,
            livereload: true,
            middleware: function(req, res, next) {
                var n = url.parse(req.url, true);
                if (n.pathname === '/index') {
                    res.end(JSON.stringify(data))
                }
                next()
            }
        }))
})