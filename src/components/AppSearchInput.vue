<script setup>
const emits = defineEmits(['searchMovie', 'update:modelValue']);

defineProps({
	value: {
		type: String,
		default: '',
	},
});
const inputHandler = (e) => {
	emits('searchMovie', e);
	emits('update:modelValue', e);
};
</script>
<template>
	<input
		type="text"
		class="border-0 rounded-start w-100 search-form"
		placeholder="Search..."
		style="outline: none; padding: 0.4em 0.9em"
		:value="value"
		@input="inputHandler($event.target.value)"
	/>
</template>
