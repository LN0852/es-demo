// const arr1 = [1, 2, 3, 4, [5, 6]]
// const arr2 = [...arr1]
// console.log(arr1[4] === arr2[4]) // true 扩展运算符是浅克隆

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const arr3 = [...arr1, ...arr2]
console.log(arr3);

const obj = {
    name: 'lining',
    age: 18,
    test: {
        a: 1,
        b: 2
    }
}
const obj2 = {
    school: 'imooc'
}
const obj3 = {
    ...obj // 浅克隆
}
obj.test.a = 99
console.log(obj3)

// 合并Object
console.log({ ...obj, ...obj2 }) // 专门的对象合并函数：Object.assign(x,y) y 合并到 x 
console.log(Object.assign(obj, obj2))

const objRest = {
    name: 'lining',
    age: 18,
    school: 'startimes',
    course: 'es'
}
const { name, age, ...rest } = objRest
// ...rest表示剩余运算，除了name age被具名解构出来外，未被具名解构的school course 会被封装到rest中,放在最后
