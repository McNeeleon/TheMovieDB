<template>
	<div
		v-if="size != 'fit'"
		class="overlay"
	>
		<div class="d-flex justify-content-center">
			<div
				class="spinner-grow me-3"
				role="status"
			>
				<span class="visually-hidden">Loading...</span>
			</div>

			<div
				class="spinner-grow me-3"
				role="status"
			>
				<span class="visually-hidden">Loading...</span>
			</div>

			<div
				class="spinner-grow"
				role="status"
			>
				<span class="visually-hidden">Loading...</span>
			</div>
		</div>
	</div>

	<div
		v-else
		class="d-flex justify-content-center"
	>
		<div
			class="spinner-grow me-3"
			role="status"
		>
			<span class="visually-hidden">Loading...</span>
		</div>

		<div
			class="spinner-grow me-3"
			role="status"
		>
			<span class="visually-hidden">Loading...</span>
		</div>

		<div
			class="spinner-grow"
			role="status"
		>
			<span class="visually-hidden">Loading...</span>
		</div>
	</div>
</template>

<script setup>
defineProps({
	size: {
		type: String,
		default: 'fit',
		validation: (value) => {
			return ['fit', 'full'].include(value);
		},
	},
});
</script>

<style lang="scss">
.overlay {
	position: absolute;
	height: 100%;
	width: 100%;
	top: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.1);
	display: flex;
	align-items: center;
	justify-content: center;
	padding-bottom: 10%;
}

.spinner-grow {
	width: 1.3rem;
	height: 1.3rem;
}
</style>
