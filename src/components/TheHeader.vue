<template>
	<header class="sticky-top">
		<nav class="container-xl">
			<div class="d-inline-flex align-items-center w-100">
				<div
					class="menu"
					:class="{ isShow: isShow }"
					@mouseenter="isShow = true"
					@mouseleave="isShow = false"
				>
					<div
						class="d-inline-flex py-3"
						style="z-index: 100; position: relative"
					>
						<button class="btn btn-toggle">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 448 512"
								width="20"
								height="20"
								fill="#6c757d"
								class="me-1"
							>
								<path
									d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"
								/>
							</svg>
						</button>
						<TheLogo
							class="me-2"
							@click="$router.push({ name: 'main' })"
						/>
					</div>
					<TheHeaderMenuDropdown />
				</div>

				<div class="ms-auto">
					<div class="d-flex">
						<TheHeaderSearchForm />

						<div class="fw-normal">
							<router-link
								to="/user"
								href="#"
								class="nav-link p-0"
							>
								<span class="avatar blue">N</span>
							</router-link>
						</div>
					</div>
				</div>
			</div>
		</nav>
	</header>
</template>

<script setup>
import { ref } from 'vue';

import TheLogo from './TheLogo.vue';
import TheHeaderSearchForm from './TheHeaderSearchForm.vue';
import TheHeaderMenuDropdown from './TheHeaderMenuDropdown.vue';

const isShow = ref(false);
</script>

<style lang="scss">
header {
	background-color: #1f1f1f;

	.avatar {
		position: relative;
		top: 0;
		left: 15%;
		width: 32px;
		height: 32px;
		text-align: center;
		text-transform: uppercase;
		border-radius: 50%;
		color: #fff;
		font-size: 0.9em;
		font-weight: 600;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #0177d2;
	}

	.btn-toggle {
		display: flex;
		align-items: center;
		padding: 0 0.5em !important;
	}
	.menu {
		width: fit-content;
		position: relative;
	}
}
</style>
