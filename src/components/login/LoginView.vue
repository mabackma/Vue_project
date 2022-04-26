<script setup>
import { onClickOutside } from '@vueuse/core';
import { inject, reactive, ref } from 'vue';
import { authService } from '../../services/authService'

// sama avain kun providessa, eli saa arvon showLoginView NavigationBar.vue tiedostosta
const showLoginView = inject('showLogin')  

const credentials = reactive({

    username: "",
    password: ""
})

const target = ref(null)

onClickOutside(target, ()=>{
    showLoginView.value = false
})

const login = async ()=>{
    await authService.useLogin(credentials)
    credentials.username = "",
    credentials.password = ""
}
</script>

<template>
<form ref="target" class="login" @submit.prevent="login">  <!-- estää sivun lataamisen uudelleen kun painaa submittia -->
    <label>Käyttäjänimi</label>
    <input v-model="credentials.username" type="text">

    <label>Salasana</label>
    <input v-model="credentials.password" type="password">  <!-- selain ymmärtää että kyseessä on salasana -->
    <br>
    <button type="submit">Kirjaudu</button>  <!-- submit lähettää kaiken datan formin sisältä -->
</form>
</template>

<style scoped>

.login{
    width: 250px;
    position: fixed;
    left: 50%;
    right: 50%;
    top: 50%;
    display: flex;
    flex-flow: column wrap;
    background-color: lightslategray;
    color: white;
    transform: translateX(-50%) translateY(-50%);
    padding: 20px;
}

input, label{
    margin-top: 6px;
}

</style>