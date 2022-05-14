import { useApi } from "../composables/api"

export const registrationService = {
    useRegister(payload){
        return useApi('/register').post(payload).json()
    }
}