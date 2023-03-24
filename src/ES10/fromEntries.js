const obj = {
    name: 'lining',
    age: 18
}
const entries = Object.entries(obj)
console.log(entries)

// ES10中引入的fromEntries可以讲一个二维数组转为Object对象,map也可以
const fromEntries = Object.fromEntries(entries)
console.log(fromEntries)

const map = new Map()
map.set('name', 'imooc')
map.set('course', 'es')
const mapToObject = Object.fromEntries(map)
console.log(mapToObject) // 转成Object

console.log('例子一：')
const score = {
    math: 88,
    english: 79,
    chinese: 81
}
// 筛选出成绩大于80的，并得到一个新的Object
// 先转成数组，在过滤掉数据
const res = Object.entries(score).filter(([key, value]) => {
    return value > 80
}) // 这时候的数据是二维Array
console.log(Object.fromEntries(res)) // 转成Object

