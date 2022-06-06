<script setup>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
</script>

<template>
	<TheHeader />
	<main class="main py-0 py-md-3 px-1 px-xl-0">
		<router-view></router-view>
	</main>
	<TheFooter />
</template>

<style>
#app {
	font-family: 'Source Sans Pro';
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;

	display: flex;
	flex-direction: column;
	min-height: 100vh;
	/* justify-content: space-between; */

	background-color: rgb(245, 245, 245);
}
.main {
	flex: 1 0 auto;
}

.fw-600 {
	font-weight: 600;
}
.color-555 {
	color: #555555;
}

.btn:focus {
	box-shadow: none !important;
}

@font-face {
	font-family: 'Source Sans Pro';
	src: url('./assets/font/SourceSansPro-Regular.ttf');
	font-weight: 400;
}
@font-face {
	font-family: 'Source Sans Pro';
	src: url('./assets/font/SourceSansPro-SemiBold.ttf');
	font-weight: 600;
}

@font-face {
	font-family: 'Source Sans Pro';
	src: url('./assets/font/SourceSansPro-ExtraLight.ttf');
	font-weight: 200;
}
@font-face {
	font-family: 'Source Sans Pro';
	src: url('./assets/font/SourceSansPro-Bold.ttf');
	font-weight: 700;
}
</style>
