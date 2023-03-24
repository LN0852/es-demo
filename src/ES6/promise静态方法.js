// promise(1).js 中都是Primose的实例方法，这里讲静态方法
// 静态方法有四个(常用)
// 1、Promise.resolve()
// 2、Promise.reject()
// 3、Promise.all()
// 4、Promise.race()

let p1 = Promise.resolve('success')
console.log(p1)
p1.then(res => {
    console.log(res)
})

let p2 = Promise.reject('fail')
console.log(p2)
p2.catch(err => {
    console.log(err)
})
// 静态方法的使用
console.log('静态方法')
function foo(flag) {
    if (flag) {
        return Promise.resolve('success') // 一个resolve状态的Promise
    } else {
        return Promise.reject('fail')
    }
}
foo(false).then(res => {
    console.log(res)
}).catch(error => {
    console.log(error)
})

let one = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(1)
        resolve(1)
    }, 1000);
})
let two = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(2)
        reject(2)
    }, 2000);
})
let three = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(3)
        resolve(3)
    }, 3000);
})
Promise.all([one, two, three]).then(res => {
    console.log(res) // 返回一个数组，有一个失败就返回失败的信息
}).catch(err => {
    console.log(err)
})
// Promise.race()



// 应用场景一：上传图片
// let imgArray = ['1.png', '2.png', '3.png']
// let promiseArray = []

// imgArray.forEach(img => {
//     promiseArray.push(new Promise((resolve, reject) => {
//         // 上传图片
//         resolve()
//     }))
// })
// Promise.all(promiseArray).then(res => {
//     console.log('全部图片上传完成')
// })


// 场景二： 图片加载超时
function getImg() { // 获取图片函数
    return new Promise((resolve, reject) => {
        let img = new Image()
        img.onload = function () {
            resolve(img) // 请求成功
        }
        img.src = 'https://www.imooc.com/static/img/index/logo.png'

    })
}
function timeout() {
    return new Promise((resolve, rejeet) => {
        setTimeout(() => {
            rejeet('图片请求超时')
        }, 2000) // 2000超时
    })
}

Promise.race([getImg(), timeout()]).then(res => {
    // 图片请求成功
    console.log(res)
}).catch(err => {
    console.log(err)
})