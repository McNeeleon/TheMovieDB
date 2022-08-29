<script setup>
import AppTabs from '../components/AppTabs.vue';
import popular from '../components/CategoryPopular.vue';
import top from '../components/CategoryTop.vue';

import useTabControl from '../use/useTabControl';
import CategoryWrapp from '../components/CategoryWrapp.vue';

const { currTab, handlerTab, route } = useTabControl();

const tabs = { popular, top };
</script>

<template>
	<CategoryWrapp>
		<template #tab>
			<p class="fs-3 fw-600 my-1">
				{{ route.name }}
			</p>
			<AppTabs
				:active-link="currTab"
				:tabs-component="tabs"
				@active-tab="handlerTab"
			/>
		</template>

		<template #content>
			<keep-alive>
				<component
					:is="tabs[currTab]"
					:media-type="route.name"
				></component>
			</keep-alive>
		</template>
	</CategoryWrapp>
</template>
