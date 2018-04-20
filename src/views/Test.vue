<template>
  <div class="test">
  </div>
</template>

<script>
<<<<<<< HEAD
  import {testGetApi, testDeleteApi, testPutApi, testPostApi, testAllApi} from '../constants/API'
  export default {
    data () {
      return {
      }
    },
    created () {
      // this.handleGetTest()
      // this.handleDeleteTest()
      // this.handlePutTest()
      this.handlePostTest()
      this.handleAllTest()
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
          console.log('resPost',res)
          if (res) {
            console.log('handlePostTest',res)
          }
        })
      },
      returnPut() {
        return testPutApi({title: 'foo',body: 'bar',userId: 1},'1')
      },
      returnDelete() {
        return testDeleteApi({},'1')
      },
      handleAllTest() {
        testAllApi([testGetApi({}),this.returnPut(),this.returnDelete(),testPostApi({title: 'foo',body: 'bar',userId: 1},'1')],function (Get,Put,Delete,Post){
          if (Get && Put && Post && Delete) {
            console.log('Get',Get)
            console.log('Put',Put)
            console.log('Delete',Delete)
            console.log('Post',Post)
          }
          
        })
      }
=======
import {
  testGetApi,
  testDeleteApi,
  testPutApi,
  testPostApi
} from "../constants/API";
export default {
  data() {
    return {};
  },
  created() {
    this.handleGetTest();
    this.handleDeleteTest();
    this.handlePutTest();
    this.handlePostTest();
  },
  methods: {
    handleGetTest() {
      testGetApi({});
    },
    handleDeleteTest() {
      testDeleteApi({}, "1").then(res => {
        if (res) {
          console.log("handleDeleteTest", res);
        }
      });
    },
    handlePutTest() {
      testPutApi({ title: "foo", body: "bar", userId: 1 }, "1").then(res => {
        if (res) {
          console.log("handlePutTest", res);
        }
      });
    },
    handlePostTest() {
      testPostApi({ title: "foo", body: "bar", userId: 1 }, "1").then(res => {
        if (res) {
          console.log("handlePostTest", res);
        }
      });
>>>>>>> 84797fc1fc26e6839bb88364e9995e807e68b882
    }
  }
};
</script>
