<script setup>
import { reactive, computed } from "vue"
import { useRouter } from "vue-router";

const userData = reactive({
    name: "",
    password: "",
    email: ""
})

const rewrite = reactive({
    password: ""
})

const router = useRouter()

const passwordCheck = () => {
    
    let hasNumber = false
    let hasUpper = false
    let hasSpecial = false
    let isLongEnough = false
    let rewriteMatch = false

    // Tarkastetaan numerot
    if (userData.password.match(/[0-9]/)) {
        hasNumber = true
    } 
    // Tarkastetaan isot kirjaimet
    if (userData.password.match(/[A-Z]/)) {
        hasUpper = true
    } 
    // Tarkastetaan erikoismerkit
    if (userData.password.match(/[!@#$%^&*(),.?":{}|<>]/)) {
        hasSpecial = true
    } 
    // Tarkastetaan salasanan pituus
    if (userData.password.length >= 8){
        isLongEnough = true
    }
    // Tarkastetaan salasanan uudelleenkirjoitus
    if (userData.password == rewrite.password){
        rewriteMatch = true
    }

    if (hasNumber && hasUpper && hasSpecial && isLongEnough && rewriteMatch){
        return true
    }

    return false
}


// Palauttaa objektin
const validationObject = computed(() => {

    // Nämä arvot ovat true tai false
    const nameValidation = userData.name.length > 2
    const passwordValidation = passwordCheck()
    const emailValidation = userData.email.includes('@')

    return {
        // Jos true niin "OK", muulloin toinen vaihtoehto
        nameValidation: nameValidation ? "OK" : "Nimen täytyy olla ainakin kolme merkkiä pitkä",
        passwordValidation: passwordValidation ? "OK" : "Salasanassa täytyy olla vähintään yksi iso kirjain, numero ja erikoismerkki. Salasanan täytyy olla vähintään kahdeksan merkkiä pitkä.",
        emailValidation: emailValidation ? "OK" : "Vain e-mail osoitteet ovat sallittu",
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
    <small>{{ validationObject.nameValidation }}</small>
    <input v-model="userData.name" type="text">
    <br>
    <label><b>Salasana</b></label>
    <small>{{ validationObject.passwordValidation }}</small>
    <input v-model="userData.password" type="password">
    <br>
    <label><b>Kirjoita salasana uudelleen</b></label>
    <input v-model="rewrite.password" type="password">
    <br>
    <label><b>Sähköposti</b></label>
    <small>{{ validationObject.emailValidation }}</small>
    <input v-model="userData.email" type="text">
    <br>
    <button :disabled="!validationObject.isAllValid" @click="createNewUser">Lähetä</button>  
</template>

<style scoped>
</style>