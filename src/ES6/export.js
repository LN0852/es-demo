// export const a = 5 // 导出一个模块, 模块的name 就是 a 
// export const b = 'statimes'
// export const sum = (a, b) => {
//     return a+b
// }

// // 导出对象与上边有所不同
// const obj = {
//     name: 'lining',
//     age: 18
// }
// export { obj } // 导出对象要用 {} 包起来

// 批量导出
const a = 5
const b = 'lining'
const sum = (a, b) => a + b
const obj = {
    name: 'lining'
}

class People {
    constructor(name) {
        this.name = name
    }
    showName() {
        console.log(this.name)
    }
}
export { // 批量导出 ，常用
    a,
    b,
    sum,
    obj,
    People
}

// export default a // 默认导出
// 导入时没有使用解构，就会拿到默认导出的结果, import aa from './xxx'
// 默认导出只能有一个

// 多种导出方式并存的话
// import aaaa, { a, b, sum } from './xxx'

// export default { // import params from './xxx'引入时，就params.a, params.b
//     a,
//     b,
//     c
// }