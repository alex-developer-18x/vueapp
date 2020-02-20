import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"

Vue.config.productionTip = false
Vue.use(VueRouter);

import Users from './components/Users.vue'
const Home = { template: "<p>home page</p>" };
const Index = { template: "<p>index page</p>" };
const About = { template: "<p>about page</p>" };

const routes = [
  { path: "/users", name: "users", component: Users },
  { path: "/home", name: "home", component: Home },
  { path: "/index", name: "index", component: Index },
  { path: "/about", name: "about", component: About },
];

var router = new VueRouter({
  routes: routes,
  mode: "history",
});

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
