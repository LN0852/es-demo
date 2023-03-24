// JS 运行的三种环境：
// 服务端node环境: 对象的全局对象是 global
// web端：两个全局对象：window 和 self

// 获取运行环境下的全局对象

// ES11引入了globalThis变量，
console.log(globalThis) // 获取当前环境下的全局对象

window.setTimeout(() => {
    console.log('1');
}, 1000)
self.setTimeout(() => {
    console.log('2');
},1000)