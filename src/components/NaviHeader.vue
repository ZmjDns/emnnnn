<template>
    <div class="header-wrap">
        <text v-if="showBack !='false'" class="back-con" @click="naviBack">&#xe685;</text>
        <text class="title">{{title}}</text>
        <text></text>
    </div>
</template>
<script>
const domModule = weex.requireModule('dom')
const navigator = weex.requireModule('navigator')
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        showBack:{}
    },
    data () {
        return {}
    },
    mounted () {
        console.log('poops',this.props);
    },
    beforeCreate () {
        domModule.addRule('fontFace', {
            'fontFamily': "iconfont",
            'src': "url('http://at.alicdn.com/t/font_2152910_n0w7qnptd6k.ttf')"
            
        });
    },
    methods: {
        naviBack () {
            navigator.pop({
                animated: "true"
            })
        }
    }
}
</script>
<style scoped>
    .header-wrap{
        width: 750px;
        height: 80px;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        background-color: #eb304f;
    }
    .back-con{
        font-family: iconfont;
        margin-left: 10px;
        margin-right: 10px;
    }
    .title{
        flex: 1;
        text-align: center;
    }
</style>