module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: '服务端渲染',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: '{{escape description }}'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  plugins: [{
    src: '~plugins/iview',
    ssr: true
  }, {
    src: '~/plugins/bl-components',
    ssr: true
  }],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  // proxy: [
  //   ['/json.html', {
  //     target: 'http://www.xxxx.com'
  //   }] //注意这也是一个数组
  // ],
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#3B8070'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, {
      isDev,
      isClient
    }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
