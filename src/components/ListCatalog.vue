<script setup>
import { ref } from 'vue'
import { useTaskStore } from '@/stores/task'

const { deleteList, editList, saveList } = useTaskStore()

//import OrderList from 'primevue/orderlist';

defineProps({
  list: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})

const inputValue = ref()
</script>

<template>
  <div class="list">
    <router-link v-if="!list.editing" :to="{ name: 'List', params: { index: index } }">
      <p class="list_name">{{ name }}</p>
    </router-link>
    <InputText v-else v-model="inputValue" @blur="saveList(index, inputValue)" />
    <PrButton v-if="!list.editing" label="Edit" @click="editList(index)" />
    <PrButton v-else label="Save" @click="saveList(index, inputValue)" />
    <PrButton label="Delete" severity="danger" @click="deleteList(index)" />
  </div>
</template>

<style lang="scss" scoped>
input {
  width: 100%;
  margin-bottom: 20px;
}
.list {
  margin: 10px;
  padding: 5px;
  width: 600px;
  border: 1px solid black;
  border-radius: 10px;
}
button {
  margin-right: 10px;
}
</style>
