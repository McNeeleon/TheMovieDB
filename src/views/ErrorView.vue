<template>
	<div class="containter">
		<div class="alert alert-danger py-3 fs-3 text-center">
			{{ message }}
		</div>
	</div>
</template>

<script setup>
defineProps({
	message: {
		type: String,
		default: '',
	},
});
</script>
