<template>
  <div class="tabRow">
    <div class="tabRowHeader">
      <ul class="tabRowHeaderItem">
        <li v-for="(headerItem,headerKey) in headerItems" :class="{'act':currentHeaderItem==headerKey}" @click="headerItemClick(headerKey)">
          <span>{{headerItem.name}}</span>
        </li>
      </ul>
    </div>
    <div class="tabRowContent">
      <div class="tabRowContentItemWrapper" v-for="(contentItem,contentKey) in contentItems" :class="{'act':currentHeaderItem==contentKey}">
        <div class="tabRowContentItem" >
          <div class="single_item" v-for="singleItem in contentItem">
            <router-link :to="{path:'goodDetail',query:{'id':singleItem.id}}" tag="a">
              <img :src="singleItem.thumb" :alt="singleItem.title"/>
             </router-link>
            <div class="item_info">
              <div class="item_title">
                <span>{{singleItem.title}}</span>
              </div>
              <div class="price buy">
                <span class="text">
                  <p class="minprice">¥ {{singleItem.minprice}}</p>
                </span>
                <span class="buy_btn">购买</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name: "tabRow",
    data(){
      return {
        currentHeaderItem:0
      };
    },
    props:{
      headerItems:{
        type:Array,
        default(){
          return ['李小酷1','李小酷2','李小酷3'];
        }
      },
      contentItems:{
        type:Array,
      default(){
          return ['李小酷1','李小酷2','李小酷3'];
        }
      }
    },
    methods:{
      headerItemClick(headerKey){
        this.currentHeaderItem=headerKey;
      }
    }
  }
</script>


<style scoped>
  .tabRow{padding-top: 10px;}
  .tabRowHeader .tabRowHeaderItem{display: flex;flex-direction: row;justify-content: space-around;}
  .tabRowHeaderItem li{width:100%;text-align: center;font-size: var(--font-size-t1);
    padding: 5px 0;border-bottom:1px solid transparent;}
  .tabRowHeaderItem li.act{color:var(--color-theme);border-color: var(--color-theme);}
  .tabRowContentItemWrapper{display: none;}
  .tabRowContentItemWrapper.act{display:block;}
  .tabRowContentItem{flex-direction: row;justify-content: space-around;padding:15px 10px;
    display: grid;grid-template-columns: repeat(3, 1fr);grid-gap: .5rem;
  }
  .tabRowContentItem .single_item {flex: 1;background-color: var(--color-background-s1);font-size: 0.6rem;}
  .tabRowContentItem img{max-width: 100%;}
  .item_info{padding:0.3rem;border-bottom: 1px solid var(--color-line);border-left: 1px solid var(--color-line);border-right: 1px solid var(--color-line);}
  .price.buy{display: flex;justify-content: space-between;color:var(--color-price);align-items:baseline;}
  .item_title{color:var(--color-title);}
  .item_title{margin-bottom: 0.5rem;height:2.5rem;}
  .buy_btn{border:1px solid var(--color-price);padding:4px 8px 2px;}
</style>
