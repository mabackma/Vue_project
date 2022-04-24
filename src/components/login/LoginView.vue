<script setup>
import { onClickOutside } from '@vueuse/core';
import { inject, reactive, ref } from 'vue';

const showLoginView = inject('showLogin')

const credentials = reactive({
    username: "",
    password: ""
})

const target = ref(null)

onClickOutside(target, ()=>{
    showLoginView.value = false
})

</script>

<template>
<form class="login" ref="target">
    <label>Käyttäjänimi</label>
    <input v-model="credentials.username" type="text">

    <label>Salasana</label>
    <input v-model="credentials.password" type="password">
    <br>
    <button type="submit">Kirjaudu</button>
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