<script setup>
import { computed } from '@vue/reactivity';
import { directive as vClickOutside } from 'click-outside-vue3';

const emits = defineEmits({
	closeSearchResult: null,
});

const props = defineProps({
	searchedMedia: {
		type: Array,
		default: () => {},
	},
	searchInput: {
		type: String,
		default: '',
	},
	searchError: {
		type: String,
		default: '',
	},
	searchResultIsOpen: {
		type: Boolean,
		default: false,
	},
});

const onClickOutside = () => {
	emits('closeSearchResult', event.target);
};

const showResult = computed(
	() =>
		props.searchResultIsOpen &&
		(props.searchedMedia.length || props.searchError === 'Movie not found!')
);

const shortSearchResult = computed(() => {
	return props.searchedMedia.length >= 4
		? props.searchedMedia.slice(0, 4)
		: props.searchedMedia;
});

const countRestMedia = computed(
	() => props.searchedMedia.length - shortSearchResult.value.length
);

const isMoreMedia = computed(() => countRestMedia.value > 0);
</script>

<template>
	<div
		v-if="showResult && $route.name !== 'search'"
		v-click-outside="onClickOutside"
		class="search-result p-2 shadow"
	>
		<div
			v-for="(item, index) in shortSearchResult"
			:key="index"
			class="search-media d-flex flex-row mb-2"
		>
			<div class="media-img me-2">
				<img
					style="height: 90px; width: 60px; object-fit: cover"
					:src="
						item.Poster === 'N/A'
							? '/src/assets/img_placeholder.png'
							: item.Poster
					"
					:alt="item.Title"
				/>
			</div>

			<div
				class="media-info"
				style="font-family: sans-serif"
			>
				<router-link
					:to="{ name: 'media', params: { id: item.imdbID } }"
					style="color: #ff9800; font-size: 18px"
					class="nav-link p-0"
					@click="$emit('closeSearchResult', $event.target)"
					>{{ item.Title }}
				</router-link>
				<p>{{ item.Year }} / {{ item.Type }}</p>
			</div>
		</div>

		<span v-if="searchError">{{ searchError }}</span>

		<template v-if="isMoreMedia">
			<router-link
				:to="{ name: 'search', query: { name: searchInput } }"
				class="text-danger text-center fw-600"
			>
				Show all
				{{ searchedMedia.length }}</router-link
			>
		</template>
	</div>
</template>

<style lang="scss">
.search-result {
	position: absolute;
	top: 110%;
	background-color: #ffff;
	width: -webkit-fill-available;
}

@media (max-width: 768px) {
	.search-result {
		width: 96%;
		top: 100%;
		left: 2%;
	}
}
</style>
