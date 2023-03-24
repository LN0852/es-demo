// 可选链这种东西可以在代码中大量使用：有利于阅读维护，语法简单
// 但是也有一定的弊端，特别是在对包体积要求较高的地方
// 尤大在Vue3源码中没有使用可选链其中之一编译后包的体积较大
// 但是在一般的开发过程中，不在乎那几个字节的大小，可选链真正给编程带来的
// 可维护性阅读性远大于那几个字节

const user = {
    address: {
        stree: 'xxx街道',
        getNum() {
            return '88号'
        }
    }
}


// ES11可选链
const street = user?.address?.stree // 判断是否存在，在获取，不存返回undefined
console.log(user?.address?.getNum?.() + street)

// ES5写法
const es5Street = user && user.address && user.address.stree
console.log(es5Street)