<script setup>
import SvgIcon from './SvgIcon.vue';

defineEmits(['action']);

defineProps({
	width: {
		type: Number,
		default: 13,
	},
	height: {
		type: Number,
		default: 13,
	},
	bgColog: {
		type: String,
		default: '',
	},
	color: {
		type: String,
		default: '#f18701',
	},
});
</script>

<template>
	<button
		:style="{ 'background-color': bgColog }"
		@click="$emit('action')"
	>
		<SvgIcon
			name="close"
			:style="{
				width: width + 'px',
				height: height + 'px',
				stroke: color,
			}"
		/>
	</button>
</template>
