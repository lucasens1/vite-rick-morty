<script>
import { store } from "../store";
export default {
  data() {
    return {
      store,
      archestatus: ["All", "Alive", "Dead", "Unknown"]
    };
  },
};
</script>

<template>
    <div class="p-2"> 
        <!-- Lo status selezionato viene passato allo store tramite v-model -->
        <select 
            @change="$emit('statusFilter')"
            v-model="store.selectedStatus"
            class="p-2 fs-6 border-0 rounded-4">
            <!-- Stampo i possibili Status dei personaggi-->
            <option :value="archestat" v-for="archestat in archestatus">
                {{ archestat }}
            </option>
        </select>
    </div>
</template>