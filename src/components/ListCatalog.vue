<script setup>
import { useTaskStore } from '@/stores/task';

const { deleteList } = useTaskStore()

//import OrderList from 'primevue/orderlist';

defineProps({
  index: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});
</script>

<template>
<div class="list">
  <p class="list_name">{{ name }}</p>
  <PrButton label="Delete" @click="deleteList(index)" />
</div>

</template>

<style lang="scss" scoped>
.list {
  padding: 5px;
  max-width: 300px;
  border: 1px solid black;
  border-radius: 10px;
}
</style>