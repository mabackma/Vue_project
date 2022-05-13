<script setup>
import { ref } from "vue";

defineProps({
    user: Object
})

const error = ref(false);
</script>
 
<template>
    <template v-if="!error">
        <div>
            {{ user.name }}
            <!--<img @error="error = true" :src="publication.url" /> Tähän käyttäjän kuva-->
            {{ user.email }}
        </div>
    </template>
</template>