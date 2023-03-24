// generator 函数有一个特点 ，可以在指定的地方暂停，又在指定的地方重启
function* foo() { // function * foo \ function *foo
    // 函数有一个*号，写在中间，右边，左边都行
    for (let i = 0; i < 3; i++) {
        console.log(i)
        yield i // yield 类似于断点，这个关键字只能在generator函数内部使用
    } // yield写在forEach中，也是会报错的，forEach里边跳出了generator函数
}
console.log(foo())
// generator函数需要手动执行
let f = foo() // Generator_Prototype 下边有next()函数，这个跟迭代器next()一样
console.log(f.next()) // 手动执行一次
// 输出一个value 和 一个done; done 表示是否执行完成
// 返回一个生成器的迭代器
console.log(f.next()) // 类似于单步调试的一次一次执行
console.log(f.next())
console.log(f.next()) // done: true

// 不能做构造函数使用
console.log('复杂Generator: ')
function* gen(x) {
    let y = 2 * (yield (x + 1))
    let z = yield (y / 3)
    return x + y + z 
}

// let g = gen(5)
// console.log(g.next()) // 6
// console.log(g.next()) // NaN
// console.log(g.next())// NaN
// next(param) 可以传递一个参数，这个参数会作为上一条yield语句的返回值
// 也就是yield 的一个返回值

let g = gen(5)
console.log(g.next()) // 6 g.next().value 获取值
console.log(g.next(6)) // 相当于 (yield(x+1)) = 6 
console.log(g.next(3))// 相当于 yield(y/3) = 3

// yield(6) 这个返回值 6 通过.next().value可以拿到

// generator的应用
// function* generator() {
//     const res1 = yield ajax()
//     const res2 = yield ajax()
//     const res3 = yield ajax()
//     const res4 = yield ajax()
// }
// let gg = generator.next() // async await就类似 自动机+generator函数
