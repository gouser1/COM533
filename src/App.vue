<template>
  <v-app>
    <link
      href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons"
      rel="stylesheet"
    >
    <navigation></navigation>

    <v-content transition="slide-x-transition">
      <router-view></router-view>
      <politics></politics>
    </v-content>
  </v-app>
</template>

<script>
import Navigation from '@/components/Navigation';
import Politics from '@/components/Politics';
import axios from 'axios';
export default {
    name: 'App',
    components: {
        Navigation,
        Politics
    }
};
</script>


<style></style>
