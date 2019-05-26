---
layout: layouts/base-fill.njk
title: Contribute
subtitle: Help make IndieWebGuides even better
permalink: contribute/
---
**Your contribution to IndieWebGuides is encouraged but firstly we ask that you read this style guide to understand how to put together a guide. The purpose of this style guide is to outline an approach that maintains clarity and consistency in how different authors approach writing content for IndieWebGuides.**

## Content structure and presentation

Each guide starts with an excerpt consisting of no more than **100 words**. This is displayed in three places: the A-Z navigation structure, styled in bold beneath the page title and in the page description used by search engines.

For the main body of content make balanced use of headings, concise lists and paragraphs which help structure the guide into different steps and sections.


## Built with Eleventy

The website is built using [Eleventy](https://www.11ty.io/) which is a static site generator. This means that each guide's content is put together inside a file containing both the main body of content and every property to determine how it's categorised and placed in the overall navigation of the website.

### Markdown

Each guide is constructed in Markdown which is a lightweight markup language providing simple text formatting. For further help with how to format content in markdown use this helpful [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) by Adam Pritchard.

### Add categories to your guide

The main navigation is a very important feature of IndieWebGuides. It's designed to make it easier for users to explore and learn about the IndieWeb by stepping through different sections and subsections to access guides.

It's necessary to set categories for your guide so that it will show up in the website's main navigation.

![The navigation layout used for IndieWebGuides](/images/screen-navigation.png)

You can see from the table of guide properties below that there are different places to add categories to.

![Table layout of structuring a guide](/images/screen-layout.png)

1. **tags**: All guides need to be tagged as a guide
2. **primary_tag**: Decide which **one** of the overall categories to add your guide to in lowercase and hyphens for spaces:
    - your-identity-on-the web
    - writing-and-structuring-content
    - sharing-your-content
    - publishing-your-content-online
    - managing-and-storing-your-content
    - interaction-with-others
3. **secondary_tag**: Add the title of your guide in lowercase and hyphens for spaces.

## Writing for the right audience

Please be aware that the intended audience for IndieWebGuides is ***not*** assumed to be highly technical or experienced in any way with terminology, acronyms and concepts relating to website development, computer science or technologies.

You may struggle at first to write in a suitable style for this audience. Overtime it will help you to understand the topic you're writing about better if you consider different ways to explain and break it down into more digestible sections and paragraphs.

## Ready to contribute?

Send a pull request for enhancements, improvements, changes and additions. These requests will be reviewed and if they adhere to the above principles then they will get published on IndieWebGuides.

**All contributions need to be made through our public [GitHub repository](https://github.com/calumryan/indieweb-guides).**