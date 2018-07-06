<template>
    <el-upload :on-error="onErr" :before-upload="beforeUpload" :on-success="onSuccess" class="upload-demo" :data="params" ref="upload" action="http://xxx.oss-cn-beijing.aliyuncs.com" :file-list="fileList" :auto-upload="false">
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
    </el-upload>
</template>
<script>
    import axios from "axios"
    export default {
      data() {
        return {
          // 请求带的参数
          params: {},
          fileList: [
            {
              name: "food.jpeg",
              url:
                "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
            },
            {
              name: "food2.jpeg",
              url:
                "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
            }
          ]
        }
      },
      methods: {
        submitUpload() {
          this.$refs.upload.submit()
        },
        beforeUpload(file) {
          return axios
            .post("/oss", {
              uploadDir: "test/", //要存储的路径
              host: "http://xxx.oss-cn-beijing.aliyuncs.com" // host地址
            })
            .then(res => {
              // 或者后端签名
              const data = res.data
              this.params = {
                OSSAccessKeyId: data.accessid,
                policy: data.policy,
                signature: data.signature,
                key: `${data.dir}${file.name}`,
                success_action_status: "200"
              }
              // 赋值后等待上传
            })
        },
        onSuccess(response, file, fileList) {
          console.log(response, "success")
        },
        onErr(err, file, fileList) {
          console.log("err", err)
        }
      }
    }
</script>
