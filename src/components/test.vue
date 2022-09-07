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
  CEO = 1,
  TEACHER = 1 << 1,
  STUDENT = 1 << 2,
  PROFESSOR = 1 << 3,
  COP = 1 << 4,
  MATHER = 1 << 5,
  FATHER = 1 << 6,
}
const getRole = (type: any): number => {
  // @ts-ignore
  return Role[type]
}

const someone = getRole('MATHER')
console.log(someone)

const person1 = {
  name: 'xiaoli',
  gender: 0,
  role: getRole('MATHER') | getRole('TEACHER'),
}

const whoIsHe = (person: Record<string, any>) => {
  let role = ''
  switch (true) {
    case (person.role & Role.MATHER) != 0:
      role += 'mather '
    case (person.role & Role.TEACHER) != 0:
      role += 'teacher '
    case (person.role & Role.CEO) != 0:
      role += 'ceo '
    case (person.role & Role.STUDENT) != 0:
      role += 'student '
    case (person.role & Role.PROFESSOR) != 0:
      role += 'professor '
    case (person.role & Role.COP) != 0:
      role += 'cop '
    case (person.role & Role.FATHER) != 0:
      role += 'father '

    default:
      break
  }
  console.log(person.name, 'is a ', role)
}
whoIsHe(person1)
</script>

<style lang="scss" scoped>
.main {
  color: red;
}
</style>
