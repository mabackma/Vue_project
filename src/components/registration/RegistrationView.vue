<script setup>
import { reactive, computed } from "vue"
import { useRouter } from "vue-router";

const publicationData = reactive({
    name: "",
    password: "",
    email: ""
})

const router = useRouter()

// Palauttaa objektin
const validationObject = computed(() => {

    // Nämä arvot ovat true tai false
    const nameValidation = userData.name.length > 2
    const passwordValidation = userData.password.length < 1000
    const emailValidation = userData.email.includes("@")

    return {
        // Jos true niin "OK", muulloin toinen vaihtoehto
        nameValidation: titleValidation ? "OK" : "Nimen täytyy olla ainakin kolme merkkiä pitkä",
        passwordValidation: descriptionValidation ? "OK" : "Kuvauksen teksti on liian pitkä",
        emailValidation: urlValidation ? "OK" : "Vain https osoitteet ovat sallittu",
        isAllValid: nameValidation && passwordValidation && emailValidation
    }
})
const createNewUser = async () => {

    if(!validationObject.value.isAllValid) return

    //const {data, error} = await publicationService.usePost(userData)

    if(data.value && !error.value){
        userData.name = ""
        userData.password = ""
        userData.email = ""

        router.push('/')
    }
    
}
</script>

<template>
    <h2>Luo uusi käyttäjä</h2>
    <label><b>Käyttäjätunnus</b></label>
    
    <input v-model="userData.name" type="text">
    <br>
    <label><b>Salasana</b></label>

    <input v-model="userData.password" type="text">
    <br>
    <label><b>Sähköposti</b></label>
    
    <input v-model="userData.email" type="text">
    <br>
    <button :disabled="!validationObject.isAllValid" @click="createNewPublication">Lähetä</button>  
</template>

<style scoped>
</style>