// 迭代器
// for of 是遍历可迭代对象的，那么不可迭代的怎么处理？就引入了iterator

// iterator 内部的构造于generator极度相像
function makeIterator(arr) {
    let nextIndex = 0
    return {
        next() {
            return nextIndex < arr.length ? {
                value: arr[nextIndex++],
                done: false
            } : {
                value: undefined,
                done: true
            }
        }
    }
}
let arr = ['a', 'b', 'c']
let iter = makeIterator(arr)
console.log(iter.next()) // 可以回去看上一章的generator函数，完全一样的
console.log(iter.next())
console.log(iter.next())

let courses = { // for of 不能遍历这个对象的拉
    allCourse: {
        frontend: ['ES', 'Vue', 'React'],
        backend: ['Java', 'Golang', 'Python'],
        webApp: ['Android', 'IOS']
    }
}
console.log(arr)
console.log(courses)
// console.log(makeIterator(courses).next())
// 每一个可迭代对象都有一个Symbol.iterator， 在Prototype下边
// for (const iterator of courses) {
//     console.log(iterator) // 报错
// }
let it = arr[Symbol.iterator]() // 拿出迭代器
console.log(it.next()) // 又回到了generator

// 原生可迭代的数据结构：Array,Map Set String TypedArray 函数的arguments对象 NodeList对象
// 这些数据结构天生具有Symbol.iterator ，天生可迭代 for of 就能遍历

// 可迭代协议： Symbol.iterator
// 迭代器协议： 必须返回一个对象，对象里边必须有next()函数，
//             next()里边也必须返回一个对象, 里面要有value done
//             参考makeIterator()函数
// return {
//     next() {
//         return {
//             value:
//             done:
//         }
//     }
// }
courses[Symbol.iterator] = function () {
    let allCourse = this.allCourse
    let keys = Reflect.ownKeys(allCourse)
    let values = []
    return { // 这里的写法还可以结合 yield 来做， yield构造一个Symbol.iterator
        next() {
            if (!values.length) {
                if (keys.length) {
                    values = allCourse[keys[0]]
                    keys.shift()
                }
            }
            return {
                done: !values.length,
                value: values.shift()
            }
        }
    }
}
for (const iterator of courses) { // 可以遍历出courses的内容了
    console.log(iterator)
}
