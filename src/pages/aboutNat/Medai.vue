<template>
    <div>
        <navi-header title="Nat相关"></navi-header>

        <div>
            <WxcButton class="" text="打开相册" @wxcButtonClicked="openGallery"></WxcButton>
        </div>

        <div>
            <text>info: {{info}}</text>
        </div>

    </div>
</template>
<script>
import { WxcButton } from 'weex-ui'
import NaviHeader from '@/components/NaviHeader'
import Nat from 'natjs'
const modal = weex.requireModule('modal')

export default {
    components: { NaviHeader, WxcButton, },
    data () {
        return {
            info: ''
        }
    },
    methods: {
        openGallery () {
            let that = this
            Nat.image.pick({
                limit: 3,
                showCamera: false
            }, (err, result) => {
                if(result){
                    console.log(result.paths)
                    that.info = JSON.stringify(result)
                    modal.toast({
                        message: 'success:' + JSON.stringify(result),
                        duration: 3
                    })
                }else{
                    modal.toast({
                        message: 'error:' + JSON.stringify(err),
                        duration: 3
                    })
                }
            })
        }
    }
}
</script>
<style scoped>

</style>