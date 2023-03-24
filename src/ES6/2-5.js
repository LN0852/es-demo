// 数组的扩展
// 类数组和伪数组
// 它们都不是数组，但是都有长度这个属性 例如： HTMLCollection 和 NodeList , 它们不具有数组的方法

// ES5写法
let div = document.getElementsByName('div')
console.log(div) // NodeList

// 可以用slice 将类数组/伪数组转为数组 ES5
let arr = Array.prototype.slice.call(div)
console.log(arr)
arr.push(123)
console.log(arr)
// 包括 arguments也是真正意义上的数组，但是有length

// ES6 写法
let arrayList = {
    0: 'ES6',
    1: 'ES7',
    2: 'ES8',
    length: 3 // 有length才行，没有length就不是伪数组了
}
// 将伪数组arrayList转成真正的数组 ,
let reallyArray = Array.from(arrayList) // from方法返回一个新数组
console.log(reallyArray)



// Array.of 创建数组 ES6
// let of = Array.of(1) // 构造一个数组，返回来
// let of = new Array(1) // 传一个参数表示创建length = 1的数组，传多个参数表示数组的初始值
let of = Array.of(1,'string',[1,2,3], {name: 'lining'}) // 会将这个参数，拼成数组
console.log(of)


// Array.includes()