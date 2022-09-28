import { defineComponent, h } from "vue"

export default defineComponent(() => {
  const vnode = h('div', {}, 'ssss')
  console.log('vnode==>', vnode)

  const a = 11
  console.log(a)
  
  return vnode
})
