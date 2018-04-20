<template>
    <el-menu :default-active="$route.path" @open="handleopen" @close="handleclose" @select="handleselect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" unique-opened router>
        <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
            <el-submenu :index="index+''" v-if="item.children" :key="index+''">
                <template slot="title">
                    <i v-if="item.props && item.props.iconCls" :class="item.props.iconCls"></i>{{item.props&&item.props.label}}</template>
                <el-menu-item v-for="child in item.children ||[]" :index="item.path" :key="child.path" v-if="!child.hidden">
                    {{child.props && child.props.label}}
                </el-menu-item>
            </el-submenu>
            <el-menu-item v-if="item.name!=='notfound' &&(!item.children || item.children.length<=0)  " :index="item.path" :key="item.path">
                {{item.children}}
                <i v-if="item.props && item.props.iconCls" :class="item.props.iconCls"></i>{{item.props&&item.props.label}}
            </el-menu-item>
        </template>
    </el-menu>
</template>
<script>
    export default {
      methods: {
        handleopen() {
          //console.log('handleopen');
        },
        handleclose() {
          //console.log('handleclose');
        },
        handleselect: function(a, b) {}
      },
      mounted() {
        console.log(this.$router)
      }
    }
</script>

<style scoped lang="scss">

</style>
