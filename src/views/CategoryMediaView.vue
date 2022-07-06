<script setup>
import { ref, watch } from 'vue';
import { computed } from '@vue/reactivity';
import { useRoute } from 'vue-router';

import AppTabs from '../components/AppTabs.vue';

import Popular from '../components/CategoryPopular.vue';
import Top from '../components/CategoryTop.vue';

const tabs = { Popular, Top };

const route = useRoute();

const activeTab = ref('Popular');

const mediaType = computed(
	() => route.query.cat.slice(0, 1).toUpperCase() + route.query.cat.slice(1)
);

const addTabClass = (val) => (activeTab.value = val);

watch(
	() => route.query.cat,
	() => (activeTab.value = 'Popular')
);
</script>

<template>
	<div class="container-xl">
		<div class="categoty bg-white px-2 px-sm-3">
			<div class="d-flex justify-content-between">
				<p
					class="fs-3 fw-600 my-1"
					style="font-family: cursive"
				>
					{{ mediaType }}
				</p>
				<AppTabs
					:active-link="activeTab"
					:tab-data="tabs"
					@add-class="addTabClass"
				/>
			</div>

			<component
				:is="tabs[activeTab]"
				:media-type="route.query.cat"
			></component>
		</div>
	</div>
</template>

<style lang="scss"></style>
