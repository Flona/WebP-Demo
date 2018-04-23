<template>
    <div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">{{constants.NAV_HOME_PAGE}}</el-menu-item>
            <el-submenu index="2">
                <template slot="title">{{constants.NAV_TABLE_MODULE}}</template>
                <el-menu-item index="2-1">{{constants.NAV_TANLE_MODULE_SUB_PAGE}}</el-menu-item>
                <el-menu-item index="2-2">{{constants.NAV_TANLE_MODULE_SUB_PAGE}}</el-menu-item>
                <el-menu-item index="2-3">{{constants.NAV_TANLE_MODULE_SUB_PAGE}}</el-menu-item>
                <el-submenu index="2-4">
                    <template slot="title">{{constants.NAV_TANLE_MODULE_SUB_PAGE}}</template>
                    <el-menu-item index="2-4-1">{{constants.NAV_TANLE_MODULE_SUB_PAGE}}</el-menu-item>
                    <el-menu-item index="2-4-2">{{constants.NAV_TANLE_MODULE_SUB_PAGE}}</el-menu-item>
                    <el-menu-item index="2-4-3">{{constants.NAV_TANLE_MODULE_SUB_PAGE}}</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="3" disabled>{{constants.NAV_TEST_PAGE}}</el-menu-item>
            <el-menu-item index="4">
                <a href="https://www.ele.me" target="_blank">{{constants.NAV_ABOUT_MODULE_SUB_PAGE}}</a>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    import {
      NAV_HOME_PAGE,
      NAV_TABLE_MODULE,
      NAV_TANLE_MODULE_SUB_PAGE,
      NAV_TEST_PAGE,
      NAV_ABOUT_MODULE_SUB_PAGE
    } from "@/constants/TEXT"
    export default {
      data() {
        return {
          constants: {
            NAV_HOME_PAGE,
            NAV_TABLE_MODULE,
            NAV_TANLE_MODULE_SUB_PAGE,
            NAV_TEST_PAGE,
            NAV_ABOUT_MODULE_SUB_PAGE
          },
          activeIndex: "1"
        }
      },
      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath)
        }
      }
    }
</script>
