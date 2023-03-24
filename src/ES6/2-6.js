// 函数的参数

// ES6中引入了默认参数，可结合解构赋值使用
function foo(x, y = 'world') {
    // y = y || 'world' ES5
    // const x = 1 // 报错
    console.log(x + y)
}
foo('hello ')
console.log('foo.length = ' + foo.length) // 未定义参数的个数，也就是值为undefined的

// f({x, y = 5}) 解构，两边的结构要一样

let a = 1
function func(y = a) { // 作用域链，使用a时，还没定义a , 就向上一层找a ， 作用域链上没有的就报错
    let a = 2
    console.log(y) // 1
}
func()