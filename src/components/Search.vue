<template>
  <v-container fluid data-aos="fade-left">
    <v-layout row>
      <v-flex grow pa-1>
        <v-text-field
          v-model="searchQ"
          label="Search"
          color="green"
          prepend-inner-icon="search"
          outline
        >
          <v-tooltip slot="append" bottom>
            <v-icon slot="activator" color="blue">help</v-icon>
            <span>
              Type into the input field and press the search
              button to display your results
            </span>
          </v-tooltip>
        </v-text-field>
      </v-flex>
      <v-flex shrink pa-1>
        <v-btn v-on:click="changeNews" color="success" large ripple>Search</v-btn>
        <!-- On click calls "changeNews" method !-->
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
    data: function() {
        return {
            searchQ: ''
        };
    },
    methods: {
        changeNews() {
            this.$emit('newsChanged', this.searchQ); // Listens for news changed in parent component and emits custom data package
            this.searchQ = ''; // Empties search field after changeNews is executed
        }
    }
};
</script>

<style scoped></style>
