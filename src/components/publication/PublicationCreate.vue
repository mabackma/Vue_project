<script setup>
import { reactive, computed } from "vue"
import { publicationService } from "../../services/publicationService"
import { useRouter } from "vue-router";

// Kenttiä voi muuttaa tekstikentissä
const publicationData = reactive({
    title: "",
    description: "",
    url: "",
    visibility: 2,   // Julkinen postaus
    tags: []
})

const router = useRouter()

// Palauttaa objektin
const validationObject = computed(() => {

    // Nämä arvot ovat true tai false
    const titleValidation = publicationData.title.length > 2
    const descriptionValidation = publicationData.description.length < 1000
    const urlValidation = publicationData.url.startsWith("https://")

    return {
        // Jos true niin "OK", muulloin toinen vaihtoehto
        titleValidation: titleValidation ? "OK" : "Otsikon täytyy olla ainakin kolme merkkiä pitkä",
        descriptionValidation: descriptionValidation ? "OK" : "Kuvauksen teksti on liian pitkä",
        urlValidation: urlValidation ? "OK" : "Vain https osoitteet ovat sallittu",
        isAllValid: titleValidation && descriptionValidation && urlValidation
    }
})

const createNewPublication = async () => {

    if(!validationObject.value.isAllValid) return

    const {data, error} = await publicationService.usePost(publicationData)

    if(data.value && !error.value){
        publicationData.title = ""
        publicationData.description = ""
        publicationData.url = ""

        router.push('/')
    }
    
}
</script>
 
<template>
    <h2>Lisää uusi</h2>
    <label><b>Otsikko</b></label>
    <small>{{ validationObject.titleValidation }}</small>
    <input v-model="publicationData.title" type="text">
    <br>
    <label><b>Kuvaus</b></label>
    <small>{{ validationObject.descriptionValidation }}</small>
    <input v-model="publicationData.description" type="text">
    <br>
    <label><b>URL</b></label>
    <small>{{ validationObject.urlValidation }}</small>
    <input v-model="publicationData.url" type="text">
    <br>
    <button :disabled="!validationObject.isAllValid" @click="createNewPublication">Lähetä</button>  
</template>
 
