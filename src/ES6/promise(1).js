// Promise 精髓是： 状态管理
let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('imooc')
        // resolve('success')
        reject('fail')
    }, 0)
}).then(
    (res) => {
        // success
        console.log(res)
    },
    (err) => { // 可省略, 一般不写第二个参数，都是用catch来接fail状态结果
        // fail
        console.log(err)
    }
)

 
// console.log(1)
// let pro = new Promise((resolve, reject) => {
//     console.log(2)
//     setTimeout(() => {
//         console.log(3)
//     },0)
//     resolve(4)
// }).then(res => {
//     console.log(res)
// })
// setTimeout(() => {
//     console.log(5)
// }, 0)
// console.log(6)

let test = new Promise((resolve, reject) => {
    // resolve(1)
    reject(2)
})
test.then(res => {
    console.log(res)
    // throw new Error('xx')
    return 2
}).then(res => {
    console.log(res)
    // throw new Error('xx')
    return res
}).catch(err => {// 上边不管有多少个then, 有失败的就会走catch, 如果想单独处理某一个reject，可以写在then的第二个参数
    console.log('err' + err)
})

