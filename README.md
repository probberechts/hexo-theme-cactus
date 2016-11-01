# Cactus Dark

A responsive, dark and simple [Hexo](http://hexo.io) theme for a personal website.

:cactus: [Demo](https://probberechts.github.io/cactus-dark/)

![cactus-dark](https://cloud.githubusercontent.com/assets/2175271/19885143/62e9269c-a01d-11e6-8e26-e36a36201d88.png)

## Summary

- [General](#general)
- [Features](#features)
- [Install](#install)
- [Quick start](#quick-start)
- [About](#about)
- [License](#license)

## General

- **Version** : 1.0
- **Compatibility** : Hexo 3 or later

## Features

- Fully responsive
- Disqus
- Googe analytics
- Projects list
- Simplicity

## Install
1. In the `root` directory:

    ```git
    $ git clone https://github.com/probberechts/cactus-dark.git themes/cactus-dark
    $ npm install
    ```

2. Change the `theme` property in the `config.yml` file.

    ```yml
    # theme: landscape
    theme: cactus-dark
    ```

3. Run: `hexo server`

## Quick Start

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

### Analytics

Add you Google Analytics `tracking_id` to `_config.yml`.

  ```
  plugins:
      gooogle_analytics: 'UA-49627206-1'            # Format: UA-xxxxxx-xx
  ```

### Comments

First, create a site on Disqus: [https://disqus.com/admin/create/](http://disqus.com/admin/create/).

Next, update the `_config.yaml` file:

  ```
  plugins:
      disqus_shortname: SITENAME
  ```

where `SITENAME` is the name you gave your site on Disqus.

## License
MIT
