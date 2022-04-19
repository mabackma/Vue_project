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

    const titleValidation = publicationData.title.length > 2
    const descriptionValidation = publicationData.description.length < 1000
    const urlValidation = publicationData.url.includes("https://")

    return {
        titleValidation: titleValidation ? "OK" : "Otsikon tätytyy olla ainakin kolme merkkiä pitkä",
        descriptionValidation: descriptionValidation ? "OK" : "Kuvauksen teksti on liian pitkä",
        urlValidation: urlValidation ? "OK" : "Vain https osoitteet ovat sallittu",
        isAllValid: titleValidation && descriptionValidation && urlValidation
    }
})

const createNewPublication = () => {

    if(!isDataValid.value.isAllValid) return

    publicationData.title = ""
    publicationData.description = ""
    publicationData.url = ""
}
</script>
 
<template>
    <div class="create-post">
        <br>
        <label>Otsikko</label>
        <small>{{ isDataValid.titleValidation }}</small>
        <input v-model="publicationData.title" type="text">
        <br>
        <label>Kuvaus</label>
        <small>{{ isDataValid.descriptionValidation }}</small>
        <input v-model="publicationData.description" type="text">
        <br>
        <label>URL</label>
        <small>{{ isDataValid.urlValidation }}</small>
        <input v-model="publicationData.url" type="text">
        <br>
        <button :disabled="!isDataValid.isAllValid" @click="createNewPublication">Lähetä</button>
    </div>
</template>
 
<style scoped>
.create-post{
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>