<template>
  <div class="main">新增一个counter</div>
  <div class="main">新增一个counter</div>
  <div class="main">新增一个counter</div>
  <div class="main">新增一个counter</div>
  <div class="main">新增一个counter</div>
  <div class="main">新增一个counter</div>
  <div class="main">新增一个counter</div>
  <p>现在我在main分支上提交代码（没有拉取test分支）</p>
  <div>临时提交1</div>
  <div>临时提交2</div>
  <div>我提交了</div>
  <div>我也提交了</div>

  <div>临时提交3</div>
  <div>临时提交4</div>
  <div>临时提交5</div>
  <div>临时提交6</div>

  <div>临时提交7</div>

  <p>main超前计划</p>
</template>

<script setup lang="ts">
// 角色
enum Role {
  CEO = 1, // 00000000001
  TEACHER = 1 << 1, // 00000000010
  STUDENT = 1 << 2,
  PROFESSOR = 1 << 3,
  COP = 1 << 4,
  MATHER = 1 << 5, // 00000100000
  FATHER = 1 << 6, // 00001000000
}
const getRole = (type: any): number => {
  // @ts-ignore
  return Role[type]
}
const person1 = {
  name: 'xiaoli',
  gender: 0,
  role: getRole('MATHER') | getRole('TEACHER'), // 00001000010
}
const whoIsHe = (person: Record<string, any>) => {
  console.log((person.role & Role.CEO) != 0)
  let role = ''
  if ((person.role & Role.MATHER) !== 0) {
    role += 'mather '
  }
  if ((person.role & Role.TEACHER) !== 0) {
    role += 'teacher '
  }
  if ((person.role & Role.CEO) !== 0) {
    role += 'ceo '
  }
  if ((person.role & Role.STUDENT) !== 0) {
    role += 'student '
  }
  if ((person.role & Role.PROFESSOR) !== 0) {
    role += 'professor '
  }
  if ((person.role & Role.COP) !== 0) {
    role += 'cop '
  }
  if ((person.role & Role.FATHER) !== 0) {
    role += 'father '
  }
  console.log(person.name, 'is a ', role) // 输出 xiaoli is a  mather teacher
}

whoIsHe(person1)
</script>

<style lang="scss" scoped>
.main {
  color: red;
}
</style>
