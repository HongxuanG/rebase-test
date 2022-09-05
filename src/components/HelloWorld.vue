<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()
const count = ref(0)
</script>

<template>
  <div>{{ count }}</div>
  <div>test 在这里提交了</div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
