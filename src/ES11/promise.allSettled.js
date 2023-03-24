// Promise.all([ // all方法 ，一个失败就返回失败，所有的都成功才返回成功
//     Promise.resolve({
//         code: 200,
//         data: [1, 2, 3]
//     }),
//     Promise.reject({
//         code: 500,
//         data: []
//     }),
//     Promise.resolve({
//         code: 200,
//         data: [7, 8, 9]
//     })
// ]).then(res => {
//     console.log(res)
//     console.log('success')
// }).catch(err => {
//     console.log(err)
//     console.log('fail')
// })

// ES11 
Promise.allSettled([ // allSettled方法,会返回所有的promise,不管成功还是失败
    Promise.resolve({
        code: 200,
        data: [1, 2, 3]
    }),
    Promise.reject({
        code: 500,
        data: []
    }),
    Promise.resolve({
        code: 504,
        data: [7, 8, 9]
    })
]).then(res => {
    console.log(res)
    console.log('success')
    const data = res.filter(item => item.status === 'fulfilled')
    console.log(data)
}).catch(err => {
    console.log(err)
    console.log('fail')
})