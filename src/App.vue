<script setup>
import {RouterView} from 'vue-router'
import { ref } from 'vue'
import BaseLayout from './components/layout/BaseLayout.vue'
import NotificationContainer from './components/notification/NotificationContainer.vue';

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
        <BaseLayout>
            <router-view></router-view>
        </BaseLayout>
    </body>
</template>

<!--Alla olevat tyylit ovat käytössä kaikissa tiedostoissa-->
<style> 
body {
    margin: 0px;
    min-height: 100vh;   
}
</style>
