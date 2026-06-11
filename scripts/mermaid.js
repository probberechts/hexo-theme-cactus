'use strict';

const mermaidEnabled = () => {
  return hexo.theme.config.mermaid && hexo.theme.config.mermaid.enable;
};

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Filter: replace ```mermaid fences with <pre class="mermaid"> before highlight.js processes them
hexo.extend.filter.register('before_post_render', function(data) {
  if (!mermaidEnabled()) return data;

  const mermaidRegex = /^```mermaid\s*\n([\s\S]*?)^```\s*$/gm;

  data.content = data.content.replace(mermaidRegex, (match, content) => {
    return `\n<pre class="mermaid">\n${escapeHtml(content.trim())}\n</pre>\n`;
  });

  return data;
}, 5);

// Tag plugin: {% mermaid %}...{% endmermaid %}
hexo.extend.tag.register('mermaid', function(args, content) {
  return `<pre class="mermaid">\n${escapeHtml(content.trim())}\n</pre>`;
}, { ends: true });
