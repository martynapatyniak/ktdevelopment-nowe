module.exports = function (eleventyConfig) {
  // kopiowanie plików statycznych
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("base_icon_white_background.png");
  eleventyConfig.addPassthroughCopy("base_logo_white_background.png");
  eleventyConfig.addPassthroughCopy("logo.png");

  // alias: jeśli w front‑matter użyto `layout: layout`,
  // Eleventy będzie używać pliku `layout.njk`
  eleventyConfig.addLayoutAlias("layout", "layout.njk");

  // definicja kolekcji postów
  // Jeżeli trzymasz wpisy w katalogu posts/ w głównym folderze projektu,
  // użyj globu "posts/*.md". Jeżeli wpisy są wewnątrz katalogu `src`,
  // zmień na "src/posts/*.md".
  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("posts/*.md").reverse();
  });

  return {
    dir: {
      input: "src",         // katalog z treścią (zmień na "." jeśli Twoje .md są w katalogu głównym)
      includes: "_includes",// katalog z szablonami
      output: "_site"
    }
  };
};
