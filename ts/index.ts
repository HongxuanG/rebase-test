const a = 1
const b = 1
const c = 1

const counter = () => {
  let count = 0
  return () => {
    setTimeout(()=>{
      count++
    }, 1000)
    return count
  }
}
let currentCount = counter()
