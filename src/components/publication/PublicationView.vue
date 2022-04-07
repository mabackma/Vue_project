<script setup>
    defineProps({
        publication: Object
    })
</script>
 
<template>
    <div class="item">
        {{ publication.title }}
        <img :src="publication.url" />
        {{ publication.owner ? publication.owner.username : 'Anonyymi' }}
    </div>
</template>
 
<style scoped>
img {
    width: 400px;
}

.template {
    font-family: "Arial";
    font-size: 14pt;
}
</style>