---
layout: az
title: Guides
excerpt: "These guides firstly present and explain the process for setting up your own website. You can then progress to find out about new sharing and publishing features for your website developed within the IndieWeb community."
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