<script>
  import axios from "axios";
  import AppHeader from './components/AppHeader.vue';
  import AppMain from './components/AppMain.vue';

  export default {
    components: {
      AppHeader,
      AppMain
    },
    data(){
      return {
        //Creo un Array che ospiterà le informazioni sui pg di Rick&Morty
        charactersArray : [],
      };
    },
    created(){
      //All'avvio della pagina prendo i dati dal server
      axios.get('https://rickandmortyapi.com/api/character')
      .then((resp) => {
        console.log(resp);
        console.log(resp.data.results);
        this.charactersArray = resp.data.results;
        console.log(this.charactersArray);
      })
    }
  }
</script>

<template>

  <div class="container-fluid">
    <!-- Header -->
    <AppHeader />
    <!-- Main -->
    <AppMain :charArray="charactersArray" /> 
  </div>

</template>

<style lang="scss" scoped>
@import './style/generals.scss';
</style>