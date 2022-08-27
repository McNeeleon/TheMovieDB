<script setup>
import TheHeaderMenuDropdown from './TheHeaderMenuDropdown.vue';
import SvgIcon from './SvgIcon.vue';

defineEmits(['mobileMenuHandler']);

defineProps({
	menuItems: {
		type: Array,
		default: () => [],
	},
});
</script>

<template>
	<nav class="d-flex menu">
		<div style="padding: 12px 0">
			<button
				class="btn btn-toggle d-none d-md-block"
				style="z-index: 100; position: relative"
			>
				<SvgIcon
					fill="#6c757d"
					class="me-1"
					name="menu"
				>
				</SvgIcon>
			</button>

			<button
				class="btn btn-toggle d-block d-md-none me-2 p-0"
				@click="$emit('mobileMenuHandler')"
			>
				<SvgIcon
					style="width: 23px; height: 23px"
					fill="#6c757d"
					name="menu"
				>
				</SvgIcon>
			</button>
		</div>

		<TheHeaderMenuDropdown
			class="d-none d-md-block"
			:menu-items="menuItems"
		/>
	</nav>
</template>

<style lang="scss">
.menu {
	width: fit-content;
	position: relative;
}
</style>
