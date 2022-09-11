<template>
  <div class="main">这是test分支的counter</div>
  <div class="main">这是test分支的counter</div>
  <div class="main">这是test分支的counter</div>
  <p>现在我在test分支上提交代码commit</p>

  <div>在test分支上临时提交代码1tt</div>
  <div>在test分支上临时提交代码2</div>
  <div>在test分支上临时提交代码3</div>

  <div>在test分支上临时提交代码4</div>
  <div>在test分支上临时提交代码5</div>

  <div>main超级计划</div>
</template>

<script setup>
// 使用普通的对象
const Role = {
  CEO: 1, // 00000000001
  TEACHER: 1 << 1,
  STUDENT = 1 << 2,
  PROFESSOR = 1 << 3,
  COP = 1 << 4,
  MATHER = 1 << 5, // 00000100000
  FATHER = 1 << 6, // 00001000000
}
</script>

<style lang="scss" scoped>
.main {
  color: red;
}
</style>
