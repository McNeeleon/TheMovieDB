<script setup>
import SvgIcon from './SvgIcon.vue';
</script>

<template>
	<form
		class="d-flex me-3"
		@click.prevent
	>
		<input
			type="text"
			class="border-0 rounded-start w-100"
			placeholder="Search..."
			aria-label="Search"
			style="outline: none; padding: 0.4em 0.9em"
		/>
		<button class="border-0 rounded-end bg-white px-2">
			<SvgIcon
				name="serch"
				color="#f18701"
			/>
		</button>
	</form>
</template>

<style lang="scss"></style>
