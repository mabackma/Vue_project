import { computed, reactive } from "vue";

// reactive: data pysyy tässä mutta referenssiin pääsee käsiksi muualta
export const globalState = reactive({
    accessToken: null
})

// true silloin kun globalStatella on accessToken
export const isAuth = computed(() =>{
    return globalState.accessToken != null
})