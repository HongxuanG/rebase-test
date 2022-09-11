<script setup lang="ts">
import { onMounted, ref } from 'vue'
import VNODE from './index'
defineProps<{ msg: string }>()
const count = ref(0)
const div = ref(null)
onMounted(()=>{
  console.log('div', div.value)

})
</script>

<template>
  <div>{{ count }}</div>
  <div ref="div">test 在这里提交了</div>
  <VNODE></VNODE>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
