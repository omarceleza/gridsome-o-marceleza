// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'O Marceleza',
  siteUrl: 'https://omarceleza.github.io',
  pathPrefix: '/omarceleza'
  plugins: [
    {
        use: 'gridsome-plugin-pug',
        options:{
            pug: {},
            pugLoader: {}
        }
    }
  ]
}
