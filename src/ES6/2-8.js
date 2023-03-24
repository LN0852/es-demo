//  箭头函数
let sum = function(x, y) {
    return x + y
}

// ===
let sum_jiantou = (x, y) => {
    return x + y
}

console.log(sum(1, 2))
console.log(sum_jiantou(3, 4))
// 箭头函数中的this指向定义时的对象，而不是调用时的对象，普通函数this指向调用对象
// 也就是说箭头函数并没有this， 这个this其实是继承了它上一层的this
// 不能作构造函数
let People = (name, age) => {
    // console.log(this) // 指向 {}
    this.name = name
    this.age = age
}

let p = new People('lining', 18)
console.log(p)


// 箭头函数没有arguments参数
let foo = (...agrs) => {
    // error arguments
    console.log(agrs)
}
foo(1,2,3)