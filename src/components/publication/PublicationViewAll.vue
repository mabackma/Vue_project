<script setup>
// Tuodaan vue:sta ref, eli funktio reaktiivisen datan luomiseksi
// import { ref, reactive } from 'vue';
import PublicationView from './PublicationView.vue';
import { publicationService } from '../../services/publicationService'
import { useRouter } from 'vue-router';


/*
// reaktiivinen lista julkaisudataa
// jos tämä muuttuu, päivitetään sisältö automaattisesti ulkoasuun
const publications = ref([])

const state = reactive({
    error: false
})
 
// Tehdään asynkroninen funktio jotta voidaan 
// käsitellä ei-tosiaikaista dataa
const getAllPublications = async () => {
 
    try {
        // Haetaan selaimen fetch työkalua käyttämällä data kurssiprojektin REST rajapinnasta.
        // Asetetaan vastaus response nimiseen muuttujaan, kun await on saanut vastauksen palvelimelta
        const response = await fetch('https://vara.onrender.com/api/publications')
 
        // muutetaan data JSON -muotoon
        const data = await response.json()
 
        // jos tulee jotain muutakuin 200 OK 
        if (response.status > 300) {
 
            if (response.status == 404) {
                throw new Error("Dataa ei löytynyt.")
            }
 
            throw new Error(data.msg)
        }
 
        // pistetään data talteen reaktiiviseen publications-muuttujaan (päivittää automaattisesti ulkoasun)
        publications.value = data.publications
    } catch (e) {
        //console.log(e)
        state.error = true
    }
 
}
 
// kutsutaan funktiota joka hakee rajapinnasta dataa
getAllPublications()
*/

const { data, error, isFinished} = publicationService.useGetAll()

const router = useRouter()

</script>
 
<template>
    <h1>Postaukset:</h1>
    <div v-if="error">Valitettavasti datan lataaminen ei onnistunut.</div>
    <div v-else-if="!isFinished">Ladataan...</div>
    <template v-else-if="data?.publications">
        <div class="container">
            <div class="item" @click="router.push('/publication/' + publication._id)" 
            v-for="publication, key in data.publications" :key="key">
                {{ key + 1 }}
                <PublicationView :publication="publication"></PublicationView>
            </div>
        </div>
    </template>
</template>
 
<style scoped>
img {
    width: 400px;
}
 
.item {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: darkcyan;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 12px;
    font-weight: bold;
    color: bisque;
}
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}
 
body {
    margin: 30px;
}
</style>