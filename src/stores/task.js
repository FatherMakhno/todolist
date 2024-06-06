import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
//import { v4 as uuidv4 } from 'uuid'

export const useTaskStore = defineStore('task', () => {
  const savedLists = JSON.parse(localStorage.getItem('lists'))
  const lists = ref(savedLists || [])

  watch(() => {
    localStorage.setItem('lists', JSON.stringify(lists.value))
  })

  const addList = (inputValue) => {
    lists.value.push({
      name: inputValue,
      editing: false,
      task: []
    })
  }

  const addTask = (index, inputValue) => {
    lists.value[index].task.push({
      name: inputValue,
      editing: false
    })
  }

  const deleteList = (index) => {
    lists.value.splice(index, 1)
  }

  const deleteTask = (index, indexTask) => {
    lists.value[index].task.splice(indexTask, 1)
  }

  const editList = (index) => {
    lists.value[index].editing = true
  }

  const editTask = (index, indexTask) => {
    lists.value[index].task[indexTask].editing = true
  }

  const saveList = (index, inputValue) => {
    lists.value[index].editing = false
    lists.value[index].name = inputValue
  }

  const saveTask = (index, indexTask, inputValue) => {
    lists.value[index].task[indexTask].editing = false
    lists.value[index].task[indexTask].name = inputValue
  }

  return {
    lists: computed(() => lists),

    addList,
    deleteList,
    editList,
    saveList,
    addTask,
    deleteTask,
    editTask,
    saveTask
  }
})
