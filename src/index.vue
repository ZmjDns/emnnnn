<template>
  <scroller >
    <navi-header title="首页" showBack="false"></navi-header>
    <div class="index-wrap">
      <WxcButton class="buttons" text="hello" @wxcButtonClicked="click"></WxcButton>
      <WxcButton class="buttons" text="List列表" @wxcButtonClicked="gongToListPage"></WxcButton>
      <WxcButton class="buttons" text="底部导航" @wxcButtonClicked="bottomNavi"></WxcButton>
      <WxcButton class="buttons" text="网络请求" @wxcButtonClicked="netRequest"></WxcButton>
    </div>
  </scroller>
</template>

<script>
import { WxcButton } from 'weex-ui'
import NaviHeader from '@/components/NaviHeader.vue'
import pageUtils, { getUrlEntry } from './pageUtils'
const modal = weex.requireModule('modal')
const navigator = weex.requireModule('navigator')
export default {
  name: 'index',
  components: { WxcButton, NaviHeader },
  data () {
    return {
      showBack:'false'
    }
  },
  methods: {
    click () {
      modal.toast({
        message: 'hello',
        duration: 3
      })
    },
    gongToListPage () {
      navigator.push({
        //url: './pages/tabPage/BottomTabPage.html',
        url: getUrlEntry('./pages/list/ListPage'),
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
