<script setup>
import NavigationBar from '../navigation/NavigationBar.vue';
import { onMounted, onUnmounted, ref } from 'vue'
import NotificationContainer from '../notification/NotificationContainer.vue';

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

const color1 = ref('white')
const color2 = ref('black')
const linkColor = ref('blue')

// Dark mode, color1 on taustaväri ja color2 on tekstiväri
const darkMode = () => {

    // Muutetaan dark modeen
    if(color1.value != '#202020')
    {
        color1.value = '#202020'
        color2.value = 'white'
        linkColor.value = 'limegreen'
    }
    // Muutetaan light modeen
    else
    {
        color1.value = 'white'
        color2.value = 'black'
        linkColor.value = 'blue'
    }
    
}
</script>

<template>
    <div v-if="width>600" class="nav">
        <NavigationBar></NavigationBar>
    </div>
<div class="container">
    
    <slot></slot>
    <NotificationContainer></NotificationContainer>
    <button v-if="width>600" class="dark-button" @click="darkMode">
        Dark<br>Mode
    </button> 
    <button v-else class="dark-button-mobile" @click="darkMode">
        D<br>M
    </button>
    <div v-if="width<=600" class="nav-mobile">
        <NavigationBar></NavigationBar>
    </div>

</div>
</template>

<style>

h1, h2 {
    margin: 20px;
    text-decoration: underline;
    text-align: center;
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

.nav-mobile {
    display: flex;
    justify-content: space-evenly;
    position: fixed;
    background-color: v-bind(color1);
    width: 100%;
    bottom: 0px;
    color: darkcyan;
}

.dark-button{
    border-radius: 8px;
    top: 13%;
    left: 2%;
    position: fixed;
    background-color: v-bind('color2');
    color: v-bind('color1');
}

.dark-button-mobile{
    border-radius: 8px;
    bottom: 2%;
    left: 2%;
    position: fixed;
    background-color: v-bind('color2');
    color: v-bind('color1');
    z-index: 40;
}

a{
    color: v-bind('linkColor');
    text-decoration: none;
}
</style>