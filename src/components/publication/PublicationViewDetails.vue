<script setup>

import { publicationService } from '../../services/publicationService';
import PublicationView from './PublicationView.vue';

const props = defineProps({
    publicationId: String
})

const {data, error, isFinished} = publicationService.useGetById(props.publicationId) 

</script>

<template>
    <div v-if="data.publication.description.length > 0">
        <h2>Kuvaus:</h2>
        <p>{{data.publication.description}}</p>
    </div>
    <div v-if="error">Tapahtui virhe!</div>
    <div v-else-if="!isFinished">Ladataan...</div>
    <div v-else-if="data">
        <PublicationView :publication="data.publication"></PublicationView>
    </div>
</template>

