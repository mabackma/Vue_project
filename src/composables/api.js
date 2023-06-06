import { createFetch } from "@vueuse/core";
import { globalState, isAuth } from "../store";

export const useApi = createFetch({
    // Laita tähän oma noSql kurssitehtävän osoite!!
    baseUrl: 'https://nosql-flask-picure-app.onrender.com/api',
    options: {
        beforeFetch({options}){

            if(isAuth.value){
                options.headers = {
                    Authorization: `Bearer ${globalState.accessToken}`
                }
            }

            return { options }
            
        }
    } 
})