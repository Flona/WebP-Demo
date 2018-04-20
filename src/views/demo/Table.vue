<template>
	<section>
		<!--工具条-->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
			<el-form :inline="true">
				<el-form-item>
					<el-input placeholder="姓名"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary">查询</el-button>
				</el-form-item>
				<el-form-item>
					<el-button type="primary">新增</el-button>
				</el-form-item>
			</el-form>
		</el-col>

		<!--列表-->
		<el-table highlight-current-row style="width: 100%;">
			<el-table-column type="selection" width="55">
			</el-table-column>
			<el-table-column type="index" width="60">
			</el-table-column>
			<el-table-column prop="name" label="姓名" width="120" sortable>
			</el-table-column>
			<el-table-column prop="sex" label="性别" width="100" sortable>
			</el-table-column>
			<el-table-column prop="age" label="年龄" width="100" sortable>
			</el-table-column>
			<el-table-column prop="birth" label="生日" width="120" sortable>
			</el-table-column>
			<el-table-column prop="addr" label="地址" min-width="180" sortable>
			</el-table-column>
			<el-table-column label="操作" width="150">
				<template>
					<el-button size="small">编辑</el-button>
					<el-button type="danger" size="small">删除</el-button>
				</template>
			</el-table-column>
		</el-table>

		<!--工具条-->
		<el-col :span="24" class="toolbar">
			<el-button type="danger">批量删除</el-button>
			<el-pagination layout="prev, pager, next" style="float:right;">
			</el-pagination>
		</el-col>

		<!--编辑界面-->
		<el-dialog title="编辑">
			<el-form label-width="80px" ref="editForm">
				<el-form-item label="姓名" prop="name">
					<el-input auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="性别">
					<el-radio-group>
						<el-radio class="radio" :label="1">男</el-radio>
						<el-radio class="radio" :label="0">女</el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="年龄">
					<el-input-number></el-input-number>
				</el-form-item>
				<el-form-item label="生日">
					<el-date-picker type="date" placeholder="选择日期"></el-date-picker>
				</el-form-item>
				<el-form-item label="地址">
					<el-input type="textarea"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button>取消</el-button>
				<el-button type="primary">提交</el-button>
			</div>
		</el-dialog>

		<!--新增界面-->
		<el-dialog title="新增">
			<el-form label-width="80px" ref="addForm">
				<el-form-item label="姓名" prop="name">
					<el-input auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="性别">
					<el-radio-group>
						<el-radio class="radio" :label="1">男</el-radio>
						<el-radio class="radio" :label="0">女</el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="年龄">
					<el-input-number></el-input-number>
				</el-form-item>
				<el-form-item label="生日">
					<el-date-picker type="date" placeholder="选择日期"></el-date-picker>
				</el-form-item>
				<el-form-item label="地址">
					<el-input type="textarea"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button>取消</el-button>
				<el-button type="primary">提交</el-button>
			</div>
		</el-dialog>
	</section>
</template>

<script>
	export default {
	  data() {
	    return {}
	  },
	  mounted() {
	    // this.getUsers();
	  }
	}
</script>

<style scoped>

</style>