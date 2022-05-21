<script setup>
import { isAuth } from '../../store';

</script>
 
<template>
        <!--<div v-if="error">Tapahtui virhe</div>
        <div v-else-if="!isFinished">Ladataan...</div>
        <div v-else-if="globalState.accessToken">-->
        <div v-if="isAuth">   
            <div>
                Tähän tulee sisäänkirjautuneen käyttäjän tiedot
            <!--{{ data.value.account.username }}-->
            <!--<img @error="error = true" :src="publication.url" /> Tähän käyttäjän kuva -->
            <!--{{ data.value.account.email }} --> 
            
            </div>
        </div>
        <div v-else>
            Et ole kirjautunut sisään
        </div>
</template>