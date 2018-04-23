<template>
  <div class="test-warpper">
  </div>
</template>
<script>
  import {getTestApi, deleteTestApi, putTestApi, postTestApi, allTestApi} from '@/constants/API'
  export default {
    data () {
      return {
      }
    },
    created () {
      // this.handleGetTest()
      // this.handleDeleteTest()
      // this.handlePutTest()
      // this.handlePostTest()
      this.handleAllTest()
    },
    methods: {
      handleGetTest() {
        getTestApi()
      },
      handleDeleteTest() {
        deleteTestApi({},'1').then(res => {
          if (res) {
            console.log('handleDeleteTest',res)
          }
        })
      },
      handlePutTest() {
        putTestApi({title: 'foo',body: 'bar',userId: 1},'1').then(res => {
          if (res) {
            console.log('handlePutTest',res)
          }
        })
      },
      handlePostTest() {
        postTestApi({title: 'foo',body: 'bar',userId: 1},'1').then(res => {
          if (res) {
            console.log('handlePostTest',res)
          }
        })
      },
      returnPut() {
        return putTestApi({title: 'foo',body: 'bar',userId: 1},'1')
      },
      returnDelete() {
        return deleteTestApi({},'1')
      },
      returnPost() {
        return postTestApi({title: 'foo',body: 'bar',userId: 1},'1')
      },
      returnGet() {
        return getTestApi({})
      },
      handleAllTest() {
        allTestApi([this.returnGet(),this.returnPut(),this.returnDelete(),this.returnPost()],function (Get,Put,Delete,Post){
          if (Get && Put && Post && Delete) {
            console.log('Get',Get)
            console.log('Put',Put)
            console.log('Delete',Delete)
            console.log('Post',Post)
          }
        })
      }
    }
  };
</script>
