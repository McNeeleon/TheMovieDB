<script setup>
defineEmits({
	activeTab: null,
});

defineProps({
	activeLink: {
		type: String,
		default: '',
	},
	tabsComponent: {
		type: Object,
		default: () => {},
	},
});
</script>

<template>
	<ul class="tab nav nav-tabs mb-3 border-bottom-0">
		<li
			v-for="(_, idx) in tabsComponent"
			:key="idx"
			href="#"
			class="nav-item"
		>
			<a
				class="nav-link px-3 text-muted fw-600 font-monospace"
				href="#"
				:class="{ active: idx === activeLink }"
				@click="$emit('activeTab', idx)"
				>{{ idx }}</a
			>
		</li>
	</ul>
</template>

<style lang="scss">
.tab {
	.nav-link {
		background-color: #f8f9fa;
		box-shadow: 0px 3px 1px 0px rgba(0, 0, 0, 0.1);

		&:hover:not(.active) {
			background-color: #f0f1f3;
		}
		&.active {
			color: orange !important;
			text-decoration: none;
			box-shadow: none;
			border: none;
		}
	}
}
</style>
