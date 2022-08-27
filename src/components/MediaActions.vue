<script setup>
import { computed, ref } from 'vue';
import { directive as vClickOutside } from 'click-outside-vue3';

import SvgIcon from './SvgIcon.vue';

const emits = defineEmits({
	addToWatchList: (options) => {
		if (
			typeof options === 'object' &&
			!Array.isArray(options) &&
			options !== null
		) {
			return true;
		} else {
			console.warn('not Object!');
			return false;
		}
	},
	addToWatchLater: null,
});

const props = defineProps({
	actionsList: {
		type: Object,
		default: () => {},
	},
});

const isDropdownList = ref(false);

const actionHandler = (item) => emits('addToWatchList', item);

const onClickOutside = () => (isDropdownList.value = false);

const isWatchLater = computed(() =>
	props.actionsList.find((el) => el.id === 'watchLater')
);
</script>

<template>
	<div class="actions px-1">
		<div class="action-btn btn-group w-100">
			<button
				class="btn btn-light px-1 border w-80 text-start ps-2"
				style="width: 80%"
				@click="$emit('addToWatchLater')"
			>
				<SvgIcon
					v-if="!isWatchLater.inList"
					name="plus"
					class="me-3"
				/>

				<SvgIcon
					v-else
					class="me-3"
					name="check"
				/>

				<span>Watch later</span>
			</button>

			<button
				v-click-outside="onClickOutside"
				class="btn btn-light px-0 border"
				style="width: 10%"
				@click="isDropdownList = !isDropdownList"
			>
				<SvgIcon name="caret-down" />
			</button>
		</div>

		<transition-group name="dropdown">
			<div
				v-if="isDropdownList"
				class="dropdown-list mt-1 bg-white"
			>
				<div class="ps-3 pt-2">Add to list</div>
				<div
					v-for="item in props.actionsList"
					:key="item.id"
					class="action-movies row g-0 py-1 ps-3 border-bottom"
					style="cursor: pointer"
					@click="actionHandler(item)"
				>
					<span class="col-1">
						<SvgIcon
							v-if="item.inList"
							name="check"
						/>
					</span>

					<span class="col ps-3 dropdown-text">{{ item.name }} </span>
				</div>
			</div>
		</transition-group>
	</div>
</template>

<style lang="scss">
.actions {
	position: relative;

	.btn:focus {
		box-shadow: none !important;
	}
	.btn:hover {
		background-color: #f1f1f1 !important;
	}

	.dropdown-leave-active {
		transition: all 0.2s ease-out;
	}
	.dropdown-enter-active {
		transition: all 0.2s ease-in;
	}

	.dropdown-enter-from,
	.dropdown-leave-to {
		opacity: 0;
	}

	.dropdown-list {
		width: 80%;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
		border-radius: 4px;
		z-index: 1;
		position: absolute;
		left: 18%;

		.action-movies {
			&:hover {
				background-color: #e9ecef;
			}
		}
		.dropdown-text {
			color: #6f6f6f;
		}
	}
}
</style>
