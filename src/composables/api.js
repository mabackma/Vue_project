import { createFetch } from "@vueuse/core";

export const useApi = createFetch({
    baseUrl: 'https://vara.onrender.com/api'    // Laita tähän oma noSql kurssitehtävän osoite! 
})