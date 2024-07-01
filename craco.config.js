// craco.config.js
console.log("PostCSS config loaded");
module.exports = {
  style: {
    postcss: {
      plugins: [
        require("postcss-px-to-viewport")({
          unitToConvert: "px",
          viewportWidth: 375,
          viewportHeight: 667,
          unitPrecision: 3,
          viewportUnit: "vw",
          selectorBlackList: [".ignore", ".hairlines"],
          minPixelValue: 1,
          mediaQuery: false,
          exclude: [/node_modules/],
        }),
      ],
    },
  },
};
