 // Vue监测的底层

function defineReactive(data, key, value) {
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get() {
      // 此处收集依赖
      console.log('getter', value)
      return value
    },
    set(val) {
      if(val === value) {
        return
      }
      // 此处通知依赖
      console.log('setter', val)
      value = val
    }
  })
}

const a = {}
defineReactive(a, 'name', 'tom')
const b = a.name
a.name = 'jack'
console.dir(a)
