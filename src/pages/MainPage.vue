<script setup>
import { ref, watch } from 'vue'
import Lists from '@/components/ListCatalog.vue'
import { useTaskStore } from '@/stores/task'

const { lists, addList } = useTaskStore()

const inputValue = ref()

watch(lists, (newValue) => {
  lists.value = newValue
})
</script>

<template>
  <InputText type="text" v-model="inputValue" />
  <PrButton label="Добавить лист задач" @click="addList(inputValue)" />
  <Lists
    v-if="lists.length !== 0"
    v-for="(list, index) in lists"
    :key="index"
    :list="list"
    :index="index"
    :name="list.name"
  />
  <div v-else>Списка задач нет, создайте новый!</div>
</template>

<style lang="scss" scoped>
button {
  margin-left: 10px;
}
</style>
