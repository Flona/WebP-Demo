<template>
	<section>
		<router-link :to="constants.PATH_HOME">
			<el-button type="primary" style="position: absolute; top: 5px;" router>
				<i class="el-icon-arrow-left"></i>{{constants.NAV_HOME_PAGE}}</el-button>
		</router-link>
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
		<async-card></async-card>
	</section>
</template>
<script>
	import { getDemoTableDataApi } from "@/constants/API"
	import { PATH_HOME } from "@/constants/URL"
	import {
	  LABEL_NAME,
	  LABEL_MOBILE,
	  LABEL_JOIN_DATE,
	  LABEL_ID_NUMBER,
	  LABEL_JOIN_POSITION_NAME,
	  NAV_HOME_PAGE
	} from "@/constants/TEXT"
	export default {
	  data() {
	    return {
	      constants: {
	        LABEL_NAME,
	        LABEL_MOBILE,
	        LABEL_JOIN_DATE,
	        LABEL_ID_NUMBER,
	        LABEL_JOIN_POSITION_NAME,
	        PATH_HOME,
	        NAV_HOME_PAGE
	      },
	      tableData: []
	    }
	  },
	  created() {
	    this.handleGetTable()
	  },
	  methods: {
	    handleGetTable() {
	      getDemoTableDataApi().then(res => {
					if (res) { // res即为成功数据，若需要业务详细处理的情况，则判断errcode
						// if (res.errcode === 'XXX') {
							// 根据errcode约定，详细处理业务
						// }
	          this.tableData = res
	        }
	      })
	    }
	  },
	  components: {
	    "async-card": () => import("@/components/modules/demo/Card.vue")
	  }
	}
</script>
<style scoped>

</style>