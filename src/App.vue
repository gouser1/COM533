<template>
  <v-app>
    <link
      href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons"
      rel="stylesheet"
    >
    <navigation></navigation>
    <!-- Loads navigation component -->

    <v-content transition="slide-x-transition">
      <router-view></router-view>
      <Footer></Footer>
      <!-- Loads Footer component -->
    </v-content>
  </v-app>
</template>

<script>
//Imported components from '/components' to be displayed
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
export default {
    components: {
        Navigation,
        Footer
    }
};
</script>

<style></style>
