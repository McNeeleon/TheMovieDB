<template>
	<div
		class="card border-0 pb-3"
		:class="cardSize"
	>
		<a
			href="#"
			class="image"
			@click.prevent="action"
		>
			<img
				:src="item.image"
				loading="lazy"
				:alt="item.title"
			/>
		</a>

		<div class="card-body text-start p-0 pt-2">
			<h5 class="card-title p-0 m-0">
				<a
					href="#"
					class="nav-link link-dark fw-600 p-0"
					@click.prevent="action"
					>{{ item?.title }}</a
				>
			</h5>
			<p class="card-text fw-normal">{{ item?.year }}</p>
			<!-- <p class="card-text fw-normal">{{  }}</p> -->
		</div>
	</div>
</template>

<script setup>
defineProps({
	item: {
		type: Object,
		default() {
			return {};
		},
	},
	cardSize: {
		type: String,
		default: 'sm_card',
		validator(value) {
			return ['sm_card', 'md_card', 'lg_card'].includes(value);
		},
	},
	imgAlt: {
		type: String,
		default: 'img',
	},
});
</script>

<style>
.card {
	background-color: transparent !important;
}
.sm_card {
	min-width: 100px;
}
.md_card {
	min-width: 100px;
}
.lg_card {
	min-width: 400px;
}

.image {
	border-radius: 8px;
	overflow: hidden;
	display: block;
	box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.3);
	/* min-width: 120px; */
	/* min-height: 200px; */
}

img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.consensus {
	top: 91%;
	left: 10%;
}
span.current-counter {
	margin-left: -1px;
}
span.current-counter::after {
	position: absolute;
	top: 21%;
	left: 100%;
	margin-left: 1px;
	content: '%';
	font-size: 7px;
}
.card-title a:hover {
	color: rgb(1, 180, 228);
}

.card p {
	color: rgba(0, 0, 0, 0.6);
}
.card-title a {
	font-size: 17px;
}

.bsh {
	/* max-width: 180px; */
	box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
}
</style>
