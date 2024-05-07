<script>
  import axios from "axios";
  import AppHeader from './components/AppHeader.vue';
  import AppMain from './components/AppMain.vue';
  import AppSearch from './components/AppSearch.vue';
  import { store } from "./store";

  export default {
    components: {
      AppHeader,
      AppSearch,
      AppMain
    },
    data(){
      return {
        //Creo un Array che ospiterà le informazioni sui pg di Rick&Morty
        charactersArray : [],
        store,
      };
    },
    created(){
      this.getStatus();
    },
    methods : {
      getStatus(){
        console.log("Get Status richiamato correttamente");
        //Creo un oggetto con status null che prende il valore del selected status quando è diverso da All
        const paramsObject = {
          status : null,
        }
        //Se ho selectedStatus diverso da All (situazione iniziale) assegno lo status alla variabile dentro l'oggetto creato
        if(this.store.selectedStatus !== 'All'){
          paramsObject.status = this.store.selectedStatus;
        }
        //Chiamata API
        axios.get('https://rickandmortyapi.com/api/character',
                 {params : paramsObject} ).then((resp) => {
                                                            console.log("Assegnando valori all'Array . . . ")
                                                            this.store.characterList = resp.data.results;
                                                            console.log("Array dello store, aggiornato : ", this.store.characterList);
                                                          });
      },
    },
  };
</script>

<template>

  <div class="container-fluid">
    <!-- Header -->
    <AppHeader />
    <!-- SearchBar @statusFilter permette la scrematura per Status -->
    <AppSearch @statusFilter="getStatus"/>
    <!-- Main -->
    <!-- Passo l'array dallo Store al Main -->
    <AppMain :charArray="store.characterList" /> 
  </div>

</template>

<style lang="scss" scoped>
@import './style/generals.scss';
</style>