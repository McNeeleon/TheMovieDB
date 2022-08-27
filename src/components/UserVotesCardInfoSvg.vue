<template>
	<div
		v-if="like"
		class="svg-action"
	>
		<SvgIcon
			name="like"
			:color="likeColor"
		></SvgIcon>
	</div>
	<div
		v-if="watchLater"
		class="svg-action"
	>
		<SvgIcon
			name="bookmark"
			:color="watchLaterColor"
		></SvgIcon>
	</div>
	<div
		v-if="favorite"
		class="svg-action"
	>
		<SvgIcon
			name="heart"
			:color="favoriteColor"
		></SvgIcon>
	</div>
</template>

<script setup>
import SvgIcon from './SvgIcon.vue';
defineProps({
	favorite: {
		type: Boolean,
		default: false,
	},
	like: {
		type: Boolean,
		default: false,
	},
	watchLater: {
		type: Boolean,
		default: false,
	},
});

const likeColor = '#198754';
const favoriteColor = '#dc3545';
const watchLaterColor = '#1b263b';
</script>

<style lang="scss">
.svg-action + .svg-action {
	margin-left: 10px;
}
</style>
