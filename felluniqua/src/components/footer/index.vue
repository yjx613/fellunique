<template>
    <div id="footer">
        <ul>
            <li v-for="(item,index) in navs"   @click="handleToggle(index)":class="activeIndex==index?'router-link-active':''">
                <router-link :to="{name:item.name}">
                    <i class="iconfont iconsize" v-html="item.icon"></i>
                    <span>{{item.title}}</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
           navs:[
               {
                   name:"home",
                   title:"首页",
                   icon:"&#xe617"
               },
               {
                   name:"classify",
                   title:"分类",
                   icon:"&#xe50c"
               },
               {
                   name:"brand",
                   title:"品牌",
                   icon:"&#xe601"
               },
               {
                   name:"shoppingcart",
                   title:"购物篮",
                   icon:"&#xe621"
               },
               {
                   name:"my",
                   title:"个人中心",
                   icon:"&#xe603"
               }             
           ],
           activeIndex:0
        }
    },
    methods:{
		handleToggle(index){
			this.activeIndex=index;
		}
    }
}
</script>

<style>
    #footer{
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 1rem;
        display: flex;
        padding: 0;
        margin: 0;
        z-index: 100;
        background: #fff;
        list-style: none;
    }
    #footer>ul{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between
    }
     #footer>ul li{
        width: 25%;
        height: 100%;
     }
    #footer>ul li a{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    #footer>ul li a .iconsize{
        font-size: .36rem;
        margin-bottom:.1rem;
        font-weight: 600
    }
    #footer>ul li a span{
        font-size:.2rem;
        font-weight: 600
    }
    .router-link-active{
        color: orangered;
    }
</style>
