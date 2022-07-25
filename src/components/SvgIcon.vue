<template>
	<svg
		id="svg-icon"
		aria-hidden="true"
	>
		<use
			:href="symbolId"
			:fill="color"
		/>
	</svg>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
	prefix: {
		type: String,
		default: 'icon',
	},
	name: {
		type: String,
		required: true,
	},
	color: {
		type: String,
		default: '#333',
	},
});

const symbolId = computed(() => `#${props.prefix}-${props.name}`);
</script>

<style lang="scss">
#svg-icon {
	width: 16px;
	height: 16px;
}
</style>
