import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/home"
import Classify from "../components/classify"
import Brand from "../components/brand"
import Shoppingcart from "../components/shoppingcart"
import My from "../components/my"
// import Err from "../components/error/err.vue"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:"/Home"
    },
    {
      path:"/home",
      name: 'home',
      component: Home,
      meta:{
        flag:true,
				requireAuth:true
      }
    },
    {
      path:"/classify",
      name: 'classify',
      component: Classify,
      meta:{
        flag:true,
				requireAuth:true
      }
    },
    {
      path:"/brand",
      name: 'brand',
      component: Brand,
      meta:{
        flag:true,
				requireAuth:true
      }
    },
    {
      path:"/shoppingcart",
      name: 'shoppingcart',
      component: Shoppingcart,
      meta:{
        flag:true,
				requireAuth:true
      }
    },
    {
      path:"/my",
      name: 'my',
      component: My,
      meta:{
        flag:true,
				requireAuth:true
      }
    },
    // {
    //   path:"**",
    //   component:Err
    // }
  ]
})
