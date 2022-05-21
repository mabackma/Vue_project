<script setup>
import { dataUrl } from "../../services/imageService"
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

const isDataUrl = computed(() => {
    return dataUrl.value.startsWith("data:image")
})

// Palauttaa objektin
const validationObject = computed(() => {

    // Nämä arvot ovat true tai false
    const titleValidation = publicationData.title.length > 2
    const descriptionValidation = publicationData.description.length < 1000
    const urlValidation = publicationData.url.startsWith("https://") || isDataUrl.value == true

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

    if(isDataUrl.value == true){
        publicationData.url = dataUrl
    }

    const {data, error} = await publicationService.usePost(publicationData)

    if(data.value && !error.value){
        publicationData.title = ""
        publicationData.description = ""
        publicationData.url = ""
        dataUrl.value = ""

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
    <div v-if="!isDataUrl">
        <input v-model="publicationData.url" type="text">
        <br>
            tai
        <br>
            <router-link to="/modifyImage">lisää kuva tiedostosta</router-link>
        <br>
    </div>
    <div v-else>
        <br>
            Tiedosto lisätty
        <br>
        <button @click="dataUrl = ''">Peruuta</button>
    </div>
    <br>
    <button :disabled="!validationObject.isAllValid" @click="createNewPublication">Lähetä</button>  
</template>

<style scoped>
div{
    display: flex;
    flex-flow: column;
    align-items: center;
}
</style>

 
