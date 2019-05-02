---
layout: layouts/base-article.njk
title: IndieAuth
excerpt: ""
categories: browse
tags: [guide,sign-in]
primary_tag: your-identity
secondary_tag: sign-in
---
## 1. Overview
The purpose of IndieAuth is to provide a means to log-in to other websites using your own identity (e.g. your domain) that's independent of other authentication methods such as via a Facebook, Twitter or Google log-in.

Authentication through IndieAuth can be achieved through a number of methods however probably one of the most straightforward is to use a website called IndieAuth.com. It provides a method for authentication known as RelMeAuth. This is a specific authentication method designed to use with your domain that's implemented by using the [relme]('/browse/relme/') attribute for hyperlinks to places that represent you on the web.