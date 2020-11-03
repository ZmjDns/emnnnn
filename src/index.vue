<template>
  <scroller >
    <navi-header title="首页" showBack="false"></navi-header>
    <div class="index-wrap">
      <!-- <WxcButton class="buttons" text="setLog" @wxcButtonClicked="setDebugLog"></WxcButton> -->
      <WxcButton class="buttons" text="List列表" @wxcButtonClicked="gongToListPage(1)"></WxcButton>
      <WxcButton class="buttons" text="Recycle-list列表" @wxcButtonClicked="gongToListPage(2)"></WxcButton>
      <WxcButton class="buttons" text="底部导航" @wxcButtonClicked="bottomNavi"></WxcButton>
      <WxcButton class="buttons" text="网络请求" @wxcButtonClicked="netRequest"></WxcButton>

      <WxcButton class="buttons" text="Nat相关" @wxcButtonClicked="aboutNatApi"></WxcButton>
    </div>
  </scroller>
</template>

<script>
import { WxcButton } from 'weex-ui'
import NaviHeader from '@/components/NaviHeader.vue'
import pageUtils, { getUrlEntry } from './pageUtils'
const modal = weex.requireModule('modal')
const navigator = weex.requireModule('navigator')
//const logModule = weex.requireModule('sdk-console-log')
export default {
  name: 'index',
  components: { WxcButton, NaviHeader },
  data () {
    return {
      showBack:'false'
    }
  },
  created () {
    //this.setDebugLog()
  },
  methods: {
    // setDebugLog () {
    //   logModule.switchLogLevel("error", function () {
    //     modal.toast({ message: 'Success' })
    //   })
    // },
    gongToListPage (num) {
      let name =''
      if(num === 1){
        name = './pages/list/ListPage'
      }else {
        name = './pages/list/RecycleList'
      }
      navigator.push({
        url: getUrlEntry(name),
        animated: 'true'
      })
    },
    bottomNavi () {
      navigator.push({
        url: getUrlEntry('./pages/tabPage/BottomTabPage'),
        animated: 'true'
      })
    },
    netRequest () {
      navigator.push({
        url: getUrlEntry('./pages/netRequest/NetRequest'),
        animated: 'true'
      })
    },
    aboutNatApi () {
      navigator.push({
        url: getUrlEntry('./pages/aboutNat/Medai'),
        animated: 'true'
      })
    }
  }
}
</script>

<style scoped>
    .index-wrap {
      width: 750px;
      flex-direction: row;
      flex-wrap: wrap;
    }
    .buttons {
      width: 300px !important;
      height: 60px !important;
      background-color: rgb(168, 228, 28) !important;
      margin-top: 10px;
      margin-left: 10px;
    }
</style>
