<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useTaskStore } from "@/stores/task";
import TaskCatalog from "@/components/TaskCatalog.vue";

const route = useRoute();
const index = ref(route.params.index)

const { lists } = useTaskStore()
</script>

<template>
<h2>{{ lists[index].name }}</h2>
<InputText type="text" v-model="inputValue" />
<PrButton label="Добавить лист задач" @click="" />
<TaskCatalog v-if="lists[index].task.length !== 0" v-for="(task, i) in lists[index].task" :key="i" :index="i" :task="task" />
<div v-else>Задач нет, создайте новую!</div>
</template>

<style scoped></style>