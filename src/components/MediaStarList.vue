<template>
	<div class="star-list d-flex justify-content-md-end">
		<div class="star-cards flex-grow-1 flex-sm-grow-0 d-flex flex-column">
			<h3 class="fs-5">В ролях</h3>
			<div class="d-flex flex-sm-row flex-md-column justify-content-between">
				<div
					v-for="(item, index) in starList"
					:key="index"
					class="card border-0 mb-2 me-sm-4"
					style="width: 6.5rem"
				>
					<!-- <div style="width: 200px; height: 250px"> -->
					<img
						:src="item.image"
						style="width: 100%; height: 130px"
						:alt="item.name"
						class="rounded"
					/>
					<!-- </div> -->
					<div class="card-body p-0 mb-1">
						<p
							class="card-title mb-1 fw-600"
							style="font-size: 15px; line-height: 20px"
						>
							{{ item.name }}
						</p>
						<p
							class="card-subtitle"
							style="
								font-size: 14px;
								color: rgba(0, 0, 0, 0.4);
								line-height: 18px;
							"
						>
							{{ item.asCharacter }}
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
defineProps({
	starList: {
		type: Object,
		default: () => {},
	},
});
</script>

<style lang="scss">
@media (max-width: 576px) {
}

.star-cards {
	// margin-left: auto;
}
</style>
