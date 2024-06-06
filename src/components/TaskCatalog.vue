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
  indexTask: {
    type: Number,
    required: true,
  },
});

const inputValue = ref();
</script>

<template>
<div class="list">
    <p v-if="!task.editing" class="list_name">{{ task.name }}</p>
    <input v-else v-model="inputValue" @blur="saveTask(index, indexTask, inputValue)" />
    <PrButton v-if="!task.editing" label="Edit" @click="editTask(index, indexTask)" />
    <PrButton v-else label="Save" @click="saveTask(index, indexTask, inputValue)" />
    <PrButton label="Delete" @click="deleteTask(index, indexTask)" />
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