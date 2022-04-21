import { useApi } from "../composables/api"

export const publicationService = {
    useGetAll(){
        return useApi('/publications').json()
    },
    useGetById(){
        return useApi('/publications/' + publicationId).json()
    },
    usePost(payload){
        return useApi('./publications').post(payload).json()
    }
}