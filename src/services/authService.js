import { useApi } from "../composables/api"
import { globalState } from "../store"


export const authService = {
    async useLogin(payload){   // Tässä payloadina on credentials joka lähetetään back-endin osoitteeseen
                               // https://vara.onrender.com/api/login

        // back-end tarkastus
        const {data, error} = await useApi('/login').post(payload).json()

        // jos kaikki ok, niin globalState saa tokenin back-endiltä
        if(!error.value && data.value){
            globalState.accessToken = data.value.access_token
        }
    },

    async useLogout(){
        await useApi('/logout').post()
        globalState.accessToken = null
    }
}