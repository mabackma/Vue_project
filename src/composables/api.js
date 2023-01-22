import { createFetch } from "@vueuse/core";
import { globalState, isAuth } from "../store";

export const useApi = createFetch({
    //baseUrl: 'https://vara.onrender.com/api',    // Laita tähän oma noSql kurssitehtävän osoite!
    baseUrl: 'https://nosql-flask-picure-app.onrender.com/',
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