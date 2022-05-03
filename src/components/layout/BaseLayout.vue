<script setup>
import NavigationBar from '../navigation/NavigationBar.vue';
import { ref } from 'vue'

const color1 = ref('white')
const color2 = ref('black')

// Dark mode, color1 on taustaväri ja color2 on tekstiväri
const darkMode = () => {

    // Muutetaan dark modeen
    if(color1.value != '#202020')
    {
        color1.value = '#202020'
        color2.value = 'white'
    }
    // Muutetaan light modeen
    else
    {
        color1.value = 'white'
        color2.value = 'black'
    }
}
</script>

<template>
<div class="nav">
    <NavigationBar></NavigationBar>
</div>
<div class="button-text">
    Dark Mode
</div>
<button class="dark-button" @click="darkMode">
    On/Off
</button> 
<div class="container">
    <slot>

    </slot>
</div>
</template>

<style>

h1, h2 {
    margin: 20px;
    text-decoration: underline;
}
.container {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: flex-start;
    min-height: 100vh;
    padding-top: 60px;
    background-color: v-bind('color1');
    color: v-bind('color2');
}

.nav {
    display: flex;
    justify-content: center;
    position: fixed;
    background-color: darkcyan;
    width: 100%;
}

.button-text {
    top: 82px;
    left: 10px;
    position: fixed;
    font-weight: bold;
    color: v-bind('color2');
}

.dark-button{
    border-radius: 8px;
    top: 105px;
    left: 20px;
    position: fixed;
}
</style>