<script setup>
import { provide, ref } from "vue";
import { RouterLink } from "vue-router"
import { authService } from "../../services/authService";
import { isAuth } from "../../store";
import LoginView from "../login/LoginView.vue";

const showLoginView = ref(false)

provide('showLogin', showLoginView)

const logout = async()=>{
    await authService.useLogout()
}
</script>
 
<template>
    <div class="nav">
        <router-link to="/">Koti</router-link>
        <router-link to="/create">Uusi</router-link>
        <router-link to="/users">Käyttäjät</router-link>
        <a href="#" v-if="isAuth" @click.prevent="logout">Ulos</a>  <!-- .valueta ei tarvitse Vuessa -->
        <a href="#" v-else @click.prevent="showLoginView = !showLoginView">Kirjaudu</a>
    </div>
    <LoginView v-if="showLoginView && !isAuth"></LoginView>  <!-- tässä kohtaa käytetään providea-->
</template>
 
<style scoped>
a {
    margin: 15px;
    font-size: 20px;
    font-weight: bolder;
    color: bisque;
}
</style>