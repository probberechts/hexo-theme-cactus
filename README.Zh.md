# Cactus

一款响应迅速,简洁大气,干净的 [Hexo](http://hexo.io) 站点主题。

演示地址: [Demo](https://probberechts.github.io/hexo-theme-cactus/)

![screenshot](https://user-images.githubusercontent.com/2175271/137625287-24a4ac77-fbc9-4c99-a4cd-90455d93d13c.png)

## 索引

- [版本信息](#版本信息)
- [主题特色](#主题特色)
- [安装准备](#安装准备)
- [安装主题](#安装主题)
- [主题配置](#主题配置)
- [许可证](#许可证)
- [Translation Version 翻译版本](#Translation Version 翻译版本)

## General

- **主题版本** : 3.0
- **兼容性** : Hexo 3 or later 支持 Hexo 3 以上版本

## 主题特色

- 响应迅速
- 拥有多种配色方案
- 自定义代码高亮
- 可自由配置导航菜单
- 支持本地搜索
- 项目列表
- 国际化（I18n）支持
- 支持 Disqus / Utterances 评论系统
- 支持 Google analytics / Baidu Tongji / [Umami Analytics](https://umami.is) 的数据分析功能
- 支持 Font Awesome 图标
- 设计简洁

## 安装准备

1.  如果要使用这个主题，您必须先安装 [Hexo](https://hexo.io/docs/).

2. 接着使用hexo初始化站点，创建站点根目录:

    ```sh
    $ hexo init my-blog
    ```

3. 进入创建的根目录:

    ```sh
    $ cd my-blog
    ```

## 安装主题

1. 在根目录使用命令行输入:

    ```sh
    $ git clone https://github.com/probberechts/hexo-theme-cactus.git themes/cactus
    ```

2. 将`_config.yml`的`theme`改为 `cactus`来启用主题(或者注释掉)

    ```yml
    # theme: landscape
    theme: cactus
    ```

   如果要获取更多有关此主题的自定义设置，请参见下文。


3. 使用`hexo new [layout] <title>` 来创建新页面或者新文章。
   例如, 创建一个 "about me" 页面, 需要命令行输入:
   
   ```sh
    $ hexo new page about
   ```
   
   这样将会在`source/about/index.md`目录下建立一个新页面.
   
   同样的，你也可以这样输入来建立一个新文章:
   
   ```sh
    $ hexo new post "hello world"
   ```
   
   你建立的新文章，就会出现在`source/_posts/hello-world.md`
   


4. 本地预览:输入`hexo generate` 来生成Html文件，输入`hexo server`来进行本地预览


5. [接着，部署博客!](https://hexo.io/docs/one-command-deployment.html)! 

## 主题配置

您可以(也应该)修改几个设置来让站点更加个性化。所有的设置可以在主题的[_config.yml](_config.yml)中找到。下面是一些重要的配置.

有两种方法来修改主题的默认设置. 
1. Fork 一个新的分支，并且在新分支中设置自己的主题.
2. 在站点的主要配置中进行设置:打开站点的[_config.yml](_config.yml),在里面新建`theme_config`进行设置
例如:

```yml
# _config.yml
theme_config:
  colorscheme: white
```

```yml
# themes/cactus/_config.yml
colorscheme: dark
```

 此操作将覆盖你在`themes/cactus/_config.yml`设置的默认的黑色配色方案

### 主题颜色

目前，这个主题有四种配色方案:[dark](https://probberechts.github.io/hexo-theme-cactus/cactus-dark/public/), [light](https://probberechts.github.io/hexo-theme-cactus/cactus-light/public/),
[white](https://probberechts.github.io/hexo-theme-cactus/cactus-white/public/) 和 [classic](https://probberechts.github.io/hexo-theme-cactus/cactus-classic/public/).这些都可以在主题的`_config.yml`中设置。

```yml
colorscheme: light
```

如果不满意的话，你也可以在`source/css/_colors`中添加新的配色方案。

### 导航栏

导航栏可以在 `_config.yml`进行设置

```yml
nav:
  home: /
  about: /about/
  articles: /archives/
  projects: http://github.com/probberechts
  LINK_NAME: URL
```

### 首页文章展示

可以根据自己需要设置首页文章显示，部分显示和全部显示两种

  - 部分显示的情况下，默认显示新发布的5篇文章

    ```yml
    posts_overview:
      show_all_posts: false
      post_count: 5
    ```

  - 文章全部显示

    ```yml
    posts_overview:
      show_all_posts: true
    ```

### 项目列表

可以在`source/_data/projects.json`中设置来展示你想要展示的项目

```json
[
    {
       "name":"Hexo",
       "url":"https://hexo.io/",
       "desc":"A fast, simple & powerful blog framework"
    },
    {
       "name":"Font Awesome",
       "url":"http://fontawesome.io/",
       "desc":"The iconic font and CSS toolkit"
    }
]
```

### 社交链接设置

Cactus主题可以添加您的社交平台链接. 在主题的`_config.yml`中写上链接来启用该功能。

```yml
social_links:
  github: your-github-url
  twitter: your-twitter-url
  NAME: your-NAME-url
```

其中`NAME`指的是[Font Awesome icon](https://fontawesome.com/icons?d=gallery&s=brands)的名称

### 版权信息设置

默认情况下，Cactus将在您的版权信息中使用当前年份。 如果需要自己设置，请修改主题的`_config.yml`中的信息。

```yml
copyright:
  start_year: 2016
  end_year:
```

### 语言配置

如果您第一次使用 Hexo 或者第一次了解到 国际化(i18n) ,请阅读[Hexo documentation - internationalization (i18n) section](https://hexo.io/docs/internationalization.html),来了解详情。

目前，该主题已经支持以下语言: 

-  英语（en），默认设置
-  巴西葡萄牙语(pt-br)
-  加泰罗尼亚语(ca)
-  简体中文 (Simplified, PRC) (zh-CN)
-  荷兰语(nl)
-  法语(fr)
-  意大利语(it)
-  波斯语(fa)
-  俄语(ru)
-  西班牙语(es)
-  德语(de)

如果你想使用上面列出的其中一种语言，只需在设置主题的`_config.yml`中的`language`设置所需的语言(例如: (例如，`fr`))
如果碰到不支持的语言，可以通过如下步骤添加(这里以添加日语为例):

1. 在Hexo配置文件`_config.yml`中设置`language`为`ja`
2. 在`themes/cactus/languages/`文件夹中建立 `ja.yml`文件
3. 复制`themes/cactus/languages/default.yml`的内容然后粘贴到`ja.yml`文件中
4. 最后用日语翻译替换所有英文字符


**注意:Cactus不支持多语言网站。**

### RTL支持

该主题支持波斯语和阿拉伯语的RTL语言。
如果您想使用RTL布局，请更改主题的`_config.yml`中的`direction`属性,将其修改为 `rtl`
注意，这也会将字体更改为[Vazir](https://github.com/rastikerdar/vazir-font)，这是一种波斯字体。

```
direction: rtl
```

### RSS

在主题的`_config.yml`文件中设置`rss`字段可以设为一下几个:

1.  `rss: false` 这时候完全禁用RSS(默认设置)。
2. 设置特定的Feed链接
3. 留空以使用[hexo-generator-feed](https://github.com/hexojs/hexo-generator-feed)插件。


### 分析功能

使用 分析 功能要在主题的`_config.yml`中写上 Google, Baidu, Cloudflare or Umami 的`tracking_id`

```yml
google_analytics:
  enabled: true
  id: 'UA-49627206-1'

baidu_analytics:
  enabled: true
  id: 2e6da3c375c8a87f5b664cea6d4cb29c

cloudflare_analytics:
  enabled: true
  id: 0dabb6e21848405483a237e6a7b6ed04

umami_analytics:
  enabled: false
  id: e77e68be-f6e4-4br3-9365-2b76b57cd571
  host: https://analytics.domain.com
```

### DN

从CDN中加载Javascript和CSS资源，以提升访问速度。 默认从 [cdnjs](https://cdnjs.com/) 中加载资源

```yml
cdn:
  enable: true
  jquery: 'url'
  clipboard: 'url'
  font_awesome: 'url'
  justified_gallery_css: 'url'
  justified_gallery_js: 'url'
```

设置成`enable: false`时，将完全禁用CDN,并且从本地加载资源。
如果你只想对特定的资源禁用CDN，那么只需删除相应的条目。

```yml
cdn:
  enable: true
  jquery: 'url'
```

只有JQuery将从指定的CDN加载。

### 评论系统

Cactus支持两种评论系统: [Disqus](https://disqus.com) 和 [Utterances](https://utteranc.es)

#### Disqus 评论

首先，在Disqus上创建一个站点:[https://disqus.com/admin/create/](http://disqus.com/admin/create/).

然后，在主题的`_config.yml`写入对应信息: 

```yml
disqus:
  enabled: true
  shortname: SITENAME
```

其中`SITENAME`是你在Disqus上给你的网站的名字。

#### Utterances 评论

首先，按照上面的说明[official website](https://utteranc.es/)来设置 issue tracker 并且链接Utterances。

 然后，在主题的`_config.yml`写入对应信息:

```yml
utterances:
  enabled: true
  repo: owner/githubrepo
  issue_term: pathname
  label: utteranc
  theme: themename
```

其中每个参数都是配置Utterances得到的

* `repo`:用于 Utterances 链接
* `issue_term`:用于创建博客文章和 GitHub issues 之间的映射
* `label`: the label that will be assigned to issues created by Utterances
* `theme`:选择 Utterances 的主题

### 代码高亮设置

在 [the available colorschemes](https://github.com/probberechts/hexo-theme-cactus/tree/master/source/css/_highlight) 中找一个喜欢的，并且添加到主题的`_config.yml`

```yml
highlight: COLORSCHEME_NAME
```

### 标签和分类

标签和分类可以在你文章开头显示。
 例如: 

```markdown
title: Tags and Categories
date: 2017-12-24 23:29:53
tags:
- Foo
- Bar
categories: 
- Baz
---

这篇文章包含2个标签和1个分类。
```

您可以创建标签云。

```sh
$ hexo new page tags
```

然后将`type: tags`写在`source/tags/index.md`开头
您还可以向主页添加标签云，只要找到`_config.yml`中的 `tags_overview`条目，然后改为 `ture`
当然，你也可以使用命令行创建一个包含所有分类的页面。

```sh
$ hexo new page categories
```

然后将`type: categories`写在`source/categories/index.md`开头

最后，不要忘记创建到这些页面的链接，例如在导航菜单中: 

```yml
nav:
  tag: /tags/
  category: /categories/
```

### 本地搜索
 
首先，安装 [hexo-generate-search](https://www.npmjs.com/package/hexo-generator-search) 插件，来实现本地搜索。

```git
$ npm install hexo-generator-search --save
```
 
接下来，创建一个页面来显示搜索引擎

```sh
$ hexo new page search
```

同样在开头将页面设为`type: search`

```markdown
title: Search
type: search
---
```
 最后，编辑主题的`_config.yml`文件中，添加搜索功能。

```yml
nav:
  search: /search/
```

## 许可证

MIT


## Translation Version 翻译版本

Chinese Translation Version : 0.8 (Incomplete translation)
中文翻译版本: 0.8 (不完整翻译)
