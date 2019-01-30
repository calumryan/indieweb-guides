---
layout: layouts/base-article.njk
title: Webmentions in detail
excerpt: ""
categories: browse
tags: [Webmentions]
primary_tag: Sharing your content
secondary_tag: Webmentions
comments: false
share: true
identifier: webmentions
---
layout: layouts/base-article.njk
<h2 id="benefits">Benefits</h2>
By using Webmentions in your site you can enhance and expand on the range of ways you communicate with others over the web. You can publish responses and interactions with other websites with more control over how the contents is displayed.

<h2 id="use">Considerations</h2>
Before you implement webmentions on your site consider how you will monitor and verify incoming responses from others and any potential vulnerabilities from displaying the content of other users on your website.


<h2 id="implementation">Implementing</h2>
How you implement webmentions will depend on the type of CMS or code base that your website has been created in. For a webmention to be sent it most first be constructed in a valid structure which adheres to Microformats. Having established the structure of your webmention is correct and valid then you need to consider how it's submitted.

<h3 id="implementation-methods">Webmention-ready CMS</h3>
The following CMS have webmentions either baked-in ready to use on your site or with a plugin which can be easily installed.

- [Craft](https://craftcms.com/)
- [Drupal](https://www.drupal.org/)<br>**requires a plugin, e.g. [drupal.org/project/indieweb]
- [Perch](https://grabaperch.com/)
(https://www.drupal.org/project/indieweb), [drupal.org/project/vinculum](https://www.drupal.org/project/vinculum)**
- [WordPress](https://wordpress.org/)<br>**requires a plugin, e.g. [wordpress.org/plugins/webmention/](https://wordpress.org/plugins/webmention/)**