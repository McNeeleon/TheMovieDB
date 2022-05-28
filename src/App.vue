<script setup>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
</script>

<template>
  <TheHeader />

  <main class="container-xl">
    <router-view></router-view>
  </main>

  <TheFooter />
</template>

<style>
#app {
  font-family: 'Source Sans Pro';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */

  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
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
