<script setup>
import {RouterView} from 'vue-router'
import BaseLayout from './components/layout/BaseLayout.vue'
</script>

<template>
    <body>  
        <BaseLayout>
            <router-view></router-view>
        </BaseLayout>
    </body>
</template>

<style> 
body {
    margin: 0px;
    min-height: 100vh;   
}
</style>
