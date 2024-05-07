<script>
import { store } from "../store";
export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
    <div class="p-2"> 
        <!-- Counter mostri on-page -->
        <h4 class="text-uppercase fw-bold">Monsters founded : {{ store.characterList.length }} </h4>
    </div>
</template>