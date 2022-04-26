<script setup>
import { ref } from "vue";

defineProps({
    publication: Object
})

const error = ref(false);
</script>
 
<template>
    <template v-if="!error">
        <div class="item">
            {{ publication.title }}
            <img @error="error = true" :src="publication.url" />
            {{ publication.owner ? publication.owner.username : 'Anonyymi' }}
        </div>
    </template>
</template>
 
<style scoped>
img {
    width: 400px;
}

.item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    background: darkcyan;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 12px;
    font-weight: bold;
    color: bisque;
}
</style>