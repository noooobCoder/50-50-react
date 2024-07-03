// craco.config.js
// console.log("PostCSS config loaded");
// module.exports = {
//   style: {
//     postcss: {
//       plugins: [
//         require("postcss-px-to-viewport")({
//           unitToConvert: "px",
//           viewportWidth: 375,
//           viewportHeight: 667,
//           unitPrecision: 3,
//           viewportUnit: "vw",
//           selectorBlackList: [".ignore", ".hairlines"],
//           minPixelValue: 1,
//           mediaQuery: false,
//           exclude: [/node_modules/],
//         }),
//       ],
//     },
//   },
// };
// module.exports = {
//   style: {
//     postcss: {
//       mode: "exclude",
//       loaderOptions: {
//         postcssOptions: {
//           ident: "postcss",
//           plugins: [
//             [
//               "postcss-px-to-viewport",
//               {
//                 unitToConvert: "px", // 要转化的单位
//                 viewportWidth: 750, // UI设计稿的宽度
//                 viewportUnit: "vw", // 指定需要转换成的视窗单位，建议使用 vw
//                 fontViewportUnit: "vw", // 字体使用的视口单位
//                 unitPrecision: 5, // 指定 `px` 转换为视窗单位值的小数后 x 位数
//                 propList: ["*"], // 指定转换的 css 属性的单位，* 代表全部 css 属性的单位都进行转换
//                 selectorBlackList: ["ignore"], // 指定不转换为视窗单位的类名
//                 minPixelValue: 1, // 默认值 1，小于或等于 1px 则不进行转换
//                 mediaQuery: false, // 是否在媒体查询的 css 代码中也进行转换，默认 false
//                 replace: true, // 是否转换后直接更换属性值
//                 exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
//                 landscape: false, // 是否处理横屏情况
//               },
//             ],
//           ],
//         },
//       },
//     },
//   },
// };
