<script setup>
import { reactive, computed } from "vue"

const publicationData = reactive({
    title: "",
    description: "",
    url: "",
    visibility: 2,
    tags: []
})

const isDataValid = computed(() => {
    return !!(publicationData.title && publicationData.description && publicationData.url)
})

const createNewPublication = () => {
    publicationData.title = ""
    publicationData.description = ""
    publicationData.url = ""
}
</script>
 
<template>
    <div class="create-post">
        <br>
        <label>Otsikko</label>
        <input v-model="publicationData.title" type="text">
        <br>
        <label>Kuvaus</label>
        <input v-model="publicationData.description" type="text">
        <br>
        <label>URL</label>
        <input v-model="publicationData.url" type="text">
        <br>
        <button :disabled="!isDataValid" @click="createNewPublication">Lähetä</button>
    </div>
</template>
 
<style scoped>
.create-post{
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>