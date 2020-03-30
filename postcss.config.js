module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-px-to-viewport': {
      viewportWidth: 750,// 设计稿宽度
      viewportHeight: 1334,// 设计稿高度，可以不指定
      unitPrecision: 5,// px to vw无法整除时，保留几位小数
      viewportUnit: 'vw',
      selectorBlackList: [],
      minPixelValue: 1,// 小于1px不转换
      mediaQuery: false // 允许媒体查询中转换
    }
  }
}
