<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import TheLogo from './TheLogo.vue';
import TheHeaderSearchForm from './TheHeaderSearchForm.vue';

import TheHeaderMobileMenu from './TheHeaderMobileMenu.vue';

import TheHeaderSearchResult from './theHeaderSearchResult.vue';

import useSearchMovie from '../use/useSearchMovie';
import TheHeaderNav from './TheHeaderNav.vue';

const router = useRouter();

const menuIsOpen = ref(false);

const menuItems = [
	{ name: 'main', icon: 'home' },
	{ name: 'user', icon: 'person', params: 'profile' },
	{ name: 'movie', icon: 'movie', params: 'popular' },
	{ name: 'serial', icon: 'serial', params: 'popular' },
];

const {
	searchMovie,
	searchResultIsOpen,
	searchedMedia,
	searchedError,
	search,
	searchStore,
} = useSearchMovie(router);

const clearSearchInput = () => {
	search.value = '';
	searchStore.clearStore();
};

const closeSearchResult = (e) => {
	if (!e.classList.contains('search-form')) {
		searchResultIsOpen.value = false;
	}
};

const openSearchResult = () => {
	if (searchedMedia.value.length || searchedError.value) {
		searchResultIsOpen.value = true;
	}
};

const mobileMenuHandler = () => {
	menuIsOpen.value = !menuIsOpen.value;
	menuIsOpen.value
		? (document.body.style.overflow = 'hidden')
		: (document.body.style.overflow = '');
};

router.beforeEach((to, from, next) => {
	if (to.name === 'media' || from.name === 'search') {
		searchResultIsOpen.value = false;
		next();
	} else {
		next();
	}
});
</script>

<template>
	<header class="sticky-top">
		<div class="container-xl">
			<div class="d-flex align-items-center">
				<TheHeaderNav
					:menu-items="menuItems"
					@mobile-menu-handler="mobileMenuHandler"
				/>
				<TheLogo
					class="ms-auto ms-md-0"
					@click="$router.push({ name: 'main' })"
				/>

				<div class="search ms-auto">
					<TheHeaderSearchForm
						v-model="search"
						@search-movie="searchMovie"
						@open-search-result="openSearchResult"
						@clear-search-input="clearSearchInput"
					/>

					<TheHeaderSearchResult
						:search-input="search"
						:searched-media="searchedMedia"
						:search-result-is-open="searchResultIsOpen"
						:search-error="searchedError"
						@close-search-result="closeSearchResult"
					/>
				</div>
			</div>
		</div>
	</header>
	<TheHeaderMobileMenu
		:is-open="menuIsOpen"
		:menu-items="menuItems"
		@close-mobile-menu="mobileMenuHandler"
	/>
</template>

<style lang="scss">
header {
	background-color: #1f1f1f;

	.btn-toggle {
		display: flex;
		align-items: center;
		padding: 0 0.5em !important;
	}
	.menu {
		width: fit-content;
		position: relative;
	}
}

.search {
	position: relative;
}

@media (max-width: 768px) {
	.search {
		position: inherit;
	}
}
</style>
