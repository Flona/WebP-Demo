<template>
	<el-form ref="form" :model="form" label-width="80px" @submit.prevent="onSubmit" style="margin:20px;width:60%;min-width:600px;">
		<el-form-item :label="constants.LABEL_ACTIVITY_NAME">
			<el-input v-model="form.name"></el-input>
		</el-form-item>
	</el-form>
</template>

<script>
	import { LABEL_ACTIVITY_NAME } from "@/constants/TEXT"

	export default {
	  data() {
	    return {
	      constants: {
	        LABEL_ACTIVITY_NAME
	      },
	      form: {
	        name: ""
	      }
	    }
	  },
	  methods: {
	    onSubmit() {
	      console.log("submit!")
	    }
	  }
	}
</script>