export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'piano-duo',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    script: [
      {
        src: 'js/jquery-3.5.1.slim.min.js'
      },
      {
        src: 'js/bootstrap.bundle.min.js'
      },
      {
        src: 'js/custom.js'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap'
      }
    ],

  },
target: 'static',
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    
          '~assets/main.scss/style.scss',
    
    
  ],
  styleResources: {
    scss: [
      
           'bootstrap/scss/bootstrap.scss', 
           '~assets/main.scss/abstracts.scss/_mixin.scss',
           '~assets/main.scss/abstracts.scss/_placeholders.scss',
           '~assets/main.scss/abstracts.scss/_variables.scss',
           '~assets/main.scss/base.scss/_reset.scss',
           '~assets/main.scss/base.scss/_typography.scss', 

           
                  
           
    ]
},

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    
    'bootstrap-vue/nuxt',
    '@nuxtjs/style-resources',
  ],
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}


