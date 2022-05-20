<script setup>
import { onMounted, onUnmounted, provide, ref } from "vue";
import { RouterLink } from "vue-router"
import { authService } from "../../services/authService";
import { isAuth } from "../../store";
import LoginView from "../login/LoginView.vue";
import {Home, Account, Plus, Login, Logout} from 'mdue'

const showLoginView = ref(false)

provide('showLogin', showLoginView)

const width = ref(0)

const setScreenWidth = ()=>{
    width.value = window.innerWidth
}

onMounted(()=>{
    setScreenWidth()
    window.addEventListener('resize', setScreenWidth)
})

onUnmounted(()=>{
    window.removeEventListener('resize', setScreenWidth)
})

const logout = ()=>{
    authService.useLogout()
}

</script>
 
<template>
    <div v-if="width>600" class="nav">
        <router-link to="/">Koti</router-link>
        <router-link to="/create">Uusi</router-link>
        <router-link v-if="isAuth" to="/users">Käyttäjät</router-link>
        <a href="#" v-if="isAuth" @click.prevent="logout">Ulos</a> 
        <a href="#" v-else @click.prevent="showLoginView = !showLoginView">Kirjaudu</a>
    </div>

    <div v-if="width<=600" class="nav-mobile">
        <router-link to="/"><Home class="icon"></Home></router-link>
        <router-link to="/create"><Plus class="icon"></Plus></router-link>
        <router-link v-if="isAuth" to="/users"><Account class="icon"></Account></router-link>
        <a href="#" v-if="isAuth" @click.prevent="logout"><Logout class="icon"></Logout></a> 
        <a href="#" v-else @click.prevent="showLoginView = !showLoginView"><Login class="icon"></Login></a>
    </div>

    <LoginView v-if="showLoginView && !isAuth"></LoginView>  <!-- tässä kohtaa käytetään showLoginView provide -->
</template>
 
<style scoped>
.icon {
    color: red;
    font-size: 28px;
}

a {
    margin: 15px;
    font-size: 20px;
    font-weight: bolder;
    color: bisque;
}
</style>