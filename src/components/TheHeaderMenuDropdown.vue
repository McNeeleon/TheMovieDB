<script setup>
import SvgIcon from './SvgIcon.vue';

defineProps({
	menuItems: {
		type: Array,
		default: () => [],
	},
});
</script>

<template>
	<ul class="menu-dromdown rounded-3 rounded-top-0">
		<li
			v-for="(item, index) in menuItems"
			:key="index"
			class="nav"
		>
			<router-link
				:to="{ name: item.name, params: { categor: item.params } }"
				:class="{ active: $route.name === item.name }"
			>
				<SvgIcon
					:name="item.icon"
					style="stroke: #6c757d"
				/>
				<span>{{ item.name }}</span>
			</router-link>
		</li>
	</ul>
</template>

<style lang="scss">
$menu-color: #2a2a2b;

.menu:hover .menu-dromdown {
	visibility: visible;
	opacity: 1;
	transition: all 0.2s;
}

.menu-dromdown {
	visibility: hidden;
	opacity: 0;
	position: absolute;
	top: 0;

	overflow: hidden;

	background-color: $menu-color;
	padding: 60px 20px 10px;
	min-width: 220px;
	max-width: 260px;

	li {
		margin-bottom: 10px;
	}
	a {
		display: flex;
		align-items: center;
		text-decoration: none;
		font-size: 1.2em;
		color: #6c757d;
		font-weight: 600;

		&:hover {
			color: #fdb42d;
			font-weight: bold;
		}

		&:hover svg {
			stroke: #fdb42d;
		}

		svg {
			margin-right: 10px;
		}
	}
	.active {
		color: #ffe15c;
	}
	.active svg {
		stroke: #ffe15c;
	}
}
</style>
