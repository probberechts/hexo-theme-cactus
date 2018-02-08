# Cactus Dark

A responsive, dark and simple [Hexo](http://hexo.io) theme for a personal website.

:cactus: [Demo](https://probberechts.github.io/cactus-dark/)

![cactus-dark](https://cloud.githubusercontent.com/assets/2175271/19885143/62e9269c-a01d-11e6-8e26-e36a36201d88.png)

## Summary

- [General](#general)
- [Features](#features)
- [Install](#install)
- [Configuration](#configuration)
- [License](#license)

## General

- **Version** : 2.1
- **Compatibility** : Hexo 3 or later

## Features

- Fully responsive
- Disqus
- Googe analytics
- Font Awesome icons
- Pick your own code highlighting scheme
- Configurable navigation menu
- Support for local search
- Projects list
- Simplicity
- I18n support

## Install
1. In the `root` directory:

    ```git
    $ git clone https://github.com/probberechts/cactus-dark.git themes/cactus-dark
    $ npm install hexo-pagination --save
    ```

2. Change the `theme` property in the `config.yml` file.

    ```yml
    # theme: landscape
    theme: cactus-dark
    ```
3. Run: `hexo generate` and `hexo server`

## Configuration

### Navigation

Setup the navigation menu in the theme's `_config.yml`:

```
nav:
  Home: /
  About: /about/
  Writing: /archives/
  Projects: http://github.com/probberechts
  LINK_NAME: URL
```

### Blog posts list on home page

You have two options for the list of blog posts on the home page:

  - Show only the 5 most recent posts (default)

    ```
    customize:
      show_all_posts: false
      post_count: 5
    ```

  - Show all posts 

    ```
    customize:
      show_all_posts: true
    ```

### Projects list

Create a projects file `source/_data/projects.json`.

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

### Social media links

Cactus Dark can automatically add links to your social media accounts. Therefore, update the theme's `_config.yml`:

```
customize:
  social_links:
    github: your-github-url
    twitter: your-twitter-url
    NAME: your-NAME-url
```

where `NAME` is the name of a [Font Awesome icon](http://fontawesome.io/icons/#brand).

### Language configuration

If you are new to Hexo and internationalization (i18n), please read [Hexo documentation - internationalization (i18n) section](https://hexo.io/docs/internationalization.html)

Currently, the theme is delivered with:

- English (en), default
- Chinese (Simplified, PRC) (zh-CN)
- French (fr)
- Dutch (nl)

If you would like to use one the languages listed above, simply set `language` to the desired language (e.g., `fr`) in `_config.yml`.
Otherwise, you can follow the steps below (E.g., to add a Japanese (ja) translation): 

1. Set `language` to `ja` in Hexo configuration file `_config.yml`  
2. Create a `ja.yml` file in the `themes/cactus_dark/languages/` folder  
3. Copy the content of `themes/cactus_dark/languages/default.yml` and paste it it into the `ja.yml` file  
4. Replace all English strings by their Japanese translation

**Note: Cactus Dark does not support multi-language sites.**

### RSS

Set the `rss` field in the theme's `_config.yml` to one of the following values:

1. `rss: false` will totally disable rss (default).
2. `rss: atom.xml` sets a specific feed link.
3. `rss:`leave empty to use the [hexo-generator-feed](https://github.com/hexojs/hexo-generator-feed) plugin. 

### Analytics

Add you Google Analytics `tracking_id` to the theme's `_config.yml`.

```
plugins:
    gooogle_analytics: 'UA-49627206-1'            # Format: UA-xxxxxx-xx
```

### Comments

First, create a site on Disqus: [https://disqus.com/admin/create/](http://disqus.com/admin/create/).

Next, update the theme's `_config.yml` file:

```
plugins:
    disqus_shortname: SITENAME
```

where `SITENAME` is the name you gave your site on Disqus.

### Code Highlighting

Pick one of [the available colorschemes](https://github.com/probberechts/cactus-dark/tree/master/source/css/_highlight) and add it to the theme's `_config.yml`:

```
customize:
    highlight: COLORSCHEME_NAME
```

### Local search

First, install the [hexo-generate-search](https://www.npmjs.com/package/hexo-generator-search) plugin, which will generate a search index file.

```git
$ npm install hexo-generator-search --save
```

Next, create a page to display the search engine:

```sh 
$ hexo new page Search
```
and put `search: true` in the front-matter.

Finally, edit the theme's `_config.yml` and add a link to the navigation menu.

```
nav:
  ...
  Search: /Search/
  ...
```

## License
MIT
