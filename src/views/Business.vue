<template>
  <v-container grid-list-lg>
    <v-layout row>
      <v-flex
        xs12
        class="text-xs-center display-1 font-weight-black my-5"
      >{{ $route.meta.title }} News</v-flex>
    </v-layout>
    <v-layout row wrap v-for="article in articles" :key="article.id">
      <v-flex xs12 class="text-xs-center font-weight-black my-5">
        <v-card>
          <v-responsive>
            <img v-bind:src="article.urlToImage" height="400" class="my-3">
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline">{{ article.title }}</span>
                  <v-spacer></v-spacer>
                </v-flex>
              </v-layout>
            </v-container>
          </v-responsive>
          <v-card-text>{{ article.author }} | {{ article.source.name }}</v-card-text>
          <v-card-text>{{ article.description }}</v-card-text>
          <v-card-actions>
            <v-btn outline block color="green" :href="article.url" target="_blank">Read Full Article</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<!--<script>
import axios from 'axios';
export default {
    data: function() {
        return {
            articles: []
        };
    },
    mounted: function() {
        var that = this;
        var url =
            'https://newsapi.org/v2/top-headlines?' +
            'country=us&' +
            'apiKey=aaffa4aad4294bb0af6a1b3f7248e1b3';
        var req = new Request(url);
        fetch(req)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                console.log(data);
                that.articles = data.articles;
            });
    }
};
</script>

<style scoped>
</style> !-->