<script>
import AppCard from './AppCard.vue';

export default {
    components : {
        AppCard,
    },
    props : {
        charArray : Array,
    }
}
</script>

<template>
    <div class="container">
        <div class="row row-cols-4">
            <!-- Itero in colonne -->
            <div class="col" v-for="char in charArray">
                <AppCard :charObject="char" />
            </div>
        </div>
    </div>
</template>

<style>
</style>