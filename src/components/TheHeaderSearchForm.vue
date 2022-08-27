<script setup>
import { ref } from 'vue';

import SvgIcon from './SvgIcon.vue';
import AppSearchInput from './AppSearchInput.vue';
import AppCloseButton from './AppCloseButton.vue';

const emits = defineEmits({
	searchMovie: null,
	openSearchResult: null,
	'update:modelValue': null,
	clearSearchInput: null,
});

defineProps({
	modelValue: {
		type: String,
		default: '',
	},
});

const activeInput = ref(false);

const openSearchForm = () => (activeInput.value = true);

const closeSearchForm = () => (activeInput.value = false);

const clearSearchInput = () => emits('clearSearchInput');
const searchMovie = (searchName) => emits('searchMovie', searchName);
const updateModelValue = (value) => emits('update:modelValue', value);
</script>

<template>
	<form
		class="d-flex"
		@click.prevent
	>
		<div
			class="input-group flex-nowrap d-none d-md-flex"
			style="max-width: 500px; min-width: 400px"
		>
			<AppSearchInput
				:value="modelValue"
				@search-movie="searchMovie"
				@update:model-value="updateModelValue"
				@click="$emit('openSearchResult')"
			/>
			<AppCloseButton
				v-if="modelValue"
				:width="13"
				:height="13"
				class="border-0 px-3 input-group-text bg-white"
				@action="clearSearchInput"
			/>
			<span
				class="border-0 bg-white px-2 input-group-text"
				:style="{ display: !activeInput && 'block' }"
			>
				<SvgIcon
					name="search"
					color="#f18701"
				/>
			</span>
		</div>

		<div
			v-if="activeInput"
			class="mobile-input input-group flex-nowrap d-md-none"
		>
			<AppSearchInput
				:value="modelValue"
				@search-movie="searchMovie"
				@update:model-value="updateModelValue"
				@click="$emit('openSearchResult')"
			/>
			<AppCloseButton
				v-if="modelValue"
				:width="13"
				:height="13"
				class="border-0 px-3 input-group-text bg-white"
				@action="clearSearchInput"
			/>
			<AppCloseButton
				:width="23"
				:height="23"
				bg-colog="#ffe0a6"
				class="border-0 px-2 input-group-text"
				@action="closeSearchForm"
			/>
		</div>

		<button
			v-if="!activeInput"
			class="d-block d-md-none"
			style="background-color: transparent; border: none"
			@click="openSearchForm"
		>
			<SvgIcon
				style="width: 25px; height: 25px"
				name="search"
				color="#f18701"
			/>
		</button>
	</form>
</template>

<style lang="scss">
.mobile-input {
	position: absolute;
	left: 2%;
	top: 0%;
	z-index: 100;
	width: 94vw;
	height: -webkit-fill-available;
	padding: 3px;
}
</style>
