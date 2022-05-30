<script setup>
import { ref } from 'vue';

import Category from '../components/UserCategoryList.vue';
import Profile from '../components/UserProfile.vue';
import Votes from '../components/UserVotes.vue';

const tabs = { Profile, Votes, Category };

const activeLink = ref('Profile');
</script>

<template>
	<div class="container-sm">
		<div class="user-page bg-white">
			<ul class="user-nav nav nav-tabs mb-3 border-bottom-0">
				<li
					v-for="(_, tab) in tabs"
					:key="tab"
					href="#"
					class="nav-item"
					@click="activeLink = tab"
				>
					<a
						class="nav-link px-3 text-muted fw-600 font-monospace"
						:class="{ active: activeLink === tab }"
						href="#"
						>{{ tab }}</a
					>
				</li>
			</ul>

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
