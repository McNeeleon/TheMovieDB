<script setup>
import SvgIcon from './SvgIcon.vue';
import AppCloseButton from './AppCloseButton.vue';

defineEmits(['closeMobileMenu']);

defineProps({
	menuItems: {
		type: Array,
		default: () => [],
	},
	isOpen: {
		type: Boolean,
		default: false,
	},
});
</script>

<template>
	<div
		class="mobile-menu d-block d-md-none"
		:class="{ open: isOpen }"
	>
		<div
			class="menu-overlay d-block d-md-none"
			@click="$emit('closeMobileMenu')"
		></div>
		<div
			class="d-flex flex-column flex-shrink-0 px-3 py-1 sm-menu shadow-lg"
			style="width: 280px"
		>
			<ul class="nav nav-pills flex-column">
				<li
					v-for="(item, index) in menuItems"
					:key="index"
					class="nav-item"
				>
					<router-link
						class="nav-link fs-5"
						style="color: #dee2e6"
						:to="{ name: item.name, params: { categor: item.params } }"
						:class="{ active: $route.name === item.name }"
					>
						<SvgIcon
							:name="item.icon"
							style="stroke: #dee2e6"
						/>
						<span class="ms-2">{{ item.name }}</span>
					</router-link>
				</li>
			</ul>

			<button
				class="btn btn-warning position-absolute"
				style="left: 100%; top: 0.5%; border-radius: 0"
				@click="$emit('closeMobileMenu')"
			>
				<SvgIcon
					name="close"
					style="stroke: #000"
				/>
			</button>

			<AppCloseButton
				class="btn btn-warning position-absolute"
				color="#000"
				style="left: 100%; top: 0.5%; border-radius: 0"
				@action="$emit('closeMobileMenu')"
			/>
		</div>
	</div>
</template>

<style lang="scss">
.mobile-menu {
	z-index: 9999;

	.nav-link:hover {
		color: #fff !important;
	}
}

.open .menu-overlay {
	background-color: rgba(0, 0, 0, 0.6);
	position: fixed;
	top: 0;
	height: 100%;
	width: 100%;
}

.sm-menu {
	position: fixed;
	top: 0;
	background: #1f1f1f;
	margin-left: -200%;
	width: 100%;
	height: 100%;
	transition: margin 0.4s;
}

.open .sm-menu {
	margin-left: 0;
}
</style>
