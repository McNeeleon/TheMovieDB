<script setup>
defineProps({
	moviesCounter: {
		type: Object,
		default: () => {},
	},
});
</script>

<template>
	<ul class="nav nav-fill flex-column flex-sm-row px-2 px-sm-0">
		<li
			v-for="(item, index) in moviesCounter"
			:key="index"
			class="nav-item p-1 d-flex flex-row-reverse justify-content-end align-items-center d-sm-block"
		>
			<b class="fs-1 fs-md-5 color-555 ms-auto">{{ item.count }}</b>
			<div>{{ item.type }}</div>
		</li>
	</ul>
</template>

<style lang="scss">
.profile {
	.nav {
		background-color: #e9ecef;
	}
	.nav-link {
		&:hover {
			background-color: #ced4da;
			color: #2b2d42 !important;
		}
		&:active,
		&:focus {
			color: #2b2d42 !important;
		}
	}
}
</style>
