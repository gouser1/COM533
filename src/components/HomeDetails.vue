<template>
    <!-- Vuetify cards displayed in grid system !-->
    <v-container
        fluid
        fill-height
        class="home-page"
        style="max-height: 100vh;"
        grid-list-sm
    >
        <v-layout row wrap>
            <v-flex xs4 sm4>
                <v-hover>
                    <v-card
                        to="/popular"
                        slot-scope="{ hover }"
                        :class="`elevation-${hover ? 12 : 2}`"
                        class="mx-auto"
                    >
                        <v-img
                            :src="images.popular"
                            aspect-ratio="2.75"
                            v-ripple
                            data-aos="fade-up"
                            lazy-src
                        ></v-img>
                        <!-- Lazy image loading for performance !-->

                        <v-card-title primary-title>
                            <div>
                                <h3 class="headline mb-0" data-aos="flip-up">
                                    Popular
                                </h3>
                            </div>
                        </v-card-title>
                    </v-card>
                </v-hover>
            </v-flex>

            <v-flex xs4 sm4>
                <v-hover>
                    <v-card
                        to="/business"
                        slot-scope="{ hover }"
                        :class="`elevation-${hover ? 12 : 2}`"
                        class="mx-auto"
                    >
                        <v-img
                            :src="images.politics"
                            aspect-ratio="2.75"
                            v-ripple
                            data-aos="fade-up"
                            lazy-src
                        ></v-img>

                        <v-card-title primary-title>
                            <div>
                                <h3 class="headline mb-0" data-aos="flip-up">
                                    Business
                                </h3>
                            </div>
                        </v-card-title>
                    </v-card>
                </v-hover>
            </v-flex>

            <v-flex xs4 sm4>
                <v-hover>
                    <v-card
                        to="/entertainment"
                        slot-scope="{ hover }"
                        :class="`elevation-${hover ? 12 : 2}`"
                        class="mx-auto"
                    >
                        <v-img
                            :src="images.entertainment"
                            aspect-ratio="2.75"
                            v-ripple
                            data-aos="flip-up"
                            lazy-src
                        ></v-img>

                        <v-card-title primary-title>
                            <div>
                                <h3 class="headline mb-0" data-aos="flip-up">
                                    Entertainment
                                </h3>
                            </div>
                        </v-card-title>
                    </v-card>
                </v-hover>
            </v-flex>
            <v-flex xs4 sm4>
                <v-hover>
                    <v-card
                        to="/technology"
                        slot-scope="{ hover }"
                        :class="`elevation-${hover ? 12 : 2}`"
                        class="mx-auto"
                    >
                        <v-img
                            :src="images.technology"
                            aspect-ratio="2.75"
                            v-ripple
                            data-aos="flip-up"
                            lazy-src
                        ></v-img>

                        <v-card-title primary-title>
                            <div>
                                <h3 class="headline mb-0" data-aos="flip-up">
                                    Technology
                                </h3>
                            </div>
                        </v-card-title>
                    </v-card>
                </v-hover>
            </v-flex>
            <v-flex xs4 sm4>
                <v-hover>
                    <v-card
                        to="/science"
                        slot-scope="{ hover }"
                        :class="`elevation-${hover ? 12 : 2}`"
                        class="mx-auto"
                    >
                        <v-img
                            :src="images.science"
                            aspect-ratio="2.75"
                            v-ripple
                            data-aos="flip-up"
                            lazy-src
                        ></v-img>

                        <v-card-title primary-title>
                            <div>
                                <h3 class="headline mb-0" data-aos="flip-up">
                                    Science
                                </h3>
                            </div>
                        </v-card-title>
                    </v-card>
                </v-hover>
            </v-flex>
            <v-flex xs4 sm4>
                <v-hover>
                    <v-card
                        to="/sport"
                        slot-scope="{ hover }"
                        :class="`elevation-${hover ? 12 : 2}`"
                        class="mx-auto"
                    >
                        <v-img
                            :src="images.sport"
                            aspect-ratio="2.75"
                            v-ripple
                            data-aos="flip-up"
                            lazy-src
                        ></v-img>

                        <v-card-title primary-title>
                            <div>
                                <h3 class="headline mb-0" data-aos="flip-up">
                                    Sport
                                </h3>
                            </div>
                        </v-card-title>
                    </v-card>
                </v-hover>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'HomeDetails',
    data() {
        return {
            //  Returning images from assets
            images: {
                popular: require('../assets/popular.jpg'),
                politics: require('../assets/politics.jpg'),
                entertainment: require('../assets/entertainment.jpg'),
                technology: require('../assets/technology.jpg'),
                science: require('../assets/science.jpg'),
                sport: require('../assets/sport.jpg')
            }
        };
    }
};
</script>

<style scoped></style>
