<template>
  <v-container grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center font-weight-black">
        <v-card data-aos="fade-up">
          <v-responsive>
            <!-- "v-bind:src parses "data.urlToImage" as an object !-->
            <img v-bind:src="data.urlToImage" height="400" class="my-3" lazy-src>
          </v-responsive>
          <v-card-text class="title">{{ data.title }}</v-card-text>
          <v-spacer></v-spacer>
          <v-card-text>{{ data.author }} | {{ data.source.name }}</v-card-text>
          <v-card-text>{{ data.description }}</v-card-text>
          <v-card-actions>
            <v-dialog width="500" lazy>
              <template v-slot:activator="{ on }">
                <v-btn outline block color="green" v-on="on">Article Snippet</v-btn>
              </template>
              <v-card-title class="headline grey lighten-2" primary-title>Article Snippet</v-card-title>
              <v-card-text class="grey lighten-2">{{ data.content }}</v-card-text>
            </v-dialog>
            <v-btn outline block color="blue" :href="data.url" target="_blank">Read Full Article</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
    // Passes data bind from "Popular.vue" to "Article.vue" as a prop
    props: ['data']
};
</script>

<style scoped></style>
