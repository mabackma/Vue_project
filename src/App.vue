<script setup>
import {RouterView} from 'vue-router'
import NavigationBar from './components/navigation/NavigationBar.vue';
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
<body>
    <navigation-bar></navigation-bar>
    <h4>Dark Mode 
    <button class="dark-button" @click="darkMode">
        On/Off
    </button> 
    </h4> 
    <router-view></router-view>
</body>
</template>

<style>
h1{
    margin: 30px;
}

h4{
    margin: 10px;
}

.dark-button{
    border-radius: 8px;
    margin: 5px;
}
 
body {
    background-color: v-bind('color1');
    color: v-bind('color2');
    min-height: 100vh;   
}
</style>
