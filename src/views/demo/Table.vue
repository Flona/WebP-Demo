<template>
	<section>
		<el-table highlight-current-row :data="tableData">
			<el-table-column type="selection" width="55">
			</el-table-column>
			<el-table-column prop="name" :label="constants.LABEL_NAME" width="120" sortable>
			</el-table-column>
			<el-table-column prop="mobile" :label="constants.LABEL_MOBILE" width="120" sortable>
			</el-table-column>
			<el-table-column prop="join_on" :label="constants.LABEL_JOIN_DATE" width="120" sortable>
			</el-table-column>
			<el-table-column prop="id_number" :label="constants.LABEL_ID_NUMBER" width="200" sortable>
			</el-table-column>
			<el-table-column prop="job_position_name" :label="constants.LABEL_JOIN_POSITION_NAME" min-width="180" sortable>
			</el-table-column>
		</el-table>
	</section>
</template>
<script>
	import {API_DEMO_TABLE_DATA} from '@/constants/API'
	import { LABEL_NAME, LABEL_MOBILE, LABEL_JOIN_DATE, LABEL_ID_NUMBER, LABEL_JOIN_POSITION_NAME } from "@/constants/TEXT"
	export default {
	  data() {
	    return {
				constants: {LABEL_NAME, LABEL_MOBILE, LABEL_JOIN_DATE, LABEL_ID_NUMBER, LABEL_JOIN_POSITION_NAME},
				tableData: []
			}
	  },
	  created() {
			this.handleGetTable()
		},
		methods: {
      handleGetTable() {
        API_DEMO_TABLE_DATA().then(res => {
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