import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

export const useTaskStore = defineStore('task', () => {
  const lists = ref([])

  const addList = (inputValue) => {
    lists.value.push({
      id: uuidv4(),
      name: inputValue,
      task: []
    })
  }

  const deleteList = (index) => {
    lists.value.splice(index, 1)
  }

  return {
    lists: computed(() => lists),

    addList,
    deleteList
  }
})
