import Vue from "vue";
import Vuex from "vuex";
import home from "./home";
import classify from "./classify";
import brand from "./brand";
import shoppingcart from "./shoppingcart"
import my from "./my";
Vue.use(Vuex);
let state = {
    
}
const store = new Vuex.Store({
    state,
    modules:{
        home,
        classify,
        brand,
        shoppingcart,
		my
    }
})

export default store;