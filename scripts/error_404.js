/**
* error 404 page Generator
* @description generate the 404.html in root directory
*/

hexo.extend.generator.register('error_404', function (locals) {
    return {
        path: '404.html',
        data: locals.posts,
        layout: '404'
    }
})