<template>
  <span>
    <home-page></home-page>
    <home-details></home-details>
    <politics></politics>
  </span>
</template>

<script>
import HomePage from '@/components/HomePage';
import HomeDetails from '@/components/HomeDetails';
import Politics from '@/components/Politics';

export default {
    name: 'home',
    components: {
        HomePage,
        HomeDetails,
        Politics
    }
};
</script>
