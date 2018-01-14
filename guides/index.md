---
layout: az
title: Guides
excerpt: "Often people attend IndieWebCamps or Homebrew Website Clubs for the first time asking where to start in setting up their website. Here we break down each of the steps into easily consumable guides for topics like registering a domain, hosting and publishing your content."
search_omit: true
type: Index
---

<ul class="post-list">
{% for post in site.categories.browse %}
{% if post.tags contains page.type %}
  <li><a href="{{ site.url }}{{ post.url }}"><h3>{{ post.title }} {% if post.excerpt %}</h3><span class="excerpt">{{ post.excerpt | remove: '\[ ... \]' | remove: '\( ... \)' | markdownify | strip_html | strip_newlines | escape_once }}</span>{% endif %} </a></li>
{% endif %}
{% endfor %}
</ul>

<p class="post-list-after">Would you like to write or add to a guide?<br> <a href="/contribute/">Contribute</a>!</p>