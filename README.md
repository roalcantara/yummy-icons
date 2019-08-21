# Yummy Icons

[![Greenkeeper badge](https://badges.greenkeeper.io/roalcantara/yummy-icons.svg)](https://greenkeeper.io/)

A npm package with the **Yummy Icon**.

![npm](https://img.shields.io/npm/v/npm.svg)

## Installation

**1.** Add the library to your project

```sh
npm i yummy-icons
yarn add yummy-icons
```

**2.** Reference the fonts on the HTML's head

```html
<head>
  <link href="path/to/dist/yummy-icons.css" rel="stylesheet">
</head>
```

## Usage

```html
<i class="yummy-icon yi-001"></i>
```

## Cheat Sheet

For details and embeddings codes, click [here](https://roalcantara.github.io/yummy-icons/).

## Configuration

The following variables are allowed to be set externally:

| Variable | Description | Default value |
| -------- | ----------- | ------------- |
| $yummy-icon-selector | Defines main icon selector | yummy-icon |
| $yummy-icon-slug | Defines the icon selector | yi |
| $yummy-icon-font-path | Defines the fonts' path | web-fonts |

## Sass configuration (Angular)

On your `/src/app/app.scss` file, add:

```sass
$yummy-icon-font-path: '~yummy-icons/dist/web-fonts' !default;
@import '~yummy-icons/src/sass/yummy-icons';
```

## Ionic 3 configuration

**1.** Add to `config/sass.config.js`:

```js
  ...
    /**
    * includePaths: Used by node-sass for additional
    * paths to search for sass imports by just name.
    */
    includePaths: [
      'node_modules/ionic-angular/themes',
      'node_modules/ionicons/dist/scss',
      'node_modules/ionic-angular/fonts',
      'node_modules/yummy-icons/src/sass' //add this line..
    ],
  ...
```

**2.** Add to `config/copy.config.js`:

```js
  ...
    copyFonts: {
      src: [
        '{{ROOT}}/node_modules/ionicons/dist/fonts/**/*',
        '{{ROOT}}/node_modules/ionic-angular/fonts/**/*',
        '{{ROOT}}/node_modules/yummy-icons/dist/web-fonts/**/*' //and this!
      ],
      dest: '{{WWW}}/assets/fonts',
    },
  ...
```

## How to contribute

* Bug reports and pull requests are welcome on [GitHub](https://github.com/roalcantara/yummy-icons)
* Follow the [Semantic Versioning Specification](http://semver.org/)
* Follow the [GitHub Flow](https://guides.github.com/introduction/flow/)
* Follow the [5 Useful Tips For A Better Commit Message](https://robots.thoughtbot.com/5-useful-tips-for-a-better-commit-message) article and the [How to Write a Git Commit Message](http://chris.beams.io/posts/git-commit/) post
* Use [Commitizen cli](http://commitizen.github.io/cz-cli/) when committing

## Code of Conduct

Everyone interacting in the Yummy-Icons project’s codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/roalcantara/yummy-icons/blob/master/CODE_OF_CONDUCT.md).

## License

The package is available as open source under the terms of the [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).

## Copyright

(c) Designed by [medisculpt](http://www.medisculpt.com.au). Licensed under the [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).