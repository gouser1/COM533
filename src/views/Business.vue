<template>
  <v-container grid-list-md text-xs-center>
    <div>
      <h2>Listing for Business</h2>
      <v-tabs v-model="active" color="cyan" dark slider-color="yellow">
        <v-tab v-for="article in articles" :key="article.id" ripple>Article</v-tab>
        <v-tab-item v-for="article in articles" :key="article.id">
          <v-card flat>
            <img :src="article.urlToImage" width="150" height="100">
            <p>Author : {{ article.author }}</p>
            <p>Description : {{ article.description }}</p>
            <p>Title : {{ article.title }}</p>
            <p>Url : {{ article.url }}</p>
            <object width="600" heigh="600" :data="article.url"></object>
          </v-card>
        </v-tab-item>
      </v-tabs>

      <div class="text-xs-center mt-3">
        <v-btn @click="next">next Article</v-btn>
      </div>
    </div>
  </v-container>
</template>

<script>
import axios from 'axios';
export default {
    created() {
        axios
            .get(
                'https://newsapi.org/v2/top-headlines?country=gb&category=business&pageSize=20&apiKey=aaffa4aad4294bb0af6a1b3f7248e1b3'
            )
            .then(response => {
                console.log(response);
                this.articles = response.data.articles;
            });
    },
    data() {
        return {
            active: null,
            category: '',
            articles: [],
            text:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        };
    },
    methods: {
        next() {
            const active = parseInt(this.active);
            this.active = active < 7 ? active + 1 : 0;
        }
    }
};
</script>

<style scoped>
</style>