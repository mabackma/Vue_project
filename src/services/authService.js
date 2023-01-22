import { useApi } from "../composables/api"
import { globalState } from "../store"
import { setSuccess, setError } from '../composables/notification'


export const authService = {
    async useLogin(payload){   // Tässä payloadina on credentials joka lähetetään back-endin osoitteeseen
                               // https://nosql-flask-picure-app.onrender.com/api/login

        // back-end tarkastus
        const {data, error} = await useApi('/login').post(payload).json()

        // jos kaikki ok, niin globalState saa tokenin back-endiltä
        if(!error.value && data.value){
            setSuccess("Tervetuloa " +  data.value.account.username)
            globalState.accessToken = data.value.access_token
        }
        else{
            setError("Tarkista käyttäjätiedot")
        }
    },

    useLogout(){

        useApi('/logout').post().onFetchFinally(()=>{
            globalState.accessToken = null
            setSuccess("Sinut on kirjattu ulos")
        })

    }
}