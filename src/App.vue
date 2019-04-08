<template>
  <v-app>
    <link
      href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons"
      rel="stylesheet"
    >
    <navigation></navigation>
    <app-article v-for="newsArticle in articles" v-bind:data="newsArticle" :key="newsArticle.id"></app-article>

    <v-content transition="slide-x-transition">
      <router-view></router-view>
      <politics></politics>
    </v-content>
  </v-app>
</template>

<script>
import Navigation from '@/components/Navigation';
import Article from '@/components/Article.vue';
import Politics from '@/components/Politics';
import axios from 'axios';
export default {
    name: 'App',
    components: {
        Navigation,
        Politics,
        'app-article': Article
    },
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


<style></style>
