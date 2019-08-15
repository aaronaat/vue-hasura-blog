import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueApollo from 'vue-apollo'
import ApolloClient from 'apollo-boost'

Vue.config.productionTip = false

Vue.use(VueApollo)

const apolloClient = new ApolloClient({
  uri: 'https://vue-hasura-blog.herokuapp.com/v1/graphql',
  headers: {
    'x-hasura-admin-secret': 'hashura'
  }
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  defaultOpotions: {
    $loadingKey: "loading"
  }
})

new Vue({
  router,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
