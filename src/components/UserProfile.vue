<template>
	<div class="profile">
		<div
			class="card mb-3 border-0 mb-2"
			style="max-width: 500px"
		>
			<div class="row g-0">
				<div class="col-md-4">
					<img
						src="https://imdb-api.com/images/original/MV5BMTk1MjM3NTU5M15BMl5BanBnXkFtZTcwMTMyMjAyMg@@._V1_Ratio1.0000_AL_.jpg"
						class="img-fluid rounded-start"
						alt="..."
					/>
				</div>
				<div class="col-md-8">
					<div class="card-body pt-0">
						<h5
							class="fs-4 fst-italic fw-bold color-555"
							style="font-family: Georgia, serif"
						>
							Agent 007
						</h5>
						<div class="card-subtitle color-555">
							<span>Tom Cruz</span>
							<span>USA, New-York</span>
							<span>23.11.1985</span>
							<span>M</span>
						</div>
						<p class="card-text mt-2">
							This is a wider card with supporting text below as a natural
							lead-in
						</p>
					</div>
				</div>
			</div>
		</div>

		<ul
			class="nav nav-tabs nav-fill"
			style="background-color: #f8f9fa"
		>
			<li
				v-for="(item, index) in arr"
				:key="index"
				class="nav-item p-0"
			>
				<a
					class="nav-link color-555"
					href="#"
					@click.prevent
				>
					<b
						style=""
						class="fs-1 fs-md-5"
						>{{ item.count }}</b
					>
					<div>{{ item.type }}</div>
				</a>
			</li>
		</ul>
	</div>
</template>

<script setup>
const arr = [
	{ type: 'films', count: 2323 },
	{ type: 'serials', count: 2323 },
	{ type: 'favorite', count: 2323 },
	{ type: 'watch later', count: 2323 },
	{ type: 'movie', count: '-' },
];
</script>

<style lang="scss">
.profile {
	.nav-link {
		&:hover {
			background-color: #e9ecef;
			color: #2b2d42 !important;
		}
		&:active,
		&:focus {
			color: #2b2d42 !important;
		}
	}
}
</style>
