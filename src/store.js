import { reactive } from "vue";

export const store = reactive({
  characterList: [],
  selectedStatus : "All",
  selectedForm : "All"
});