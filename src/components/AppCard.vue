<script>
export default {
    props : {
        charObject : Object,
    },
    //Per snellire il codice mi servo di computed
    computed : {
        charImage(){
            //console.log("Immagine presa");
            return this.charObject.image;
        },
        charName(){
            //console.log("Nome preso");
            return this.charObject.name;
        },
        charStatus(){
            //console.log("Status preso");
            return this.charObject.status;
        },
        charSpecies(){
            return this.charObject.species;
        },
    },
};

</script>

<template>
    <div class="card border-0 p-4 rounded-4 h-100">
        <!-- Immagine -->
        <img :src="charImage" class="rounded-circle mb-3" />
        <!-- Nome -->
        <p class="fs-4 text-center"> {{ charName }} </p>
        <!-- Alive or Dead -->
        <span class="fs-5 text-center"> {{ charStatus }} </span>
        <!-- Human or ... -->
        <p class="fs-5 text-center"> {{ charSpecies }} </p>
    </div>
</template>

<style lang="scss" scoped>
.card{
    box-shadow: 0px 10px 25px -6px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
    img{
        max-width : 100%;
    }
}
</style>