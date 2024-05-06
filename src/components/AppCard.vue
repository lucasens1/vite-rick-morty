<script>
export default {
    props : {
        charObject : Object,
    },
    computed : {
        charImage(){
            console.log("Immagine presa");
            return this.charObject.image;
        },
        charName(){
            console.log("Nome preso");
            return this.charObject.name;
        }
    }
}

</script>

<template>
    <div class="card">
        <!-- Immagine -->
        <img :src="charImage" />
        <!-- Nome -->
        <p class = "fs-6"> {{charName}} </p>
        <!-- Alive or Dead -->
        <!-- Human or ... -->
    </div>
</template>