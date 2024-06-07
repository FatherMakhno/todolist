<script setup>
import { ref } from "vue";
import { useTaskStore } from '@/stores/task';
import { VueDraggable } from 'vue-draggable-plus'

const { deleteTask, editTask, saveTask } = useTaskStore()


defineProps({
  lists: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true
  }
});

const inputValue = ref();
</script>

<template>
    <VueDraggable v-model="lists.task" animation="250">
<div v-for="(task, indexTask) in lists.task" :key="indexTask">
<div class="list">
    <p v-if="!task.editing" class="list_name">{{ task.name }}</p>
    <input v-else v-model="inputValue" @blur="saveTask(index, indexTask, inputValue)" />
    <PrButton v-if="!task.editing" label="Edit" @click="editTask(index, indexTask)" />
    <PrButton v-else label="Save" @click="saveTask(index, indexTask, inputValue)" />
    <PrButton label="Delete" @click="deleteTask(index, indexTask)" />
</div>
</div></VueDraggable>
</template>

<style scoped>
.list {
margin-top: 10px;
  padding: 5px;
  max-width: 300px;
  border: 1px solid black;
  border-radius: 10px;
}
</style>