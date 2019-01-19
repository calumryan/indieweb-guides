const { DateTime } = require("luxon");
const CleanCSS = require("clean-css");
const UglifyJS = require("uglify-es");
const htmlmin = require("html-minifier");

module.exports = function(eleventyConfig) {

  eleventyConfig.addFilter('hostname', require('./lib/filters/hostname.js'));
  eleventyConfig.addFilter('includes', require('./lib/filters/includes.js'));
  eleventyConfig.addFilter('jsonify', require('./lib/filters/jsonify.js'));
  eleventyConfig.addFilter('markdownify', require('./lib/filters/markdownify.js'));
  eleventyConfig.addFilter('permalink', require('./lib/filters/permalink.js'));
  eleventyConfig.addFilter('tokenize', require('./lib/filters/tokenize.js'));

  eleventyConfig.addLayoutAlias("post", "src/layouts/post.njk");

  // Date formatting (human readable)
  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj).toFormat("dd LLL yyyy");
  });

  // Date formatting (machine readable)
  eleventyConfig.addFilter("machineDate", dateObj => {
    return DateTime.fromJSDate(dateObj).toFormat("yyyy-MM-dd");
  });

  // Minify CSS
  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  // Minify JS
  eleventyConfig.addFilter("jsmin", function(code) {
    let minified = UglifyJS.minify(code);
    if (minified.error) {
      console.log("UglifyJS error: ", minified.error);
      return code;
    }
    return minified.code;
  });

  // Minify HTML output
  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    if (outputPath.indexOf(".html") > -1) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }
    return content;
  });

  // only content in the `posts/` directory
  // eleventyConfig.addCollection("posts", function(collection) {
  //   return collection.getAllSorted().filter(function(item) {
  //     return item.inputPath.match(/^\.\/posts\//) !== null;
  //   });
  // });

  eleventyConfig.addCollection('guides', collection => {
    return collection.getFilteredByGlob('**/+(articles|guides)/**/*.md').reverse();
  });


  // Don't process folders with static assets e.g. images
  eleventyConfig.addPassthroughCopy("images");
  // eleventyConfig.addPassthroughCopy("admin");
  // eleventyConfig.addPassthroughCopy("_includes/assets/");

  /* Markdown Plugins */
  let markdownIt = require("markdown-it");
  let options = {
    html: true,
    breaks: true,
    linkify: true
  };
  let opts = {
    permalink: true,
    permalinkClass: "direct-link",
    permalinkSymbol: "#"
  };

  return {
    templateFormats: ["md", "njk", "html"],

    // If your site lives in a different subdirectory, change this.
    // Leading or trailing slashes are all normalized away, so donâ€™t worry about it.
    // If you donâ€™t have a subdirectory, use "" or "/" (they do the same thing)
    // This is only used for URLs (it does not affect your file structure)
    pathPrefix: "/",

    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    passthroughFileCopy: true,
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};
