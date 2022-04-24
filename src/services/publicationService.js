import { useApi } from "../composables/api"

export const publicationService = {
    useGetAll(){
        return useApi('/publications').json()
    },
    useGetById(publicationId){
        return useApi(`/publications/${publicationId}`).json()  //haetaan back-endistä, eli osoitteesta
    },                                                          //https://vara.onrender.com/api/publications/:publicationId
    usePost(payload){
        return useApi('./publications').post(payload).json()
    }
}