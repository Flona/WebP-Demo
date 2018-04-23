<template>
	<section>
		<!--列表-->
		<el-table highlight-current-row style="width: 100%;" :data="tableData">
			<el-table-column type="selection" width="55">
			</el-table-column>
			<el-table-column prop="name" label="姓名" width="120" sortable>
			</el-table-column>
			<el-table-column prop="mobile" label="手机" width="120" sortable>
			</el-table-column>
			<el-table-column prop="join_on" label="入职日期" width="120" sortable>
			</el-table-column>
			<el-table-column prop="id_number" label="身份证号" width="200" sortable>
			</el-table-column>
			<el-table-column prop="job_position_name" label="入职职位" min-width="180" sortable>
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
	</section>
</template>

<script>
  import {API_DEMO_TABLE_DATA} from '../../constants/API'
	export default {
	  data() {
	    return {
				tableData: []
			}
	  },
	  created() {
			this.handleGetTable()
		},
		methods: {
      handleGetTable() {
        API_DEMO_TABLE_DATA().then(res => {
					console.log(res)
          if (res) {
						this.tableData = res.data
          }
        })
			}
		}
	}
</script>

<style scoped>

</style>