<template>
    <v-container grid-list-lg>
        <v-layout row>
            <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5"
                >{{ $route.meta.title }} News</v-flex
            >
        </v-layout>
        <v-layout row wrap v-for="article in articles" :key="article.id">
            <v-flex xs12 class="text-xs-center font-weight-black my-5">
                <v-card data-aos="fade-up">
                    <v-responsive>
                        <img
                            v-bind:src="article.urlToImage"
                            height="400"
                            class="my-3"
                        />
                        <v-container fill-height fluid>
                            <v-layout fill-height>
                                <v-flex xs12 align-end flexbox>
                                    <span class="headline">
                                        {{ article.title }}
                                    </span>
                                    <v-spacer></v-spacer>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-responsive>
                    <v-card-text>{{ article.content }}</v-card-text>
                    <v-card-actions>
                        <v-dialog width="500" lazy>
                            <template v-slot:activator="{ on }">
                                <v-btn outline block color="green" v-on="on"
                                    >Article Snippet</v-btn
                                >
                            </template>

                            <v-card-title
                                class="headline grey lighten-2"
                                primary-title
                                >Article Snippet</v-card-title
                            >

                            <v-card-text class="grey lighten-2">
                                {{ article.content }}
                            </v-card-text>
                        </v-dialog>
                        <v-btn
                            outline
                            block
                            color="blue"
                            :href="article.url"
                            target="_blank"
                            >Read Full Article</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import axios from 'axios';
export default {
    created() {
        axios
            .get(
                'https://newsapi.org/v2/top-headlines?country=gb&category=Technology&pageSize=20&apiKey=aaffa4aad4294bb0af6a1b3f7248e1b3'
            )
            .then(response => {
                this.articles = response.data.articles;
            });
    },
    data() {
        return {
            active: null,
            category: '',
            articles: []
        };
    },
    methods: {}
};
</script>

<style scoped></style>
