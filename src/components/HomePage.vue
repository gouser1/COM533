<template>
  <v-container fluid fill-height class="home-page" style="max-height:100vh;">
    <v-layout justify-center align-center column pa-5>
      <div class="display-4 font-weight-black white--text text-md-center">JORDANSTOWN ECHO</div>
      <div
        class="display-1 font-weight-bold white--text text-md-center"
      >Bringing you the latest news from across the world</div>

      <v-icon large color="white">arrow_downward</v-icon>
    </v-layout>
  </v-container>
</template>

<script>
export default {
    name: 'HomePage'
};
</script>

<style scoped>
.home-page {
    background: url('../assets/cover.jpg');
    background-size: cover;
    width: 100%;
    height: 100%;
}
</style>