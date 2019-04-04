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

export default {
    name: 'home',
    components: {
        HomePage,
        HomeDetails
    }
};
</script>
