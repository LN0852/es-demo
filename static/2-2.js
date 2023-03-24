Object.defineProperty(window, 'PI', {
    value: 3.14,
    writable: false
})
console.log(PI) // ES5中定义常量

const a = 5 // ES6

const obj = {
    name: 'lining',
    age: 18,
    skill: {
        name: 'code',
        year: 1
    }
}
Object.freeze(obj) // （浅冻结）冻结对象，冻结后不能改变，但是不会保存，不能深度冻结对象，对象中含有对象的话，内部对象不会被冻结
// Object.freeze(obj.skill)
obj.skill.year = 2 // skill没有被冻结的话，可以改变
obj.company = 'startimes'
console.log(obj) 
// const 定义常量赋初始值后不能改变 ！！！
// 为什么obj可以变？ 要讲到JS中的栈内存和堆内存，对于简单数据类型，值是存在栈内存中的，
// 对于复杂数据类型，栈内存中存储的是这个对象的引用地址