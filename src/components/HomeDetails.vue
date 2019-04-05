<template>
  <v-container fluid fill-height class="home-page" style="max-height: 100vh;" grid-list-sm>
    <v-layout row wrap>
      <v-flex xs4 sm4>
        <v-hover>
          <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" class="mx-auto">
            <v-img :src="images.politics" aspect-ratio="2.75" v-ripple data-aos="fade-up"></v-img>

            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0" data-aos="flip-up">Politics</h3>
              </div>
            </v-card-title>
          </v-card>
        </v-hover>
      </v-flex>

      <v-flex xs4 sm4>
        <v-hover>
          <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" class="mx-auto">
            <v-img :src="images.entertainment" aspect-ratio="2.75" v-ripple data-aos="flip-up"></v-img>

            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0" data-aos="flip-up">Entertainment</h3>
              </div>
            </v-card-title>
          </v-card>
        </v-hover>
      </v-flex>
      <v-flex xs4 sm4>
        <v-hover>
          <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" class="mx-auto">
            <v-img :src="images.technology" aspect-ratio="2.75" v-ripple data-aos="flip-up"></v-img>

            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0" data-aos="flip-up">Technology</h3>
              </div>
            </v-card-title>
          </v-card>
        </v-hover>
      </v-flex>
      <v-flex xs6 sm6>
        <v-hover>
          <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" class="mx-auto">
            <v-img :src="images.science" aspect-ratio="2.75" v-ripple data-aos="flip-up"></v-img>

            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0" data-aos="flip-up">Science</h3>
              </div>
            </v-card-title>
          </v-card>
        </v-hover>
      </v-flex>
      <v-flex xs6 sm6>
        <v-hover>
          <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" class="mx-auto">
            <v-img :src="images.sport" aspect-ratio="2.75" v-ripple data-aos="flip-up"></v-img>

            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0" data-aos="flip-up">Sport</h3>
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
            images: {
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

<style scoped>
</style>