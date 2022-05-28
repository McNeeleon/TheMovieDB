<template>
	<section class="container-xl d-flex justify-content-center my-3">
		<div class="row gy-4">
			<div
				v-for="(item, index) in 50"
				:key="index"
				class="col-6 col-sm-3 col-md-3 col-lg-2 col-xl-2s"
			>
				<div
					class="card border-0"
					:style="{ 'min-width': '100px', 'max-width': '250px' }"
				>
					<a
						href="#"
						class="img-fluid"
						:class="imgClass"
						@click.prevent="action"
					>
						<img
							src="https://m.media-amazon.com/images/M/MV5BNWM0ZGJlMzMtZmYwMi00NzI3LTgzMzMtNjMzNjliNDRmZmFlXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_Ratio0.6699_AL_.jpg"
							alt="imgAlt"
						/>
					</a>

					<div class="card-body text-start pt-2 ps-1">
						<h5 class="card-title p-0 m-0">
							<a
								href="#"
								class="nav-link link-dark fs-6 fw-600 p-0"
								@click.prevent="action"
								>1}</a
							>
						</h5>
						<p class="card-text fw-normal">1</p>
						<!-- <p class="card-text fw-normal">{{  }}</p> -->
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
const imgClass = 'image';
// import CardMovie from '../components/CardMovie.vue';
</script>

<style>
.image {
	/* max-width: 350px; */
}
</style>
