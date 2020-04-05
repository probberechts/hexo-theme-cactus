# Cactus-CN

[Cactus](https://github.com/probberechts/hexo-theme-cactus)(仙人掌)是一个为[Hexo](https://hexo.io)开发的响应式个人网站主题,拥有清简的样式。在采纳它作为博客主题时,它在支持中文字体方面略显不足，锯齿感明显，在此主题的基础上，修改了些许样式，以符合个人审美。
:cactus: [修改版演示](https://xuthus.cc)
:cactus: [原版演示](https://probberechts.github.io/hexo-theme-cactus/)

## 使用说明

- [特征](#特征)
- [安装](#安装)
- [配置](#配置)
- [版权](#版权)

## 特征

- 增强中文字体
- 修正发布文章未指定作者时作者项指向博客名称
- 加强代码高亮对比度
- 加强行级代码块样式
- 加强表格样式
- 替换Disqus为Valine
- 删除谷歌分析/百度统计

## 安装
1. 在博客的根目录下操作:

    ```git
    $ git clone https://github.com/xuthus5/hexo-theme-cactus.git themes/cactus
    ```

2. 修改根目录下的 `config.yml` 文件的 `theme` 选项.

    ```yml
    # theme: landscape
    theme: cactus
    ```
    
3. 创建 `关于我` 页面，请运行:
    ```sh
    $ hexo new page about
    ```
    文件将被创建在 `source/about/index.md`
    下, 我认为这是必要的操作，它是对你个人的介绍，网站导航默认情况下也将引用它。
    
4. 创建一篇文章
   
    ```sh
    $ hexo new post "hello world"
    ```
    创建的文章将被创建在 `source/_posts/hello-world.md` 下.
    
5. 运行: `hexo generate` 或者 `hexo server`

6. [如何发表你的博客](https://hexo.io/docs/deployment)!


## 配置
下面讨论几个比较重要的选项，这些选项在相关的`_config.yml`中都会被找到.

1. 在根目录下的 `_config.yml` 中指定主题:

    ```yml
    # _config.yml
    theme_config:
      colorscheme: white
    ```

2. 在主题的 `_config.yml` 下指定主题色彩方案，有4套方案分别是，white、classic、dark、light，建议white，本主题只做了white适配

    ```yml
    # themes/cactus/_config.yml
    colorscheme: white
    ```
    
    你可以在 `themes/cactus/source/css/_colors`下自定义颜色方案.
    
3. 项目自定义导航选项，在根目录下的 `_config.yml`文件中:

    ```yml
    nav:
      Home: /
      About: /about/
      Writing: /archives/
      Projects: http://github.com/probberechts
      LINK_NAME: URL
    ```

4. 内容分页

  - 仅显示制定数目的文章 (默认选项)

    ```yml
    posts_overview:
      show_all_posts: false
      post_count: 5
    ```

  - 显示所有文章

    ```yml
    posts_overview:
      show_all_posts: true
    ```

5. 个人项目清单

   手动创建文件 `source/_data/projects.json` 按照如下格式写入内容，即可在首页展示你的项目

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

6. 固定链接

   手动创建文件 `source/_data/links.json` 按照格式如 `projects.json` 即可在首页展示固定链接

    ```json
    [
        {
           "name":"API",
           "url":"/api/",
           "desc":"local url"
        },
        {
           "name":"Google",
           "url":"https://google.com/",
           "desc":"remote url"
        }
    ]
    ```

7. 社交媒体链接

   可以在首页自动添加指向您的社交媒体帐户的链接。更新主题下的 `_config.yml`:

    ```yml
    social_links:
      github: your-github-url
      twitter: your-twitter-url
      mail: mailto:name@server.com
      qq: tencent://message/?uin=qq
      NAME: your-NAME-url
    ```
   你可以自定义 `NAME` 只要它在 [Font Awesome icon](https://fontawesome.com/icons?d=gallery&s=brands) 中存在，就有可能被你使用。

8. 多语言配置

   目前主题提供的语言支持在 `languages/*` 下,如果您想使用上面列出的语言之一，只需将配置文件语言项`language` 设置为所需的语言(例如`fr`)。如果你希望添加额外的语言翻译支持（例如，添加日语（ja）翻译支持）：

   1. 配置文件`_config.yml` 设置语言项 `language`为`ja`
   
   2. 在`themes/cactus/languages/` 中创建一个文件 `ja.yml`
   3. 复制内容`themes/cactus/languages/default.yml`并将其粘贴到`ja.yml`文件中
   4. 用日语翻译替换所有英文字符串
   
   **注意: Cactus 不支持多语言站点 即你只能指定一种语言供展示.**
   
9. RSS

   将`rss`字段设置为`_config.yml`以下值之一：

   1. `rss: false` 将完全禁用rss（默认）。

   2. `rss: atom.xml` 设置特定的Feed链接。

   3. `rss:`留空以使用[hexo-generator-feed](https://github.com/hexojs/hexo-generator-feed)插件。

10. 代码高亮

   代码高亮插件默认`highlight` 选择一个[可用的colorschemes](https://github.com/probberechts/hexo-theme-cactus/tree/master/source/css/_highlight)(默认github-gist)并将其添加到`_config.yml`：

    ```yml
    highlight: COLORSCHEME_NAME
    ```
    
    你仍然可以使用prism 请跟随如下操作 安装完 [hexo-prism-plugin](https://github.com/ele828/hexo-prism-plugin) 插件
    
    ```bash
    npm i -S hexo-prism-plugin
    ```
    
    安装完毕后，在**网站配置文件**做如下配置：
    ```yaml
    highlight:
      enable: false
       
    prism_plugin:
      mode: 'preprocess'    # realtime/preprocess
      theme: 'tomorrow'
      line_number: false    # default false
      custom_css:
    ```

11. 标签与分类

    标签和分类需要被包含在文章的前端:

    ```yaml
    title: 标签与分类
    date: 2017-12-24 23:29:53
    tags:
    - Foo
    - Bar
    categories: 
    - Baz
    ---

    This post contains 2 tags and 1 category.
    ```
    
12. 标签页

    首先创建页面 `tags`
    ```bash
    hexo new page tags
    ```
    然后修改页面的 `type` 值为 `tags`
    ```yaml
    ---
    title: tags
    date: 2019-09-22 14:58:00
    type: tags
    ---
    ```
    
13. 分类页

    首先创建页面 `categories`

    ```bash
    hexo new page categories
    ```
    然后修改页面 `type` 值为 `categories`

14. 本地搜索

    首先，安装[hexo-generate-search](https://www.npmjs.com/package/hexo-generator-search) 插件，它将生成一个搜索索引文件。

    ```bash
    $ npm install hexo-generator-search --save
    ```

    接下来，创建一个显示搜索引擎的页面：

    ```bash
    $ hexo new page search
    ```
    指定该页面的 `type: search` .

    ```yaml
    title: Search
    type: search
    ---
    ```

    最后，编辑`_config.yml`并添加导航菜单的链接。

    ```yaml
    nav:
      search: /search/
    ```

## 版权
声明：本作基于[hexo-theme-cactus](https://github.com/probberechts/hexo-theme-cactus)进行局部美化
使用字体:
[FiraCode@2](https://github.com/tonsky/FiraCode) 
[Noto Sans SC](https://fonts.google.com/specimen/Noto+Sans+SC)