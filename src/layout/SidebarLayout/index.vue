<template>
  <el-row class="container">
    <el-col :span="24" class="header">
      <el-col :span="20" class="logo">
        <img src="@assets/img/logo.png" />
        <span>
          <i class="txt">{{constants.LABEL_TAL}}</i>
        </span>
      </el-col>
      <el-col :span="4" class="userinfo">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link userinfo-inner"><img :src="this.sysUserAvatar" /> {{sysUserName}}</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>{{constants.LABEL_MY_MSG}}</el-dropdown-item>
            <el-dropdown-item>{{constants.LABEL_SETTINGS}}</el-dropdown-item>
            <el-dropdown-item divided @click.native="logout">{{constants.LABEL_LOGOUT}}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-col>
    <el-col :span="24" class="main">
      <el-aside>
        <router-view name="sidebar"></router-view>
      </el-aside>
      <section class="content-container">
        <div class="grid-content bg-purple-light">
          <el-col :span="24" class="breadcrumb-container">
            <strong class="title">{{$route.name}}</strong>
            <el-breadcrumb separator="/" class="breadcrumb-inner">
              <el-breadcrumb-item v-for="item in $route.matched" :key="item.name">
                {{ item.name }}
              </el-breadcrumb-item>
            </el-breadcrumb>
          </el-col>
          <el-col :span="24" class="content-wrapper">
            <transition>
              <router-view></router-view>
            </transition>
          </el-col>
        </div>
      </section>
    </el-col>
  </el-row>
</template>

<script>
  import {
    LABEL_MY_MSG,
    LABEL_TAL,
    LABEL_SETTINGS,
    LABEL_LOGOUT
  } from "@/constants/TEXT"
  import { PATH_LOGIN } from "@/constants/URL"
  export default {
    data() {
      return {
        constants: {
          LABEL_MY_MSG,
          LABEL_TAL,
          LABEL_SETTINGS,
          LABEL_LOGOUT
        },
        sysUserName: "John",
        sysUserAvatar:
          "https://avatars0.githubusercontent.com/u/35988190?s=400&u=5f4b4c8203e44fd9cf9230cb9ef7446de8ea29a1&v=4",
        form: {
          name: "",
          region: "",
          date1: "",
          date2: "",
          delivery: false,
          type: [],
          resource: "",
          desc: ""
        }
      }
    },
    methods: {
      logout: function() {
        this.$confirm("确认退出吗?", "提示", {})
          .then(() => {
            sessionStorage.removeItem("user")
            this.$router.push(PATH_LOGIN)
          })
          .catch(() => {})
      }
    },
    mounted() {
      var user = sessionStorage.getItem("user")
      if (user) {
        user = JSON.parse(user)
        this.sysUserName = user.name || ""
        this.sysUserAvatar = user.avatar || ""
      }
    }
  }
</script>
<style scoped lang="scss">
  .container {
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
    .header {
      height: 60px;
      line-height: 60px;
      background: #1f2d3d;
      color: #c0ccda;
      .userinfo {
        text-align: right;
        padding-right: 35px;
        .userinfo-inner {
          color: #c0ccda;
          cursor: pointer;
          img {
            width: 40px;
            height: 40px;
            border-radius: 20px;
            margin: 10px 0px 10px 10px;
            float: right;
          }
        }
      }
      .logo {
        font-size: 22px;
        img {
          width: 40px;
          float: left;
          margin: 10px 10px 10px 18px;
        }
        .txt {
          color: #20a0ff;
        }
      }
    }
    .main {
      background: #324057;
      position: absolute;
      top: 60px;
      bottom: 0px;
      overflow: hidden;
      aside {
        width: 230px;
      }
      .content-container {
        background: #f1f2f7;
        position: absolute;
        right: 0px;
        top: 0px;
        bottom: 0px;
        left: 230px;
        overflow-y: scroll;
        padding: 20px;
        .breadcrumb-container {
          margin-bottom: 15px;
          .title {
            width: 200px;
            float: left;
            color: #475669;
          }
          .breadcrumb-inner {
            float: right;
          }
        }
        .content-wrapper {
          background-color: #fff;
          box-sizing: border-box;
        }
      }
    }
  }
</style>