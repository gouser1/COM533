<template>
  <div>
    <input type="text" placeholder="search" v-model="searchQ">
    <button v-on:click="changeNews">Search</button>
  </div>
</template>

<script>
export default {
    data: function() {
        return {
            searchQ: 'design'
        };
    },
    methods: {
        changeNews() {
            this.$emit('newsChanged', this.searchQ);
            this.searchQ = '';
        }
    }
};
</script>

<style scoped>
</style>