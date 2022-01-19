<script lang="ts" setup>
  import { toRefs } from 'vue'
  import { Task, TaskState } from '../types/Task'

  const props = defineProps<{
    task: Task
  }>()

  const { task } = toRefs(props)
  if (task.value.id === 3) {
    task.value.complete()
  }
</script>
<template>
  <div
    :id="`task-${task.id}`"
    class="shadow overflow-hidden sm:rounded-lg mt-2 mx-5"
    :class="{
      'bg-green-100': task.state === TaskState.Done,
      'bg-red-100': task.state === TaskState.Todo,
      'bg-yellow-100': task.state === TaskState.InProgress,
    }"
  >
    <h2 class="text-2xl">{{ task.title }}</h2>
    <p>{{ task.description }} {{ task.state }}</p>
    <input type="checkbox" :checked="task.state === TaskState.Done" />
  </div>
</template>
<style></style>
