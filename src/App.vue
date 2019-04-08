<template>
  <v-app>
    <link
      href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons"
      rel="stylesheet"
    >

    <navigation></navigation>

    <v-content transition="slide-x-transition">
      <div id="app">
        <app-search v-on:newsChanged="getNews"></app-search>

        <app-article
          v-for="newsArticle in articles"
          v-bind:data="newsArticle"
          :key="newsArticle.id"
        ></app-article>
      </div>
      <router-view></router-view>
      <politics></politics>
    </v-content>
  </v-app>
</template>

<script>
import Navigation from '@/components/Navigation';
import Article from '@/components/Article.vue';
import Search from '@/components/Search.vue';
import Politics from '@/components/Politics';
import axios from 'axios';
export default {
    data: function() {
        return {
            articles: [],
            searchQ: 'politics'
        };
    },
    methods: {
        getNews: function(query) {
            var that = this;
            var url =
                'https://newsapi.org/v2/everything?' +
                //'country=us&' +
                'q=' +
                query +
                '&' +
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
            this.searchQ = ''; //Reset searchQ value to empty string to clear search field
        }
    },
    components: {
        Navigation,
        Politics,
        'app-article': Article,
        'app-search': Search
    },
    mounted: function() {
        this.getNews(this.searchQ);
    }
};
</script>


<style></style>
