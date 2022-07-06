<script setup>
import { ref } from 'vue';

import Category from '../components/UserCategoryList.vue';
import Profile from '../components/UserProfile.vue';
import Votes from '../components/UserVotes.vue';
import AppTabs from '../components/AppTabs.vue';

const tabs = { Profile, Votes, Category };

const activeLink = ref('Profile');

const activTab = (idx) => (activeLink.value = idx);
</script>

<template>
	<div class="container-sm px-sm-2 px-md-5">
		<div class="user-page bg-white">
			<AppTabs
				:active-link="activeLink"
				:tab-data="tabs"
				@add-class="activTab"
			/>

			<component :is="tabs[activeLink]"></component>
		</div>
	</div>
</template>

<style lang="scss">
.user-nav {
	.nav-link {
		background-color: #f8f9fa;
		box-shadow: 0px 3px 1px 0px rgba(0, 0, 0, 0.1);
		text-decoration: underline;
		&:hover {
			// background-color: #e9ecef;
			text-decoration: underline;
		}
		&.active {
			color: orange !important;
			text-decoration: none;
			box-shadow: none;
		}
	}
}
</style>
