<template>
  <v-app>
    <MainMenu />
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>
<script>
import MainMenu from './components/MainMenu.vue'
export default {
  name: 'App',
  components:{MainMenu}
}
</script>
<style>
@import url('./assets/style.css');
</style>
