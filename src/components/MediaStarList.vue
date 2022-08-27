<template>
	<div class="star-list d-flex justify-content-md-end">
		<div class="star-cards d-flex flex-column">
			<h3 class="fs-5">В ролях</h3>
			<div class="d-flex flex-sm-row flex-md-column justify-content-between">
				<div
					v-for="(item, index) in starList"
					:key="index"
					class="card border-0 mb-2 me-2 me-sm-4 me-md-0"
					style="width: 6.5rem"
				>
					<img
						:src="item.image"
						style="width: 100%; height: 130px; object-fit: cover"
						:alt="item.name"
						class="rounded"
					/>

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

<style lang="scss"></style>
