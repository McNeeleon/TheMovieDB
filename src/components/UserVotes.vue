<script setup>
import { onMounted, ref } from 'vue';
import { userMovieApi } from '../api/userMovies-api';

import AppPreloader from './AppPreloader.vue';

import usedFormatNumber from '../use/usedFormatNumber';
import { formatDate } from '../utils/formatDate';
import UserVotesSvgAction from './UserVotesSvgAction.vue';

const movieList = ref([]);

const color = (rat) =>
	rat === 0
		? 'border border-1'
		: rat <= 4
		? 'bg-danger'
		: rat < 7
		? 'bg-secondary'
		: 'bg-success';

onMounted(async () => {
	movieList.value = await userMovieApi.getUserMovieList();
});

const { formatInteger } = usedFormatNumber();
</script>

<template>
	<div
		v-if="movieList.length"
		class="profile-vote mt-3"
	>
		<div
			v-for="(item, index) in movieList"
			:key="index"
			class="mb-2 ps-2 ps-sm-3"
		>
			<div class="row g-0">
				<div class="col-12 col-sm-7">
					<span class="d-block d-sm-none mb-2">
						{{
							formatDate(item.createTime, {
								year: 'numeric',
								month: 'short',
								day: 'numeric',
							})
						}}
					</span>
					<div class="d-flex">
						<img
							:src="item.image"
							class="img-fluid rounded"
							style="width: 70px; height: 100px"
						/>
						<div class="vote-info ps-3">
							<routerLink
								:to="{ name: 'media', params: { id: item.id } }"
								class="nav-link fw-bold color-555 p-0 lh-1 truncate-text"
							>
								{{ item.title }}
							</routerLink>

							<div class="color-555">{{ item.year }} {{ item.countries }}</div>

							<span
								v-if="item.imDbRating"
								class="fw-600 me-2"
								style="color: orange"
								>{{ formatInteger(item.imDbRating) }}</span
							>

							<span
								v-if="item.runtimeMins"
								class="color-555"
							>
								{{ item.runtimeMins + 'min' }}
							</span>

							<div class="d-flex align-items-center">
								<div
									v-if="item.vote"
									class="d-block d-sm-none me-2"
								>
									<div class="d-flex align-items-center">
										<span class="me-1 color-555">vote:</span>
										<span
											class="rounded-circle mt-1 text-white fw-600 d-flex justify-content-center align-items-center"
											:class="color(item.vote)"
											style="width: 1.4em; height: 1.4em"
										>
											{{ item.vote }}
										</span>
									</div>
								</div>
								<UserVotesSvgAction
									:favorite="item.favoriteFilms"
									:like="item.like"
									:watch-later="item.watchLater"
								/>
							</div>
						</div>
					</div>
				</div>

				<div class="col-5 d-none d-sm-block">
					<div class="d-flex justify-content-between align-items-center">
						<span class="">{{ formatDate(item.createTime, true, true) }}</span>

						<div
							class="badge p-0 me-3 fs-6 d-flex justify-content-center align-items-center"
							style="width: 2.5em; height: 2.5em"
							:class="color(item.vote)"
						>
							<template v-if="item.vote">
								{{ item.vote }}
							</template>

							<template v-else>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="18"
									height="18"
									fill="orange"
									class="bi bi-star"
									viewBox="0 0 16 16"
								>
									<path
										d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
									/>
								</svg>
							</template>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<AppPreloader v-else />
</template>

<style lang="scss">
.profile-vote {
	.truncate-text {
		padding-right: 15px !important;
		margin: 0;
		-webkit-line-clamp: 2;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
}
</style>
