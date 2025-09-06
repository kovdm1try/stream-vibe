import postcssPxToRem from "postcss-pxtorem"

export default ({ env }) => {
  const isProd = env === "production"
  const plugins = []

  if (isProd) {
    plugins.push(
      postcssPxToRem({
        propList: ["*"], // Добавляем обработку всех единиц измерения
        mediaQuery: true, // добавляем обработку медиа запросов
      })
    )
  }

  return {
    plugins,
  }
}
