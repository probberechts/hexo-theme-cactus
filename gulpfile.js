var decompress = require('gulp-decompress');
var del = require('del');
var download = require("gulp-download");
var fs = require('fs');
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var path = require('path');
var stylint = require('gulp-stylint');
var stylish = require('jshint-stylish');
var yaml = require('js-yaml');


gulp.task('lib:clean',function(){
  return del([ './source/lib/*' ]);
})

gulp.task('lib:fontAwesome',function(){
  return gulp.src([
    'node_modules/@fortawesome/fontawesome-free/webfonts/*',
    'node_modules/@fortawesome/fontawesome-free/css/all.min.css'
  ], {base: 'node_modules/@fortawesome/fontawesome-free'})
    .pipe(gulp.dest('./source/lib/font-awesome'))
})

gulp.task('lib:mesloFont', function () {
  return download('https://github.com/andreberg/Meslo-Font/blob/master/dist/v1.2/Meslo%20LG%20v1.2.zip?raw=true')
    .pipe(decompress({
      filter: file => path.extname(file.path) == '.ttf',
      strip: 1
    }))
    .pipe(gulp.dest('./source/lib/meslo-LG'));
});


gulp.task('lib:vazirFont',function(){
  return gulp.src([
    'node_modules/vazir-font/dist/*',
  ], {base: 'node_modules/vazir-font/dist'})
    .pipe(gulp.dest('./source/lib/vazir-font'))
})

gulp.task('lib:justifiedGallery',function(){
  return gulp.src([
    'node_modules/justifiedGallery/dist/css/*.min.css',
    'node_modules/justifiedGallery/dist/js/*.min.js'
  ], {base: 'node_modules/justifiedGallery/dist'})
    .pipe(gulp.dest('./source/lib/justified-gallery'))
})

gulp.task('lib:jQuery',function(){
  return gulp.src(['node_modules/jquery/dist/jquery.min.js'])
    .pipe(gulp.dest('./source/lib/jquery'))
})

gulp.task('lib:clipboard',function(){
  return gulp.src(['node_modules/clipboard/dist/clipboard.min.js'])
    .pipe(gulp.dest('./source/lib/clipboard'))
})

gulp.task('lint:js', function() {
  return gulp.src([
    './source/js/**/*.js',
  ]).pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task('lint:stylus', function () {
  return gulp.src([
    './source/css/*.styl',
    './source/css/_partial/*.styl',
    './source/css/_colors/*.styl'
  ]).pipe(stylint({
      config: '.stylintrc',
      reporter: {
        reporter: 'stylint-stylish',
        reporterOptions: {
          verbose: true
        }
      }
    }))
    .pipe(stylint.reporter());
});

gulp.task('validate:config', function(cb) {
  var themeConfig = fs.readFileSync(path.join(__dirname, '_config.yml'));

  try {
    yaml.safeLoad(themeConfig);
    cb();
  } catch(error) {
    cb(new Error(error));
  }
});

gulp.task('validate:languages', function(cb) {
  var languagesPath = path.join(__dirname, 'languages');
  var languages = fs.readdirSync(languagesPath);
  var errors = [];
  for (var i in languages) {
    var languagePath = path.join(languagesPath, languages[i]);
    try {
      yaml.safeLoad(fs.readFileSync(languagePath), {
        filename: path.relative(__dirname, languagePath)
      });
    } catch(error) {
      errors.push(error);
    }
  }
  if (errors.length == 0) {
    cb();
  } else {
    cb(errors);
  }
});

gulp.task('lib', gulp.series(
  'lib:clean', 'lib:jQuery', 'lib:clipboard', 'lib:fontAwesome', 'lib:mesloFont',
  'lib:vazirFont', 'lib:justifiedGallery'));
gulp.task('lint', gulp.parallel('lint:js', 'lint:stylus'));
gulp.task('validate', gulp.parallel('validate:config', 'validate:languages'));
gulp.task('default', gulp.parallel('lint', 'validate'));
