title: Tag Plugins
date: 2013-12-25 00:14:39
tags:
---

This post is used for testing tag plugins. See [docs](http://zespia.tw/hexo/docs/tag-plugins.html) for more info.

## Block Quote

### Normal blockquote

> Praesent diam elit, interdum ut pulvinar placerat, imperdiet at magna.

### Quote from a book

{% blockquote David Levithan, Wide Awake %}
Do not just seek happiness for yourself. Seek happiness for all. Through kindness. Through mercy.
{% endblockquote %}

### Quote from Twitter

{% blockquote @DevDocs https://twitter.com/devdocs/status/356095192085962752 %}
NEW: DevDocs now comes with syntax highlighting. http://devdocs.io
{% endblockquote %}

### Quote from an article on the web

{% blockquote Seth Godin http://sethgodin.typepad.com/seths_blog/2009/07/welcome-to-island-marketing.html Welcome to Island Marketing %}
Every interaction is both precious and an opportunity to delight.
{% endblockquote %}

## Code Block

### Normal code block

```
alert('Hello World!');
```

### With caption

{% codeblock Array.map %}
array.map(callback[, thisArg])
{% endcodeblock %}

### With caption and URL

{% codeblock .compact http://underscorejs.org/#compact Underscore.js %}
.compact([0, 1, false, 2, ‘’, 3]);
=> [1, 2, 3]
{% endcodeblock %}

### With marked lines

Line 1,7-8,10 should be marked with different color.

{% codeblock lang:js mark:1,7-8,10 %}
const http = require('http');

const hostname = '127.0.0.1';
const port = 1337;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
{% endcodeblock %}

Note: Theme's style should support `.highlight.line.marked` (recommend to use the selection or current line color).

### Gist

{% gist 996818 %}

### jsFiddle

{% jsfiddle ccWP7 %}

## Pullquote

### Left

{% pullquote left %}
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
{% endpullquote %}

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempus molestie arcu, et fringilla mauris placerat ac. Nullam luctus bibendum risus. Ut cursus sed ipsum feugiat egestas. Suspendisse elementum, velit eu consequat consequat, augue lorem dapibus libero, eget pulvinar dolor est sit amet nulla. Suspendisse a porta tortor, et posuere mi. Pellentesque ultricies, mi quis volutpat malesuada, erat felis vulputate nisl, ac congue ante tortor ut ante. Proin aliquam sem vel mauris tincidunt, eget scelerisque tortor euismod. Nulla tincidunt enim nec commodo dictum. Mauris id sapien et orci gravida luctus id ut dui. In vel vulputate odio. Duis vel turpis molestie, scelerisque enim eu, lobortis eros. Cras at ipsum gravida, sagittis ante vel, viverra tellus. Nunc mauris turpis, elementum ullamcorper nisl pretium, ultrices cursus justo. Mauris porttitor commodo eros, ac ornare orci interdum in. Cras fermentum cursus leo sed mattis. In dignissim lorem sem, sit amet elementum mauris venenatis ac.

### Right

{% pullquote right %}
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
{% endpullquote %}

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula justo, lobortis sit amet semper vel, dignissim sit amet libero. Praesent ac tempus ligula. Maecenas at gravida odio. Etiam tristique volutpat lacus eu faucibus. Donec non tempus arcu. Phasellus adipiscing, mauris nec mollis egestas, ipsum nunc auctor velit, et rhoncus lorem ipsum at ante. Praesent et sem in velit volutpat auctor. Duis vel mauris nulla. Maecenas mattis interdum ante, quis sagittis nibh cursus et. Nulla facilisi. Morbi convallis gravida tortor, ut fermentum enim gravida et. Nunc vel dictum nisl, non ultrices libero. Proin vestibulum felis eget orci consectetur lobortis. Vestibulum augue nulla, iaculis vitae augue vehicula, dignissim ultrices libero. Sed imperdiet urna et quam ultrices tincidunt nec ac magna. Etiam vel pharetra elit.
