<template>
  <v-container grid-list-lg>
    <v-layout row align-center>
      <v-flex
        xs12
        class="text-xs-center display-1 font-weight-black my-5"
        data-aos="fade-up"
      >{{ $route.meta.title }} News</v-flex>
    </v-layout>
    <div id="app">
      <app-search v-on:newsChanged="getNews"></app-search>
      <v-container grid-list-lg data-aos="fade-right">
        <h3>Sort:</h3>
        <v-radio-group v-model="sortCriteria" :mandatory="false" row>
          <!-- "v-model" to bind radio button value to "sortCritieria" to make only 1 radio button selectable  !-->
          <v-radio label="Author" value="author" id="author" color="green"></v-radio>
          <v-radio label="Title" value="title" id="title" color="green"></v-radio>
        </v-radio-group>
      </v-container>
      <!-- For loop to assign each array item with the id 'newsArticle' !-->
      <app-article
        v-for="newsArticle in sortedArticles"
        v-bind:data="newsArticle"
        :key="newsArticle.id"
      ></app-article>
    </div>
  </v-container>
</template>

<script>
import Article from '@/components/Article.vue';
import Search from '@/components/Search.vue';
export default {
    data: function() {
        return {
            articles: [], // Article array to store articles
            searchQ: 'general',
            sortCriteria: ''
        };
    },
    methods: {
        getNews: function(query) {
            // Query passed from "changeNews" method in "Search.vue"
            var that = this; // "this" set to "that" due to scoping issues
            var url =
                'https://newsapi.org/v2/everything?' + // Url to API resources
                'sortBy=popularity&' +
                'q=' +
                query +
                '&' +
                'apiKey=aaffa4aad4294bb0af6a1b3f7248e1b3'; // Unique API key

            var req = new Request(url);
            fetch(req) // Fetches request from NewsAPI
                .then(function(response) {
                    return response.json(); // Returns the response in json format
                })
                .then(function(data) {
                    // Initial promise response is then stored in data object
                    that.articles = data.articles;
                });
            this.searchQ = ''; // Reset searchQ value to empty string to clear search field
            this.sortCriteria = ''; // Reset sortCriteria value to empty string to clear radio buttons
        },
        sortBy: function(arr, sortCrit) {
            // Array being the article and sortCrit Title or Author
            return arr.sort(function(a, b) {
                if (a[sortCrit] > b[sortCrit]) return 1;
                if (a[sortCrit] < b[sortCrit]) return -1;
                return 0; // If article is equal return same value
            });
        }
    },
    computed: {
        sortedArticles: function() {
            if (this.sortCriteria) {
                return this.sortBy(this.articles, this.sortCriteria); // If "sortCriteria" has a value return the sorted articles
            }
            return this.articles; // If the "sortCriteria" does not have value then just return articles
        }
    },
    // Gives access to "Article" & "Search" components
    components: {
        'app-article': Article,
        'app-search': Search
    },
    // When instance is rendered run "getNews"
    mounted: function() {
        this.getNews(this.searchQ);
    }
};
</script>

<style></style>
