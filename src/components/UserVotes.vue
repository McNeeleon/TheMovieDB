<template>
	<div class="votes mt-3">
		<div
			v-for="(item, index) in 40"
			:key="index"
			class="mb-3 ps-3"
			style=""
		>
			<div class="row g-0">
				<div class="col-md-1">
					<img
						src="https://m.media-amazon.com/images/M/MV5BYmRiYjQ0OGQtYTAzMi00OGVjLWE4YTQtM2Q4YjBlZTBhMWM5XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg"
						class="img-fluid rounded-start"
						style="max-width: 90px"
						alt="..."
					/>
				</div>
				<div class="col-md-11">
					<div class="d-flex justify-content-between align-items-center">
						<div class="ps-3">
							<a
								class="nav-link fw-bold color-555 mb-1 p-0"
								href="#"
								style="font-family: Georgia, serif"
							>
								Agent 007
							</a>
							<div class="color-555">
								<span>9.6</span>
								<span>USA, New-York</span>
								<span>23.11.1985</span>
								<span>60min</span>
							</div>
						</div>

						<span class="">0.11.2020</span>

						<span class="badge bg-danger p-3 me-3 fs-6"> 6 </span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
