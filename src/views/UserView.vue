<script setup>
import category from '../components/UserCategoryList.vue';
import profile from '../components/UserProfile.vue';
import votes from '../components/UserVotes.vue';
import AppTabs from '../components/AppTabs.vue';

import useTabControl from '../use/useTabControl';

const { handlerTab, currTab } = useTabControl();

const tabs = { profile, votes, category };
</script>

<template>
	<div
		class="container-sm px-sm-2 px-md-5"
		style="max-width: 960px"
	>
		<div class="user-page bg-white">
			<AppTabs
				:active-link="currTab"
				:tabs-component="tabs"
				@active-tab="handlerTab"
			/>

			<keep-alive>
				<component :is="tabs[currTab]"></component>
			</keep-alive>
		</div>
	</div>
</template>

<style lang="scss"></style>
