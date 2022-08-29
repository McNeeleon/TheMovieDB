<template>
	<div class="container-xl">
		<div class="bg-white px-2 px-sm-3">
			<div class="d-flex justify-content-between align-items-center">
				<slot name="tab"></slot>
			</div>

			<slot name="content"></slot>
		</div>
	</div>
</template>
