---
layout: layouts/base-article.njk
title: Microformats
excerpt: ""
categories: browse
tags: [Formats]
primary_tag: Writing and structure
secondary_tag: Formats
comments: false
share: true
identifier: formats
---
layout: layouts/base-article.njk
## 1. Overview
Microformats are a type of HTML markup that both machines and users can identify through naming conventions that are standardised and widely recognised in open data formats.

### Why use Microformats?
Using Microformats is primarily useful for search engines and content agregators so that they can more effectively interpret the type of content your publishing. This is beneficial to you and your audience in many ways, not just ranking, but also offering new ways for search engines to present the results from your website.

## 2. Get started with Microformats
If you're constructing a website yourself then take a look at [Microformats.org](http://microformats.org/wiki/Main_Page) which details the many sorts of specifications it provides. Look at the content your publish and determine whether it's an article or some other type of content like an event listing, review or something else. In most case it's as simple as just adding a class name to the parent container of your content.

Where you're not directly editing the code of your website then you may be able to use a plugin or extension to your CMS or theme that incorporates Microformats.

These examples offer ways to setup Microformats on your site:
- [Microformats 2](https://wordpress.org/plugins/wp-uf2/) for WordPress incorporates Microformats for use in your theme
- [Jekyll](https://github.com/miklb/jekyll-indieweb) this example includes a post template built with Microformat properties ready to use

## 3. Validate
Once you've setup your website to include Microformats consider validating your pages to check they're correctly using Microformats. These tools provide simple validation to return what Microformats it can interpret:

- [IndieWebify.Me](https://indiewebify.me/) – returns useful feedback on what's correct and what to improve.
- [pin13.net](http://pin13.net/) - returns a plain JSON parsed output

## 4. Coded example
Use the h-card Microformat property on your website to identify the author of individual articles and also your own identity as the website's owner.

```html
<aside class="h-card">
    <img class="u-photo" src="https://calumryan.com/images/profile_md.jpg" alt="photo of Calum Ryan" />
    <a class="p-name u-url" href="https://calumryan.com">Calum Ryan</a>
    <a class="u-email" href="mailto:hello@calumryan.com">hello@calumryan.com</a>
    <span class="p-street-address">10 West Street</span>
    <span class="p-locality">London</span>
    <span class="p-country-name">UK</span>
</aside>
```