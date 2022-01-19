<script setup lang="ts">
  import { ref } from 'vue'
  import { Task } from './types/Task'
  import TaskComponent from './components/TaskComponent.vue'
  const tasks = ref([] as Task[])
  const possible_titles = ['Haha', 'Hihi', 'Dano', 'Fero', 'Lipsum pipsum']
  for (let i = 0; i < 10; i++) {
    const rand = Math.floor(Math.random() * possible_titles.length)
    tasks.value.push(
      new Task(
        i,
        possible_titles[rand],
        'lipsum rete lipsum rete lipsum rete lipsum rete lipsum rete lipsum rete lipsum'
      )
    )
  }
</script>

<template>
  <div>
    <h1>Moje tasky</h1>
    <div v-for="task of tasks">
      <TaskComponent :key="task.id" :task="task" />
    </div>
  </div>
</template>

<style></style>
