// 扩展运算符
// ... 把数组和类数组用逗号隔开，展开
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
console.log([...arr1, ...arr2])
console.log(...'imooc') // 字符串也可以


// rest参数
// ES5剩余参数写法，arguments
function foo(x, y, z) {
    let sum = 0
    Array.from(arguments).forEach(item => {
        sum += item
    })
    return sum
}

console.log(foo(1,2))
console.log(foo(1, 2, 3))

console.log('ES6写法')

// ES6
function foo1(...args) { // ES6中剩余参数写法, 剩余运算符
    let sum = 0
    args.forEach(item => {
        sum += item
    })
    return sum
}
console.log(foo1(1,2))
console.log(foo1(1,2,3))
// function func(x, ...args)
let [a, ...b] = [1, 2, 3, 4] // b是一个数组
console.log(a,b)