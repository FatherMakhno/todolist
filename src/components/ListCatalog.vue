<script setup>
import { ref } from "vue";
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
  <router-link v-if="!list.editing" :to="{ name: 'List', params: { index: index } }">
    <p  class="list_name">{{ name }}</p>
  </router-link>
  <input v-else v-model="inputValue" @blur="saveList(index, inputValue)" />
  <PrButton v-if="!list.editing" label="Edit" @click="editList(index)" />
  <PrButton v-else label="Save" @click="saveList(index, inputValue)" />
  <PrButton label="Delete" @click="deleteList(index)" />
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