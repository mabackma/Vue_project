<script setup>
import PublicationView from './PublicationView.vue';
import { publicationService } from '../../services/publicationService'
import { RouterLink } from 'vue-router';

const { data, error, isFinished} = publicationService.useGetAll()

</script>
 
<template>
    <h1>Postaukset</h1>
    <div v-if="error">Valitettavasti datan lataaminen ei onnistunut.</div>
    <div v-else-if="!isFinished">Ladataan...</div>
    <template v-else-if="data?.publications">

        <template v-for="publication in data.publications">
            <router-link :to="`/publication/${publication._id}`">
                <PublicationView :publication="publication"></PublicationView>
            </router-link>
        </template>

    </template>
</template>

