<script setup>
import { reactive, computed, provide, ref, watch } from "vue"
import { useRouter } from "vue-router";
import { registrationService } from "../../services/registrationService";
import { setSuccess, setError } from "../../composables/notification";
import LoginView from "../login/LoginView.vue";
import { isAuth } from "../../store";

const showLoginView = ref(false)

provide('showLogin', showLoginView)

const userData = reactive({
    username: "",
    password: "",
    email: ""
})

const rewrite = reactive({
    password: ""
})

const router = useRouter()

// Käyttäjänimi ei saa sisältää erikoismerkkejä. 
// Tätä käytetään sen tarkistukseen.
const regex = /^[A-Za-z0-9]+$/

// Palauttaa objektin
const validationObject = computed(() => {

    // Nämä arvot ovat true tai false
    const nameValidation = userData.username.length > 2 && regex.test(userData.username)
    const emailValidation = userData.email.includes('@') && userData.email.includes('.')
    const passwordValidation = userData.password.length >= 8
    const passwordConfirmed = userData.password === rewrite.password

    return {
        // Jos true niin "OK", muulloin toinen vaihtoehto
        nameValidation: nameValidation ? "OK" : "Käyttäjänimi on liian lyhyt tai sisältää erikoismerkkejä.",
        emailValidation: emailValidation ? "OK" : "Vain e-mail osoitteet ovat sallittu",
        passwordValidation: passwordValidation ? "OK" : "Salasanan täytyy olla vähintään kahdeksan merkkiä pitkä.",
        passwordConfirmed: passwordConfirmed ? "OK" : "Salasana kirjoitettu väärin",
        isAllValid: nameValidation && emailValidation && passwordValidation && passwordConfirmed
    }
})

const isRegistrationSuccessful = ref(false)

const register = async () => {

    if(!validationObject.value.isAllValid) return

    const {data, error, statusCode} = await registrationService.useRegister(userData)

    if(data.value && !error.value && statusCode.value === 200){       
        isRegistrationSuccessful.value = true

        // Näyttää ilmoituksen onnistuneesta rekisteröinnistä
        setSuccess("Rekisteröityminen onnistui! Nyt voit kirjautua sisään")
        showLoginView.value = true
    }
    else{
        console.log("Data: ", data.value, "Error: ", error.value, "Statuscode: ", statusCode.value)
        if (data.value.msg[0].username == "Field value must be unique.")
            setError("Käyttäjä on jo olemassa")
        else
            setError("Virhe on tapahtunut!")
    }
    
}

watch(isAuth, ()=>{
    // jos isAuth on true niin siirrytään päänäkymään
    if(isAuth.value){
        router.push('/')
    }
})
</script>

<template>
    <div v-if="isRegistrationSuccessful">
        <LoginView  v-if="showLoginView && !isAuth"></LoginView>
    </div>
    <form v-else @submit.prevent="register">
        <h2>Luo uusi käyttäjä</h2>
        <label><b>Käyttäjätunnus</b></label>
        <small>{{ validationObject.nameValidation }}</small>
        <input v-model="userData.username" type="text">
        <br>
        <label><b>Sähköposti</b></label>
        <small>{{ validationObject.emailValidation }}</small>
        <input v-model="userData.email" type="email">
        <br>
        <label><b>Salasana</b></label>
        <small>{{ validationObject.passwordValidation }}</small>
        <input v-model="userData.password" type="password">
        <br>
        <label><b>Kirjoita salasana uudelleen</b></label>
        <small>{{ validationObject.passwordConfirmed }}</small>
        <input v-model="rewrite.password" type="password">
        <br>
        <button type="submit" :disabled="!validationObject.isAllValid">Rekisteröidy</button> 
    </form> 
</template>

<style scoped>
form{
    display: flex;
    flex-direction: column;
    width: 300px;
}
</style>