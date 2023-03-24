let m = new Map()
m.set('name', 'lining')
console.log(m.get('name')) // 获取value
// m.delete('name')
console.log(m.has('name'))

// 当map传入一个二维数组时
console.log('二维数组')
let map = new Map([
    ['name', 'zhangsan'], // 第一个作为key ,第二个最为value
    ['age', 18]
])
console.log(map)
console.log(map.has('name'))
console.log(map.get('age'))
map.set('name', 'lisi') // 会产生覆盖
console.log(map)

// 遍历，map是可迭代对象 forEach
console.log('遍历')
map.forEach((value, key) => console.log(value, key))
for (const [key, value] of map) { // forEach 和 forof的key value 对应位置不一样
    console.log(key, value)
}

for (const key of map.keys()) { // 还有map.values() map.entries()
    console.log(key)
}

// weakMap key 只支持引用数据类型, 跟weakSet同理，弱引用, 不支持遍历
console.log('weakMap:')
let wm = new WeakMap()

wm.set({ name: 'wangwu' }, 'startimes')
console.log(wm)