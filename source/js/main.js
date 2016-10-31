if (!!$.prototype.justifiedGallery) {  // if justifiedGallery method is defined
    var options = {
        rowHeight: 140,
        margins: 4,
        lastRow: 'justify'
    };
    $('.article-gallery').justifiedGallery(options);
}
