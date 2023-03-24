let s = new Set([1, 2, 3])
s.add(4).add(5) // 支持链式操作
// s.delete(2) // clear清空
console.log(s.has(1)) // 判断set中是否包含某个值
console.log(s)

// s.forEach(item => {
//     console.log(item)
// })
// Set是一个可遍历对象 , set中，key 和 value 是一样的
// for (const item of s) {
//     console.log(item)
// }
// for (const item of s.keys()) {
//     console.log(item)
// }
// for (const item of s.values()) {
//     console.log(item)
// }
console.log('set 遍历:')
for (const item of s.entries()) {
    console.log(item)
}

// 数组去重
console.log('数组去重')
let arr = [1, 2, 2, 2, 3, 3, 4, 4, 5, 6, 7, 8, 1, 1, 2, 2]
console.log(new Set(arr))

// 数组合并去重
let arr1 = [1, 2, 3, 4]
let arr2 = [2, 3, 4, 5, 6]
// console.log(new Set([...arr1, ...arr2]))
console.log('数组合并去重：')
console.log([...new Set([...arr1, ...arr2])]) // 将一个set对象展开，可以转成数组

// 将set转为数组还可以使用Array.from(new Set())

// 求两个集合的交集
console.log('交集：')
let result = new Set(arr1.filter(item => new Set(arr2).has(item))) // 判断arr2对应的set集合中有没有item ,通过has方法
console.log([...result]) // 转成数组

// 数组的差集
console.log('数组差集：')
let s1 = new Set(arr1)
let s2 = new Set(arr2)
let arr3 = new Set(arr1.filter(item => !s2.has(item))) // s2中没有的
let arr4 = new Set(arr2.filter(item => !s1.has(item))) // s1中没有的
console.log([...arr3, ...arr4])


// WeakSet , 不是可遍历对象，不能用forEach这种遍历方法
// 同时weakset只能存储对象，弱引用就是为对象而生的
console.log('WeakSet:')
const obj1 = {
    name: 'lining'
}
const obj2 = {
    age: 18
}
const w = new WeakSet()
w.add(obj1).add(obj2)
console.log(w)

// weakset 是一种弱引用 ， 不会被记录到垃圾回收机制中，就不存在垃圾回收的问题
