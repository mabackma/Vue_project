<script setup>
import { provide, ref } from "vue";
import { RouterLink } from "vue-router"
import LoginView from "../login/LoginView.vue";

const showLoginView = ref(false)

provide('showLogin', showLoginView)
</script>
 
<template>
    <div class="nav">
        <router-link to="/">Koti</router-link>
        <router-link to="/create">Uusi</router-link>
        <router-link to="/users">Käyttäjät</router-link>
        <a href="#" @click.prevent="showLoginView = !showLoginView">Kirjaudu</a>
    </div>
    <LoginView v-if="showLoginView"></LoginView>   
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