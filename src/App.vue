<script>
  //Axios
  import axios from "axios";
  //Components
  import AppHeader from './components/AppHeader.vue';
  import AppMain from './components/AppMain.vue';
  import AppSearch from './components/AppSearch.vue';
  import AppCounter from './components/AppCounter.vue';
  //Store
  import { store } from "./store";

  export default {
    //Includo i componenti importati
    components: {
      AppHeader,
      AppSearch,
      AppMain,
      AppCounter
    },
    data(){
      return {
        //Uso store, per l'array
        store,
      };
    },
    created(){
      //Uso la funzione per inizializzare la pagina
      this.getStatus();
    },
    methods : {
      /*
      * Description : funzione che cambia il contenuto della pagina dinamicamente filtrandolo per lo status selezionato dall'utente
      */     
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
    <div class="d-flex flex-row mb-2 justify-content-around">
      <!-- Counter -->
      <AppCounter />
      <!-- SearchBar @statusFilter permette la scrematura per Status -->
      <AppSearch @statusFilter="getStatus"/>
    </div>
    <!-- Main -->
    <!-- Passo l'array dallo Store al Main -->
    <AppMain :charArray="store.characterList" /> 
  </div>

</template>

<style lang="scss" scoped>
@import './style/generals.scss';
</style>