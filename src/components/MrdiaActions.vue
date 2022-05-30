<template>
	<!-- class="d-flex justify-content-around align-items-center px-3 py-2 border bg-light w-100" -->

	<div class="actions px-1">
		<div class="action-btn btn-group w-100">
			<button
				class="btn btn-light px-1 border w-80 text-start ps-2"
				style="width: 80%"
				@click="addToWatchLater"
			>
				<svg
					v-if="!watchLater"
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					fill="#6f6f6f"
					class="bi bi-plus-lg me-3"
					viewBox="0 0 16 16"
				>
					<path
						fill-rule="evenodd"
						d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
					/>
				</svg>

				<svg
					v-else
					xmlns="http://www.w3.org/2000/svg"
					width="18"
					height="18"
					fill="#ffc107"
					class="bi bi-check-lg me-3"
					viewBox="0 0 16 16"
				>
					<path
						d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
					/>
				</svg>

				<span>Add to Watchlist</span>
			</button>

			<button
				class="btn btn-light px-0 border"
				style="width: 10%"
				@click="isDropdownList = !isDropdownList"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					fill="#6f6f6f"
					class="bi bi-caret-down-fill"
					viewBox="0 0 16 16"
				>
					<path
						d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
					/>
				</svg>
			</button>
		</div>

		<transition-group name="dropdown">
			<div
				v-if="isDropdownList"
				class="dropdown-list mt-1 bg-white"
			>
				<div class="ps-3 pt-2">Add to list</div>
				<div
					v-for="(val, key) in actionsList"
					:key="key"
					class="action-movies row g-0 py-1 ps-3 border-bottom"
					style="cursor: pointer"
					@click="actionHandler(val)"
				>
					<span class="col-1">
						<svg
							v-if="val.inList"
							xmlns="http://www.w3.org/2000/svg"
							width="18"
							height="18"
							fill="#ffc107"
							class="bi bi-check-lg"
							viewBox="0 0 16 16"
						>
							<path
								d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
							/>
						</svg>
					</span>

					<span
						class="col ps-3"
						style="color: #6f6f6f"
						>{{ key }}
					</span>
				</div>
			</div>
		</transition-group>
	</div>

	<!-- <ul
			class="list-group list-group-horizontal text-white justify-content-around"
		>
			<li class="list-group-item p-0">
				<a
					href="#"
					class="circle"
					@click.prevent="addToWatchLater"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						:width="swgWidth"
						:height="svgHeight"
						:fill="watthLaterColor"
						stroke="#31383F"
						class="bi bi-bookmark-fill"
						viewBox="0 0 16 16"
					>
						<path
							d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"
						/>
					</svg>
				</a>
			</li>
			<li class="list-group-item p-0">
				<a
					href="#"
					class="circle"
					@click.prevent="addToStars"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						:width="swgWidth"
						:height="svgHeight"
						:fill="starColor"
						stroke="#f5c518"
						class="bi bi-star-fill"
						viewBox="0 0 16 16"
					>
						<path
							d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
						/>
					</svg>
				</a>
			</li>
			<li class="list-group-item p-0">
				<a
					href="#"
					class="circle"
					@click.prevent="addToFavorites"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						:width="swgWidth"
						:height="svgHeight"
						:fill="heartColor"
						stroke="red"
						class="bi bi-suit-heart-fill"
						viewBox="0 0 16 16.8"
					>
						<path
							d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"
						/>
					</svg>
				</a>
			</li>
		</ul> -->
</template>

<script setup>
import { ref } from 'vue';

const isDropdownList = ref(false);

const watchLater = ref(false);

const actionsList = ref({
	'Watch later': { inList: watchLater },
	'Favorite films': { inList: false },
	Favorites: { inList: false },
	'Wathed ': { inList: false },
});

const actionHandler = (value) => {
	value.inList = !value.inList;
	console.log(actionsList.value);
};

const addToWatchLater = () => {
	watchLater.value = !watchLater.value;

	console.log(actionsList.value);
};

// const swgWidth = 26;
// const svgHeight = 26;

// const noneColor = 'none';

// const starColor = ref(noneColor);
// const heartColor = ref(noneColor);
// const watthLaterColor = ref(noneColor);

// const isStar = ref(false);
// const isFavorite = ref(false);
// const isWatchLater = ref(false);

// const addToFavorites = () => {
// 	isFavorite.value = !isFavorite.value;

// 	heartColor.value = isFavorite.value ? '#ff0000' : noneColor;
// };

// const addToStars = () => {
// 	isStar.value = !isStar.value;

// 	starColor.value = isStar.value ? '#f5c518' : noneColor;
// };

// const addToWatchLater = () => {
// 	isWatchLater.value = !isWatchLater.value;

// 	watthLaterColor.value = isWatchLater.value ? '#31383F' : noneColor;
// };
</script>

<style lang="scss">
.actions {
	position: relative;

	.btn:focus {
		box-shadow: none !important;
	}
	.btn:hover {
		background-color: #f1f1f1 !important;
	}

	.dropdown-leave-active {
		transition: all 0.2s ease-out;
	}
	.dropdown-enter-active {
		transition: all 0.2s ease-in;
	}

	.dropdown-enter-from,
	.dropdown-leave-to {
		opacity: 0;
	}

	.dropdown-list {
		width: 80%;
		// margin-left: auto;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
		border-radius: 4px;
		z-index: 100111;
		// background-color: red;
		position: absolute;
		left: 18%;

		.action-movies {
			&:hover {
				background-color: #e9ecef;
			}
		}
	}
}

// .bi-heart-fill {
// 	stroke: red;
// 	stroke-width: 2px;
// 	fill: none;
// }

// svg {
// 	 fill: white;
// }

// .circle {
// 	margin-left: 10px;
// 	background-color: rgb(3, 37, 65);
// 	border: 1px solid black;
// 	border-radius: 50%;
// 	height: 46px;
// 	width: 46px;
// 	padding: 10px;
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// }
// .list-group-item {
// 	background-color: transparent;
// 	border: none;
// 	color: #5c5c5c;
// }
// .list-group-item {
// 	padding-left: 0;
// }
</style>
