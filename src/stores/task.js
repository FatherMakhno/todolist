import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
//import { v4 as uuidv4 } from 'uuid'

export const useTaskStore = defineStore('task', () => {
  const lists = ref([])

  const addList = (inputValue) => {
    lists.value.push({
      name: inputValue,
      editing: false,
      task: []
    })
  }

  const deleteList = (index) => {
    lists.value.splice(index, 1)
  }

  const editList = (index) => {
    lists.value[index].editing = true
  }

  const saveList = (index, inputValue) => {
    lists.value[index].editing = false
    lists.value[index].name = inputValue
  }

  return {
    lists: computed(() => lists),

    addList,
    deleteList,
    editList,
    saveList
  }
})
