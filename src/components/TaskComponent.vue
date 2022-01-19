<script lang="ts" setup>
  import { toRefs } from 'vue'
  import { Task } from '../types/Task'

  const props = defineProps<{
    task: Task
  }>()

  const { task } = toRefs(props)
</script>
<template>
  <div id="task-{{ task.id }}">
    <h2>{{ task.title }}</h2>
    <p>{{ task.description }}</p>
  </div>
</template>
<style></style>
