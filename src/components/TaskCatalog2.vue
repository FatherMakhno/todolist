<script setup>
import { ref } from 'vue'
import { useTaskStore } from '@/stores/task'
import { VueDraggable } from 'vue-draggable-plus'

const { deleteTask, editTask, saveTask } = useTaskStore()

defineProps({
  index: {
    type: Number,
    required: true
  },
  tasks: {
    type: Object,
    required: true
  }
})

const modelTastks = defineModel('tasks', { type: Object })

const inputValue = ref()
</script>

<template>
  <VueDraggable v-model="modelTastks" animation="250">
    <div v-for="(task, indexTask) in modelTastks" :key="indexTask">
      <div class="list">
        <p v-if="!task.editing" class="list_name">{{ task.name }}</p>
        <InputText v-else v-model="inputValue" @blur="saveTask(index, indexTask, inputValue)" />
        <PrButton v-if="!task.editing" label="Edit" @click="editTask(index, indexTask)" />
        <PrButton v-else label="Save" @click="saveTask(index, indexTask, inputValue)" />
        <PrButton label="Delete" severity="danger" @click="deleteTask(index, indexTask)" />
      </div></div
  ></VueDraggable>
</template>

<style scoped>
input {
  width: 100%;
  margin-bottom: 20px;
}
.list {
  margin: 10px auto 0 auto;
  padding: 5px;
  width: 600px;
  border: 1px solid black;
  border-radius: 10px;
}
button {
  margin-right: 10px;
}
</style>
