<script setup>
import { ref, watch } from "vue";
import { useTaskStore } from '@/stores/task';

const { deleteList, editList, saveList } = useTaskStore()

//import OrderList from 'primevue/orderlist';

defineProps({
  list: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const inputValue = ref();


</script>

<template>

<div class="list">
  <p v-if="!list.editing" class="list_name" @click="editList(index)">{{ name }}</p>
  <input v-else v-model="inputValue" @blur="saveList(index, inputValue)" />
  <PrButton v-if="!list.editing" label="Delete" @click="deleteList(index)" />
  <PrButton v-else label="Save" @click="saveList(index, inputValue)" />
</div>


</template>

<style lang="scss" scoped>
.droppable {
  background-color: #eee;
  margin-bottom: 10px;
  padding: 10px;
}
.draggable {
  background-color: #fff;
  margin-bottom: 10px;
  padding: 5px;
}
.list {
  padding: 5px;
  max-width: 300px;
  border: 1px solid black;
  border-radius: 10px;
}
p {
  font-size: 16px;
}
input {
  font-size: 16px;
}
</style>