<template>
  <div class="test">
  </div>
</template>

<script>
  import {testGetApi, testDeleteApi, testPutApi, testPostApi} from '../constants/API'
  export default {
    data () {
      return {
      }
    },
    created () {
      this.handleGetTest()
      this.handleDeleteTest()
      this.handlePutTest()
      this.handlePostTest()
    },
    methods: {
      handleGetTest() {
        testGetApi({})
      },
      handleDeleteTest() {
        testDeleteApi({},'1').then(res => {
          if (res) {
            console.log('handleDeleteTest',res)
          }
        })
      },
      handlePutTest() {
        testPutApi({title: 'foo',body: 'bar',userId: 1},'1').then(res => {
          if (res) {
            console.log('handlePutTest',res)
          }
        })
      },
      handlePostTest() {
        testPostApi({title: 'foo',body: 'bar',userId: 1},'1').then(res => {
          if (res) {
            console.log('handlePostTest',res)
          }
        })
      }
    }
  }
</script>
