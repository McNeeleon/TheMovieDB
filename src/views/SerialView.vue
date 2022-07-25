<script setup>
import AppTabs from '../components/AppTabs.vue';
import popular from '../components/CategoryPopular.vue';
import top from '../components/CategoryTop.vue';

import useTabControl from '../use/useTabControl';

const { currTab, handlerTab, route } = useTabControl();

const tabs = { popular, top };
</script>

<template>
	<div class="container-xl">
		<div class="categoty bg-white px-2 px-sm-3">
			<div class="d-flex justify-content-between">
				<p
					class="fs-3 fw-600 my-1"
					style="font-family: cursive"
				>
					{{ route.name }}
				</p>
				<AppTabs
					:active-link="currTab"
					:tabs-component="tabs"
					@active-tab="handlerTab"
				/>
			</div>

			<keep-alive>
				<component
					:is="tabs[currTab]"
					:media-type="route.name"
				></component>
			</keep-alive>
		</div>
	</div>
</template>
