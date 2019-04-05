<template>
  <span>
    <v-navigation-drawer app color="#0D1514" v-model="drawer" disable-resize-watcher>
      <v-list>
        <template v-for="(item, index) in items">
          <v-list-tile :key="index">
            <v-list-tile-content>{{item.title}}</v-list-tile-content>
          </v-list-tile>
          <v-divider :key="`divider-${index}`"></v-divider>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app color="#0D1514" dark>
      <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <router-link to="/">
        <v-toolbar-title to="/">{{appTitle}}</v-toolbar-title>
      </router-link>
      <v-btn flat class="hidden-sm-and-down" to="/business">Business</v-btn>
      <v-btn flat class="hidden-sm-and-down" to="/entertainment">Entertainment</v-btn>
      <v-btn flat class="hidden-sm-and-down" to="/technology">Technology</v-btn>
      <v-btn flat class="hidden-sm-and-down" to="/science">Science</v-btn>
      <v-btn flat class="hidden-sm-and-down" to="/sport">Sport</v-btn>
    </v-toolbar>
  </span>
</template>

<script>
export default {
    name: 'Navigation',
    data() {
        return {
            appTitle: 'Jordanstown Echo',
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
a {
    color: white;
    text-decoration: none;
}
a:hover {
    color: #405365;
}
</style>
