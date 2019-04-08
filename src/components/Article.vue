<template>
  <v-container grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center font-weight-black my-5">
        <v-card>
          <v-responsive>
            <img v-bind:src="data.urlToImage" height="400" class="my-3">
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline">{{ data.title }}</span>
                  <v-spacer></v-spacer>
                </v-flex>
              </v-layout>
            </v-container>
          </v-responsive>
          <v-card-text>{{ data.author }} | {{ data.source.name }}</v-card-text>
          <v-card-text>{{ data.description }}</v-card-text>
          <v-card-actions>
            <v-btn outline block color="green" :href="data.url" target="_blank">Read Full Article</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios';
export default {
    props: ['data']
};
</script>

<style scoped>
</style>