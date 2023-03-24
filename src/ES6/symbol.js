let s1 = Symbol('a') // a 是这个symbol的描述
let s2 = Symbol('b') // b是这个symbol的描述
console.log(s1 === s2) // symbol是独一无二的

// let s1 = Symbol()

const obj = {
    name: 'lining'
}
// symbol定义时传入的参数本质就是对这个symbol的一个描述
let s = Symbol(obj) // symbol中的参数如果是对象的话，内部会自动调用toString方法转为string
console.log(s) 
console.log('symbol 的描述: ' + s.description)


let p1 = Symbol.for('for')
let p2 = Symbol.for('for')
// 通过for方法声明的symbol,会在声明时全局搜索是否使用for声明过相同描述的symbol
// 如果有，则将后者的地址指向前者,for方法定义在全局环境中
console.log(p1 === p2) // true

let test = Symbol()
let test1 = Symbol.for()
console.log(test === test1) // false 第一个不是for方法声明的symbol

// symbol还有一个keyfor方法


// 使用场景，例如在定义object时，有重名的key，需要使用symbol解决
const stu1 = Symbol('lining')
const stu2 = Symbol('lining')
// 这是两个不同的student , 相同的key在object中会产生覆盖，只保留最后一个，使用symbol就能很好的解决重复key的问题
const student = {
    [stu1]: 'My name is stu1',
    [stu2]: 'My name is stu2' // 把symbol变量作为对象的key,保证key不重复
}
console.log(student)
console.log(student[stu1]) // 把symbol变量传入，可以拿到student中指定的value
console.log(student[stu2])
console.log(Object.keys(student)) // 拿不到symbol数据类型的key 
console.log(Reflect.ownKeys(student)) // 能拿到
// 对象中如果存在symbol类型的key , 使用object.keys()是拿不到的，要用reflect.ownkeys()

// 场景二,跟枚举有关

const meiju = {
    name: Symbol(),
    grade: Symbol()
}

function getmeiju(data) {
    let result
    switch (data) {
        case meiju.name:
            result = 'name'
            break
        case meiju.grade:
            result = 'grade'
    }
    return result
}
console.log(getmeiju(meiju.name)) // 使用symbol写法，我可以根本不关心name对象的value