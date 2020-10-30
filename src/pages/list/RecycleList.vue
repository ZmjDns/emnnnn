<template>
    <div>
        <navi-header title="RecycleList"></navi-header>
        <recycle-list for="(item,index) in longList" :key="index">
            <cell-slot class="cell-wrp" @click="clickItem(item)">
                <text>- {{item.text}} -</text>
                <text class="icon">&#xe687;</text>
            </cell-slot>
            <!-- <cell-slot case="B">
                <text>- B {{item.type}} -</text>
            </cell-slot> -->
        </recycle-list>

        <div>
            <text>flag:{{flag}}</text>
        </div>
    </div>
</template>
<script>
import NaviHeader from '@/components/NaviHeader'
const stream = weex.requireModule('stream')
const domModule = weex.requireModule('dom')
const modal = weex.requireModule('modal')
export default {
    components: {NaviHeader, },
    data () {
        return {
            longList: [],
            flag: ''
        }
    },
    beforeCreate () {
        domModule.addRule('fontFace', {
            'fontFamily': "iconfont",
            'src': "url('http://at.alicdn.com/t/font_2152910_n0w7qnptd6k.ttf')"
        });
    },
    created () {
        this.getAirWays()
    },
    methods: {
        getAirWays () {
            const that = this
            let params = {
                type: '1',
                sign: '1'
            }
            stream.fetch({
                method: 'POST',
                url: 'http://www.caacts.org.cn:8080/struts2_spring3_hibernate3_1.0/appDateMessage.jsp?action=getbasedata&type=1&sign=1',
                type: 'json'
            },function (result){
                if(!result.ok){
                    that.result = 'net failde' + JSON.stringify(result)
                }else{
                    that.longList = result.data.list
                }
            })
        },
        clickItem (item) {
            let that = this
            that.flag = 'git in'
            // modal.toast({
            //     message: item.text,
            //     duration: 3
            // })
            modal.prompt({
                message: '您确认选择：' + item.text,
                duration: 3
            },function (value){
                that.flag = JSON.stringify(value)
            })
        }
    }
}
</script>
<style scoped>
    .cell-wrp{
        width: 750px;
        height: 80px;
        flex-direction: row;
        justify-content: space-between;
        border-bottom-width: 2px;
        align-items: center;
        background-color: burlywood;
        font-size-adjust: 20px;/*不起作用？？？？ */
        padding-left: 15px;
        padding-right: 15px;
    }
    .icon{
        font-family: iconfont;
    }
</style>