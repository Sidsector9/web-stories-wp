<!-- DO NOT EDIT THIS FILE; it is auto-generated from readme.txt -->
# AMP Plugin for WordPress

![Banner](wp-assets/banner-1544x500.png)
Enable AMP on your WordPress site, the WordPress way.

**Contributors:** [automattic](https://profiles.wordpress.org/automattic), [xwp](https://profiles.wordpress.org/xwp), [google](https://profiles.wordpress.org/google), [westonruter](https://profiles.wordpress.org/westonruter), [ryankienstra](https://profiles.wordpress.org/ryankienstra), [batmoo](https://profiles.wordpress.org/batmoo), [stubgo](https://profiles.wordpress.org/stubgo), [albertomedina](https://profiles.wordpress.org/albertomedina), [tweetythierry](https://profiles.wordpress.org/tweetythierry), [joshuawold](https://profiles.wordpress.org/joshuawold), [postphotos](https://profiles.wordpress.org/postphotos)  
**Tags:** [amp](https://wordpress.org/plugins/tags/amp), [mobile](https://wordpress.org/plugins/tags/mobile)  
**Requires at least:** 4.9  
**Tested up to:** 5.1  
**Stable tag:** 1.0.2  
**License:** [GPLv2 or later](http://www.gnu.org/licenses/gpl-2.0.html)  
**Requires PHP:** 5.4  

[![Build Status](https://travis-ci.org/ampproject/amp-wp.svg?branch=develop)](https://travis-ci.org/ampproject/amp-wp) [![Built with Grunt](https://cdn.gruntjs.com/builtwith.svg)](http://gruntjs.com) 

## Description ##

The AMP Project is an open-source initiative aiming to make the web better for all.  AMP enables web experiences that are consistently fast, beautiful and high-performing across distribution platforms. The Official AMP Plugin for WordPress supports fully integrated AMP publishing for WordPress sites, with robust capabilities and granular publisher controls.

Features and capabilities provided by the plugin include:

- **Compatibility Tool**: to assist the development of AMP experiences by enabling AMP debugging with detailed information about validation errors that may exist, the markup/scripts causing them, and the specific components on site (e.g theme, plugin, core) responsible for that page content.
- **CSS Tree Shaking**: to assist in dealing with cases where the defined CSS rules on a site exceed the CSS size limit allowed on single AMP pages.
- **Core Theme Support**: enabling full AMP validity for four default themes (i.e. Twenty Fifteen, Twenty Sixteen, Twenty Seventeen, Twenty Nineteen).
- **Gutenberg Support**: enabling AMP content creation fully integrated with Gutenberg.
- **AMP-first Experiences support**: enabling full-site AMP experiences without sacrificing the flexibility of the platform, or the fidelity of content.
- **Many Optimizations**: A myriad of code, performance, and developer experience improvements: from customization flexibility, to better UI flows, internationalization, accessibility, etc.

With the official AMP plugin for WordPress, the WordPress ecosystem is provided with the capabilities and tools it needs to build world-class AMP experiences without deviating from its standard, flexible, and well-known content creation workflow.

## Installation ##

1. Upload the folder to the `/wp-content/plugins/` directory.
2. Activate the plugin through the 'Plugins' menu in WordPress.
3. If you currently use older versions of the plugin in `Reader` mode, it is strongly encouraged to migrate to `Transitional` or `Native` mode. Depending on your theme/plugins, some development work may be required.

## Getting Started ##

To learn more about the plugin and start leveraging its capabilities to power your AMP content creation workflow check [the official AMP plugin product site](https://amp-wp.org).

If you are a developer, we encourage you to [follow along](https://github.com/ampproject/amp-wp) or [contribute](https://github.com/ampproject/amp-wp/blob/develop/contributing.md) to the development of this plugin on GitHub.

## Screenshots ##

### Theme support enables you to reuse the active theme's templates and stylesheets; all WordPress features (menus, widgets, comments) are available in AMP.

![Theme support enables you to reuse the active theme's templates and stylesheets; all WordPress features (menus, widgets, comments) are available in AMP.](wp-assets/screenshot-1.png)

### Many themes can be served as AMP without any changes; the default experience is as if JavaScript is turned off in the browser since scripts are removed.

![Many themes can be served as AMP without any changes; the default experience is as if JavaScript is turned off in the browser since scripts are removed.](wp-assets/screenshot-2.png)

### Reader mode templates are still available, but they are are limited. Not only do they differ from the active theme, any validation errors are silently sanitized.

![Reader mode templates are still available, but they are are limited. Not only do they differ from the active theme, any validation errors are silently sanitized.](wp-assets/screenshot-3.png)

### Switch from Reader mode to Transitional or Native mode in AMP settings screen. You may need to disable the admin bar in AMP if your theme has a larger amount of CSS.

![Switch from Reader mode to Transitional or Native mode in AMP settings screen. You may need to disable the admin bar in AMP if your theme has a larger amount of CSS.](wp-assets/screenshot-4.png)

### Make the entire site available in AMP or pick specific post types and templates; you can also opt-out on per-post basis.

![Make the entire site available in AMP or pick specific post types and templates; you can also opt-out on per-post basis.](wp-assets/screenshot-5.png)

### Plugin checks for AMP validity and will indicate when either: no issues are found, new issues need moderation, or issues block AMP from being served.

![Plugin checks for AMP validity and will indicate when either: no issues are found, new issues need moderation, or issues block AMP from being served.](wp-assets/screenshot-6.png)

### The editor will surface validation issues during content authoring. The specific blocks with validation errors are indicated.

![The editor will surface validation issues during content authoring. The specific blocks with validation errors are indicated.](wp-assets/screenshot-7.png)

### Validated URLs include the list of validation errors encountered, giving control over whether sanitization for a validation error is accepted or rejected.

![Validated URLs include the list of validation errors encountered, giving control over whether sanitization for a validation error is accepted or rejected.](wp-assets/screenshot-8.png)

### Styles added by themes and plugins are automatically concatenated, minified, and tree-shaken to try to keep the total under 50KB of inline CSS.

![Styles added by themes and plugins are automatically concatenated, minified, and tree-shaken to try to keep the total under 50KB of inline CSS.](wp-assets/screenshot-9.png)

### A WP-CLI command is provided to check the URLs on a site for AMP validity. Results are available in the admin for inspection.

![A WP-CLI command is provided to check the URLs on a site for AMP validity. Results are available in the admin for inspection.](wp-assets/screenshot-10.png)

## Changelog ##

For the plugin’s changelog, please see [the Releases page on GitHub](https://github.com/ampproject/amp-wp/releases).

