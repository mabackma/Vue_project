<script setup>
import { RouterLink } from "vue-router"
</script>
 
<template>
    <div class="nav">
        <router-link to="/">Koti</router-link>
        <router-link to="/create">Uusi</router-link>
        <router-link to="/users">Käyttäjät</router-link>
    </div>   
</template>
 
<style scoped>
.nav {
    display: flex;
    justify-content: center;
    background-color: darkcyan;
}

a {
    margin: 20px;
    font-size: 18px;
    font-weight: bolder;
    color: bisque;
}
</style>