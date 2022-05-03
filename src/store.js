import { computed, reactive } from "vue";
import { useStorage } from "@vueuse/core"

// Käytetään tätä jotta kirjautuminen säilyy kun päivitetään sivu
const accessToken = useStorage('accessToken', null)

// reactive: data pysyy tässä mutta referenssiin pääsee käsiksi muualta. State voimassa kaikkialla.
export const globalState = reactive({
    accessToken   // Tämä on shorthand jolla tarkoitetaan accessToken: accessToken  
})

// true silloin kun globalState saa accessTokenin
export const isAuth = computed(() =>{
    return globalState.accessToken != null
})