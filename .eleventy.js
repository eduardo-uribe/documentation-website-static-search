module.exports = function (eleventyConfig) {
  // copy "index.json" to "_site/index.json"
  eleventyConfig.addPassthroughCopy('index.json');
};
