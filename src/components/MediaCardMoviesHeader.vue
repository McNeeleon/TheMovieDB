<script setup>
import checkForVoid from '../utils/checkForVoid';

defineProps({
	headerInfo: {
		type: Object,
		default: () => {},
	},
});
</script>

<template>
	<div
		class="card-header d-flex flex-column flex-md-row flex-wrap justify-content-between align-items-center mb-2 p-0"
	>
		<h1 class="media-title fw-600 me-2 mb-0">{{ headerInfo.title }}</h1>

		<div class="media-rating d-flex">
			<div class="rating-type">
				<div class="rating-title">IMDb rating</div>
				<div class="rating-star">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						style="color: #f5c518"
						width="34"
						height="34"
						viewBox="0 0 24 24"
						fill="currentColor"
						role="img"
						class="pe-1"
					>
						<path
							d="M12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
						></path>
					</svg>
					<div>
						<span class="fs-5 fw-600 me-1"
							>{{ checkForVoid(headerInfo.ratings.imDb, 'sm') }}
						</span>
						<span class="fs-6 text-muted">/10</span>
					</div>
				</div>
			</div>
			<div class="rating-type">
				<div class="rating-title">Rotten Tomatoes</div>
				<div class="rating-star">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						style="color: red"
						role="img"
						width="28"
						height="28"
						viewBox="0 0 24 24"
						class="pe-2"
					>
						<path
							d="M5.866 0L4.335 1.262l2.082 1.8c-2.629-.989-4.842 1.4-5.012 2.338 1.384-.323 2.24-.422 3.344-.335-7.042 4.634-4.978 13.148-1.434 16.094 5.784 4.612 13.77 3.202 17.91-1.316C27.26 13.363 22.993.65 10.86 2.766c.107-1.17.633-1.503 1.243-1.602-.89-1.493-3.67-.734-4.556 1.374C7.52 2.602 5.866 0 5.866 0zM4.422 7.217H6.9c2.673 0 2.898.012 3.55.202 1.06.307 1.868.973 2.313 1.904.05.106.092.206.13.305l7.623.008.027 2.912-2.745-.024v7.549l-2.982-.016v-7.522l-2.127.016a2.92 2.92 0 0 1-1.056 1.134c-.287.176-.3.19-.254.264.127.2 2.125 3.642 2.125 3.659l-3.39.019-2.013-3.376c-.034-.047-.122-.068-.344-.084l-.297-.02.037 3.48-3.075-.038zm3.016 2.288l.024.338c.014.186.024.729.024 1.206v.867l.582-.025c.32-.013.695-.049.833-.078.694-.146 1.048-.478 1.087-1.018.027-.378-.063-.636-.303-.87-.318-.309-.761-.416-1.733-.418Z"
							fill="red"
						></path>
					</svg>
					<div>
						<span class="fs-5 fw-600 me-1"
							>{{ checkForVoid(headerInfo.ratings.rottenTomatoes, 'sm') }}
						</span>
						<span class="fs-6 text-muted">/100</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.card-header {
	background-color: transparent !important;

	.media-title {
		font-size: 44px;
	}

	.facts {
		font-size: 17px;
		color: #6f6f6f;

		span + span::before {
			font-size: 1.1em;
			line-height: 1;
			content: '\2022';
			width: 100%;
			height: 100%;
			margin: 0 9px 0;
		}
	}

	.media-rating {
		.rating-type {
			display: flex;
			flex-flow: column;
			align-items: center;
			text-align: center;

			& + .rating-type {
				margin-left: 20px;
			}
		}

		.rating-title {
			font-size: 15px;

			color: #6f6f6f;
			font-weight: 600;
			text-transform: uppercase;
		}

		.rating-star {
			display: flex;
			flex-direction: row;
		}
	}
}
</style>
