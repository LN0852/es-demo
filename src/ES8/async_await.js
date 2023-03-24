async function foo() {
    return 'lining'
    // 相当于 return Promise.resolve('lining')
}
console.log(foo()) // 返回fulilled 的promise对象
// let res = new Promise((resolve, reject) => {
//     console.log(1)
//     resolve(2)
// })
// res.then(res => {
//     console.log(res)
// })
// console.log(4)

// generator的语法糖