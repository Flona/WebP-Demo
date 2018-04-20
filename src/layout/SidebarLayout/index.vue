<template>
    <el-container>
        <el-aside width="200px">
            <router-view name="sidebar"></router-view>
        </el-aside>
        <el-container>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
export default {};
</script>
