<template>
  <scroller>
    <!-- <div class="group">
      <text class="title">method = GET</text>
      <text class="count">{{getResult}}</text>
    </div> -->
    <div class="group">
      <text class="title">method = GET / type = jsonp</text>
      <text class="count">{{getJsonpResult}}</text>
    </div>
    <div class="group">
      <text class="title">method = POST</text>
      <text class="count">{{postResult}}</text>
    </div>
    <div class="group">
      <text class="title">method = PUT</text>
      <text class="count">{{putResult}}</text>
    </div>
    <div class="group">
      <text class="title">method = DELETE</text>
      <text class="count">{{deleteResult}}</text>
    </div>
    <div class="group">
      <text class="title">method = HEAD</text>
      <text class="count">{{headResult}}</text>
    </div>
    <div class="group">
      <text class="title">method = PATCH</text>
      <text class="count">{{patchResult}}</text>
    </div>
  </scroller>
</template>

<script>
  const stream = weex.requireModule('stream');
  
  export default {
    data: function () {
      return {
        getJsonpResult: 'loading...',
        getResult: 'loading...',
        postResult: 'loading...',
        putResult: 'loading...',
        deleteResult: 'loading...',
        headResult: 'loading...',
        patchResult: 'loading...'
      }
    },
    created: function() {
      var me = this;
      //var GET_URL_JSONP = 'http://jsfiddle.net/echo/jsonp/?callback=anything&result=content_in_response';
      var GET_URL_JSONP = 'http://www.caacts.org.cn:8080/struts2_spring3_hibernate3_1.0/appDateMessage.jsp?action=getbasedata&type=1&sign=1';
      var GET_URL = 'http://httpbin.org/get';
      var POST_URL = 'http://httpbin.org/post';
      var PUT_URL = 'http://httpbin.org/put';
      var DELETE_URL = 'http://httpbin.org/delete';
      var HEAD_URL = 'http://httpbin.org/status/418';
      var PATCH_URL = 'http://httpbin.org/patch';

      stream.fetch({
        method: 'GET',
        url: 'http://www.caacts.org.cn:8080/struts2_spring3_hibernate3_1.0/appDateMessage.jsp?action=getbasedata&type=1&sign=1',
        type:'json'
      }, function(ret) {
        if(!ret.ok){
          me.getJsonpResult = "request failed";
        }else{
          console.log('get:'+ret);
          me.getJsonpResult =  JSON.stringify(ret.data);
        }
      },function(response){
        console.log('get jsonp in progress:'+response.length);
        me.getJsonpResult = "bytes received:"+response.length;
      });

    //   stream.fetch({
    //     method: 'GET',
    //     url: GET_URL,
    //     type:'json'
    //   }, function(ret) {
    //     if(!ret.ok){
    //       me.getResult = "request failed";
    //     }else{
    //       console.log('get:'+ret);
    //       me.getResult = JSON.stringify(ret.data);
    //     }
    //   },function(response){
    //     console.log('get in progress:'+response.length);
    //     me.getResult = "bytes received:"+response.length;
    //   });

    //   stream.fetch({
    //     method: 'POST',
    //     url: POST_URL,
    //     type:'json'
    //   }, function(ret) {
    //     if(!ret.ok){
    //       me.postResult = "request failed";
    //     }else{
    //       console.log('get:'+JSON.stringify(ret));
    //       me.postResult = JSON.stringify(ret.data);
    //     }
    //   },function(response){
    //     console.log('get in progress:'+response.length);
    //     me.postResult = "bytes received:"+response.length;
    //   });

    } 
  }
</script>

<style scoped>
  .group {
    margin-left:32px;
    margin-right:32px;
    margin-bottom:32px;
  }
  .title {
    font-size: 45px;
    color: #41B883;
  }
  .count {
    margin-top:6px;
    font-size: 28px;
    color: #888888;
  }
</style>