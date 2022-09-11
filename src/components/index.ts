import { defineComponent, h } from "vue"

export default defineComponent(() => {
  const vnode = h('div', {}, 'ssss')
  console.log('vnode==>', vnode)
  return vnode
})
