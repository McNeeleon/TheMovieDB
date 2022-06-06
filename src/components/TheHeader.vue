<template>
	<header>
		<nav class="py-2">
			<div class="container-xl d-flex flex-wrap">
				<ul class="nav me-auto align-items-center">
					<li class="nav-item me-3">
						<a
							href="#"
							class="nav-link link-dark px-1 active"
							@click.prevent="goHome"
							><img
								class="svg"
								src="../assets/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
								alt=""
						/></a>
					</li>

					<li
						class="nav-item me-3"
						@mouseover="isOpenOne = true"
						@mouseleave="isOpenOne = false"
					>
						<a
							href="#"
							class="nav-link link-light px-1"
							>Фильмы</a
						>

						<ul
							v-if="isOpenOne"
							class="dropdown-menu"
						>
							<li>
								<!-- <a href="#" class="dropdown-item">Попуоярные</a> -->
								<!-- <router-link
                  class="dropdown-item"
                  to="/movies"
                  >Популярные</router-link
                > -->
							</li>
							<li>
								<a
									href="#"
									class="dropdown-item"
									>Ожидаемые</a
								>
							</li>
							<li>
								<a
									href="#"
									class="dropdown-item"
									>Лючшие</a
								>
							</li>
							<li>
								<a
									href="#"
									class="dropdown-item"
									>Смотрять сейчас</a
								>
							</li>
						</ul>
					</li>

					<li
						class="nav-item me-3"
						@mouseover="isOpenTwo = true"
						@mouseleave="isOpenTwo = false"
					>
						<a
							href="#"
							class="nav-link link-light px-1"
							>Сериалы</a
						>

						<ul
							v-if="isOpenTwo"
							class="dropdown-menu"
						>
							<li>
								<a
									href="#"
									class="dropdown-item"
									>Популярные</a
								>
							</li>
							<li>
								<a
									href="#"
									class="dropdown-item"
									>В эфире сегодня</a
								>
							</li>
							<li>
								<a
									href="#"
									class="dropdown-item"
									>По телевидению</a
								>
							</li>
							<li>
								<a
									href="#"
									class="dropdown-item"
									>Лючшие</a
								>
							</li>
						</ul>
					</li>
					<li
						class="nav-item me-3"
						@mouseover="isOpenThree = true"
						@mouseleave="isOpenThree = false"
					>
						<a
							href="#"
							class="nav-link link-light fw-normal px-1"
							>Люди</a
						>

						<ul
							v-if="isOpenThree"
							class="dropdown-menu"
						>
							<li>
								<a
									href="#"
									class="dropdown-item"
									>Популярные люди</a
								>
							</li>
						</ul>
					</li>
				</ul>
				<ul class="nav align-items-center">
					<li class="nav-item me-4">
						<div
							class="fw-normal"
							content="Профиль и Параметры"
							hover
							arrow
						>
							<router-link
								to="/user"
								href="#"
								class="nav-link p-0"
							>
								<span class="avatar blue">N</span>
							</router-link>
						</div>
					</li>

					<li class="nav-item">
						<a
							href="#"
							class="nav-link px-1"
						>
							<span class="search"></span>
						</a>
					</li>
				</ul>
			</div>
		</nav>
	</header>
</template>

<script setup>
import { ref } from '@vue/reactivity';

// import Popper from 'vue3-popper';

// import { useRouter } from 'vue-router';

// const router = useRouter();

const isOpenOne = ref(false);
const isOpenTwo = ref(false);
const isOpenThree = ref(false);

// const goHome = () => router.push('/');
</script>

<style scoped>
header {
	background-color: #121212;
}
.dropdown-menu {
	display: block;
}

.dropdown-item:active {
	background-color: #0177d2 !important;
}

.svg {
	width: 150px;
	height: 30px;
}
.search {
	background-image: url('../assets/search.svg');
	display: block;
	min-width: 1em;
	min-height: 1em;
	width: 1.5em;
	height: 1.5em;
	background-position: center center;
	background-repeat: no-repeat;
}

.blue {
	background-color: #0177d2;
}

span.avatar {
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
}

.nav-link {
	font-size: 18px;
}
</style>
