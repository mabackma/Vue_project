<script setup>
const message = "Tämä on ensimmäinen päivitys!"
const loggedIn = false
</script>

<template>
    <h1>PublicationViewAll OK!</h1>
    <p>{{ message }}</p>
    <h1 v-if="loggedIn">LoggedIn on TRUE!</h1>
    <h1 v-else>LoggedIn on false :(</h1>
</template>

<style>
    body {
        margin: 30px;
    }
</style>