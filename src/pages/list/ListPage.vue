<template>
    <div>
        <navi-header title="List列表"></navi-header>

        <list>
            <cell class="item-wrap" v-for="item in lists" :key="item.index" @click="sayHello(item)">
                <text>{{item.text}}</text>
                <text class="arrow-right">&#xe687;</text>
            </cell>
        </list>

        <text>result:{{result}}</text>

        <text>callback:{{callback}}</text>

    </div>
    
</template>
<script>
import NaviHeader from '@/components/NaviHeader'
const domModule = weex.requireModule('dom')
const modal = weex.requireModule('modal')
const stream = weex.requireModule('stream') || {}
//const apiUrl = 'http://www.caacts.org.cn:8080/struts2_spring3_hibernate3_1.0/appDateMessage.jsp?action=getbasedata&type=1&sign=1'
const apiUrl = 'http://192.168.43.64:8080/YYApi/index.jsp?action=version'
export default {
    components: { NaviHeader, },
    data () {
        return {
            lists: [],
            result: '',
            callback: ''
        }
    },
    beforeCreate () {
        domModule.addRule('fontFace', {
            'fontFamily': "iconfont",
            'src': "url('http://at.alicdn.com/t/font_2152910_n0w7qnptd6k.ttf')"
        })
    },
    created () {
        this.getDatafromServer()
    },
    methods: {
        getDatafromServer () {
            var that = this;
            stream.fetch(
                {
                    method: 'GET',
                    url: 'http://www.caacts.org.cn:8080/struts2_spring3_hibernate3_1.0/appDateMessage.jsp?action=getbasedata&type=1&sign=1',
                    type:'json'
                },
                function (ret) {
                    if (!ret.ok){
                        modal.toast({
                            message: '网络请求失败',
                            duration: 3
                        })
                    }else{
                        modal.toast({
                            message: '网络请求成功',
                            duration: 3
                        })
                        that.lists = ret.data.list
                    }
                },
                function (response) {
                    that.result = JSON.stringify(response)
                }
            )
        },
        sayHello (item) {
            modal.toast({
                message: item.text,
                duration: 3
            })
        }
    }
}
</script>
<style scoped>
    .item-wrap{
        width: 750px;
        height: 60px;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background-color: cyan;
        border-bottom-width: 2px;
        /* border-bottom-style: #FFF; */
        margin-top: 10px;
        padding-left: 15px;
        padding-right: 15px;
    }
    .arrow-right{
        font-family: iconfont;
    }
</style>