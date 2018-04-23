<template>
  <div class="test">
  </div>
</template>
<script>
  import {API_TEST_GET, API_TEST_DELETE, API_TEST_PUT, API_TEST_POST, API_TEST_ALL} from '../constants/API'
  export default {
    data () {
      return {
      }
    },
    created () {
      this.handleGetTest()
      // this.handleDeleteTest()
      // this.handlePutTest()
      // this.handlePostTest()
      // this.handleAllTest()
    },
    methods: {
      handleGetTest() {
        API_TEST_GET()
      },
      handleDeleteTest() {
        API_TEST_DELETE({},'1').then(res => {
          if (res) {
            console.log('handleDeleteTest',res)
          }
        })
      },
      handlePutTest() {
        API_TEST_PUT({title: 'foo',body: 'bar',userId: 1},'1').then(res => {
          if (res) {
            console.log('handlePutTest',res)
          }
        })
      },
      handlePostTest() {
        API_TEST_POST({title: 'foo',body: 'bar',userId: 1},'1').then(res => {
          if (res) {
            console.log('handlePostTest',res)
          }
        })
      },
      returnPut() {
        return API_TEST_PUT({title: 'foo',body: 'bar',userId: 1},'1')
      },
      returnDelete() {
        return API_TEST_DELETE({},'1')
      },
      handleAllTest() {
        API_TEST_ALL([API_TEST_GET({}),this.returnPut(),this.returnDelete(),API_TEST_POST({title: 'foo',body: 'bar',userId: 1},'1')],function (Get,Put,Delete,Post){
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
