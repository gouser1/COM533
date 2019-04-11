<template>
    <span>
        <home-page></home-page>
        <home-details></home-details>
    </span>
</template>

<script>
//Imported components from '/components' to be displayed
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
