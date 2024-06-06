<script setup>
import { ref } from "vue";
import { useTaskStore } from '@/stores/task';


defineProps({
  list: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});
</script>

<template>
<h3>{{ name }}</h3>
</template>

<style scoped></style>