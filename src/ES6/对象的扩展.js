console.log('ES6对象扩展')
let name = 'lining'
let age = 18
let sss = 'school'

let obj = {
    name,
    age,
    [sss]: 'imooc', // 用[]表示sss是变量
    f() { // 对象内部的函数，建议用这种写法

    }
}

console.log(obj)

// let obj1 = {
//     name: 'lining'
// }
// let obj2 = {
//     name: 'lining'
// }

// console.log(obj1 == obj2) // 返回false , 堆内存不一样
// Object.is(); // 判断两个值是否严格相等 ===

let x = {
    a: 1,
    b: 2,
    name: 'zhangsan'
}

let y = {
    name: 'lining',
    c: 10
}
Object.assign(y, x) // 合并对象 , 把x 合并到y中, 相同的key会被覆盖，

console.log(y)

console.log('x in a : ' + 'a' in x) // 判断 x 对象中是否含有名为a的key
// console.log(3 in array) // 判断index = 3 的位置是否有数据 true false
console.log('Object.keys()')
console.log(Object.keys(x))
console.log('Object.values()')
console.log(Object.values(x))
console.log('Object.getOwnPropertyNames()')

console.log(Object.getOwnPropertyNames(x)) 
console.log('推荐：Reflect.ownKeys()')
console.log(Reflect.ownKeys(x))