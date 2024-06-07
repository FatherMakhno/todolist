<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useTaskStore } from '@/stores/task'
import TaskCatalog2 from '@/components/TaskCatalog2.vue'

const route = useRoute()
const index = ref(route.params.index)

const { lists, addTask } = useTaskStore()

const inputValue = ref('')
</script>

<template>
  <h2>{{ lists[index].name }}</h2>
  <InputText type="text" v-model="inputValue" />
  <PrButton label="Добавить лист задач" @click="addTask(index, inputValue)" />
  <!-- <TaskCatalog v-if="lists[index].task.length !== 0" v-for="(task, i) in lists[index].task" :key="i" :index="index" :indexTask="i" :task="task" /> -->
  <TaskCatalog2 v-if="lists[index].task.length !== 0" :index="index" :tasks="lists[index].task" />
  <div v-else>Задач нет, создайте новую!</div>
</template>

<style scoped></style>
