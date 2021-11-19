import Vue from "vue";
import Router from "vue-router";

import HelloWorld from './components/HelloWorld.vue'
import home from './view/Home.vue'

Vue.use(Router);

export default new Router({
    routes:[
        {
            path:'/hello',name :'hello',component : HelloWorld
    
        },
        {
            path:'/home',name :'home',component : home
    
        },
        {
            path:'/about',name :'about',
            //`component:about
            component : ()=>import('./view/About.vue')
    
        }

    ]
});