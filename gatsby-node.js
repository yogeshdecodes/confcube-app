exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /firebase/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      externals: getConfig().externals.concat(function (
        _context,
        request,
        callback
      ) {
        if (/^@?(react-)?firebase(.*)/.test(request)) {
          console.log("Excluding bundling of: " + request)
          return callback(null, "umd " + request)
        }
        callback()
      }),
    })
  }
}
