/**
 * returns true if cdn is enabled and there's an entry for the specified
 * resource
 */
hexo.extend.helper.register('isCdnEnable', function (resource) {
  return (
    hexo.theme.config.cdn &&
    hexo.theme.config.cdn.enable &&
    hexo.theme.config.cdn[resource]
  );
});

/**
 * returns the script tag to load the specified resource from a CDN
 */
hexo.extend.helper.register('getCdnScript', function (resource) {
  return `<script src="${hexo.theme.config.cdn[resource]}" crossorigin="anonymous"></script>`;
});

/**
 * returns the link tag to load the specified resource from a CDN
 */
hexo.extend.helper.register('getCdnLink', function (resource, options) {
  options = options || {};
  if (options.preload) {
    return `<link rel="preload" as="style" href="${hexo.theme.config.cdn[resource]}" crossorigin="anonymous" onload="this.onload=null;this.rel='stylesheet'"/>`
  }
  return `<link rel="stylesheet" href="${hexo.theme.config.cdn[resource]}" crossorigin="anonymous" />`;
});
