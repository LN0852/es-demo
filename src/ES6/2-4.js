// 数组常见操作方法
// ES5 循环 for forEach map filter some every reduce forin
let arr = [1, 2, 3]

let result = arr.map(element => { // 不会改变原数组
    console.log(element) // map循环如果没有返回值的话，就会返回undefined
})
console.log(result)

let resultFilter = arr.filter(element => { // true表示拿这一项，false不拿，拿出来的项组成一个新数组，返回
    return element == 2 // 当条件满足时返回ture , 表示原数组中的这一项，会copy一份到新数组中，原数组不变
})
console.log(resultFilter)

// some遍历数组，判断是否有符合条件的元素  满足返回 true ，不满足返回false
let some = arr.some(element => {
    return element == 2
})
console.log('some = ' )
console.log(some)

// 和some对应的有every
let every = arr.every(element => { // 所有的元素都满足条件(return true)的话，就返回true, 否则false
    return element == 2
})
console.log('every = ')
console.log(every)

// reduce 累加器
let sum = arr.reduce((pre, current, index, arr) => { // 可以接收四个参数，
    // pre => 上一次调用回调后的返回值，第一次对应初始值，没有初始值就是数组的第一项，current => 当前处理元素的值，index => 当前处理元素的下标 ， arr当前数组
    return pre + current
}, 0) // 接收一个函数和一个初始值，初始值可以没有
console.log('reduce = ' + sum)


// ES6循环
// find => 返回第一个通过测试的元素，返回一个满足的元素, 不改变原数组
let find = arr.find(element => {
    return element == 2 // 把原数组中满足条件的项返回， 没有满足的返回undefiend
})
console.log('find = ' + find)

// findIndex 返回第一个满足条件的项的下标， 不改变原数组
let findIndex = arr.findIndex(element => {
    return element == 2 // 返回下标，1
})
console.log('findIndex = ' + findIndex)

// for of 对应的有keys() => 拿到可以 ，values() => 拿到value ， entries() => 把key和value组成一个item 返回 [key, value] ,数组中的key === index
// ES10中引入Array.flat() , 数组拍平神器