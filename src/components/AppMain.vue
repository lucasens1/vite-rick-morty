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
        <div class="row row-cols-lg-4 row-cols-md-2 g-5">
            <!-- Itero in colonne -->
            <div class="col pb-4" v-for="char in charArray">
                <!-- Passo l'oggetto perché all'interno andrò a scrivere proprietà prese dalle chiavi -->
                <AppCard :charObject="char" />
            </div>
        </div>
    </div>
</template>

<style>
</style>