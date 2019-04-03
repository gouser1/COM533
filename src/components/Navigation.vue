<template>
  <span>
    <v-navigation-drawer app v-model="drawer" class="blue darken-2" dark disable-resize-watcher>
      <v-list>
        <template v-for="(item, index) in items">
          <v-list-tile :key="index">
            <v-list-tile-content>{{item.title}}</v-list-tile-content>
          </v-list-tile>
          <v-divider :key="`divider-${index}`"></v-divider>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app color="blue darken-2" dark>
      <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <v-toolbar-title>JORDANSTOWN ECHO</v-toolbar-title>
      <v-btn flat class="hidden-sm-and-down">Home</v-btn>
      <v-btn flat class="hidden-sm-and-down">Politics</v-btn>
      <v-btn flat class="hidden-sm-and-down">Entertainment</v-btn>
      <v-btn flat class="hidden-sm-and-down">Technology</v-btn>
      <v-btn flat class="hidden-sm-and-down">Science</v-btn>
      <v-btn flat class="hidden-sm-and-down">Sport</v-btn>
    </v-toolbar>
  </span>
</template>

<script>
export default {
    name: 'Navigation',
    data() {
        return {
            drawer: false,
            items: [
                { title: 'Home' },
                { title: 'Politics' },
                { title: 'Entertainment' },
                { title: 'Technology' },
                { title: 'Science' },
                { title: 'Sport' }
            ]
        };
    }
};
</script>

<style scoped>
</style>
