---
layout: layouts/base-article.njk
title: RelMe
excerpt: ""
categories: browse
tags: [guide,sign-in]
primary_tag: your-identity
secondary_tag: sign-in
comments: false
share: true
identifier: signin
---
## 1. Overview
Using RelMe is like saying to others: that's me on, for example, Twitter, Facebook and LinkedIn. Such social media platforms let you add a link on your profile to your own website which includes the relme propery.

Vice versa the RelMe property can be added to hyperlinks on your <em>own</em> website for other pages that are about you as a person and link back to your website.  This can include your social media profile(s) and also things like your phone/SMS number and email address.

Its purpose is to help provide a means to identify who you are on the Web through a source that you own and control. This can be helpful for logging into other websites and services such as when you want to post or interact with the website of another person or company.

## 2. Coded example
```html
<ul>
    <li><a rel="me" href="http://twitter.com/calum_ryan">Twitter</a></li>
    <li><a rel="me" href="https://github.com/calumryan">Github</a></li>
</ul>
```