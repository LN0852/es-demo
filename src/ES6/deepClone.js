let target = {
    obj: {
        cc: 33,
        dd: 44
    }
}
let source = {
    a: 1,
    b: 2,
    obj: {
        aa: 11,
        bb: 22
    }
}
// 浅拷贝
Object.assign(target, source) // assign方法克隆的话，复杂对象中的字段会消失，复制的时候，指向新地址，并没有真正的复制
source.a = 10
console.log(target) // target中的obj被source中的obj覆盖了

// 利用JSON进行深克隆，有坑，例如：undefiend, null ,symol, function数据会有问题
let obj1 = {
    name: 'lining',
    age: 18
}
let str = JSON.stringify(obj1)
let obj2 = JSON.parse(str)
obj1.age = 88
console.log(obj2)



// deepClone function

// let checkType = data => {
//     return Object.prototype.toString.call(data).slice(8,-1)
// }

// const deepClone = (data) => {
//     let dataType = checkType(data)
//     let result
//     if (dataType === 'Object') {
//         result = {}
//     } else if (dataType === 'Array') {
//         result = []
//     } else {
//         return data
//     }
//     for (let i in data) {
//         let value = data[i]
//         let valueType = checkType(value)
//         if (valueType === 'Object' || valueType === 'Array') {
//             result[i] = deepClone(value)
//         } else {
//             result[i] = value
//         }
//     }
//     return result
// }

const checkType = data => {
    return Object.prototype.toString.call(data).slice(8,-1)
}
const deepClone = data => {
    let result
    let dataType = checkType(data)
    if (dataType === 'Object') {
        result = {}
    } else if (dataType === 'Array') {
        result = []
    } else {
        return data
    }
    for (let i in data) {
        let value = data[i]
        let valueType = checkType(value)
        if (valueType === 'Object' || valueType === 'Array') {
            result[i] = deepClone(data[i])
        } else {
            result[i] = data[i]
        }
    }
    return result
}

// let arr1 = [1, 2, { name: 'lining' }]
// let arr2 = deepClone(arr1)
// arr2[2].name = 'lisi'
// console.log(arr1)
// console.log(arr2)

const deepObj = {
    name: 'lining',
    hobby: ['a','b','c']
}
const deepObj2 = deepClone(deepObj)
deepObj.hobby[0] = 'lisi'
console.log(deepObj)
console.log(deepObj2)