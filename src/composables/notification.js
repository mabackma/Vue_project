import {readonly, ref} from 'vue'

const notificationData = ref({})

//muokataan nofificationData
const setNotificationByType = (message, color) => {
    const key = Math.floor(Math.random() * 1E6).toString(16)

    notificationData.value[key] = {
        message,  // shorthand
        color
    } 

    setTimeout(()=>{
        removeNotificationByKey(key)
    }, 5000) 
}

export const setError = (errorMsg) => {
    setNotificationByType(errorMsg, 'red')
}

export const setSuccess = (errorMsg) => {
    setNotificationByType(errorMsg, 'blue')
}

export const removeNotificationByKey = (key)=>{
    delete notificationData.value[key]
}

//haetaan notificationData. Sitä ei voi muokata muualla kuin tässä tiedostossa.
export const getNotifications = readonly(notificationData)