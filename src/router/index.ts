import Vue from 'vue'
import VueRouter from 'vue-router'
import Peoples from '../views/electron/chat/routes/Peoples.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/chat/peoples',
    name: 'peoples',
    component: Peoples
  }
  // ,
  // {
  //   path: '/about',
  //   name: 'about',
  //   route level code-splitting
  //   this generates a separate chunk (about.[hash].js) for this route
  //   which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = new VueRouter({
  routes
});

export default router
