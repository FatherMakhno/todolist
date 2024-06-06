<script setup>
import { ref } from "vue";
import { useTaskStore } from '@/stores/task';

const { deleteTask, editTask, saveTask } = useTaskStore()


defineProps({
  task: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});
</script>

<template>
<div class="list">
    <p v-if="!task.editing" class="list_name">{{ task.name }}</p>


    <input v-else v-model="inputValue" @blur="saveTask(index, inputValue)" />
    <PrButton v-if="!task.editing" label="Edit" @click="editTask(index)" />
    <PrButton v-else label="Save" @click="saveTask(index, inputValue)" />
    <PrButton label="Delete" @click="deleteTask(index)" />
</div>
</template>

<style scoped>
.list {
  padding: 5px;
  max-width: 300px;
  border: 1px solid black;
  border-radius: 10px;
}
</style>