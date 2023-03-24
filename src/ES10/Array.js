// ES10中扩展了数据扁平化函数
// Array.prototype.flat() Array.prototype.flatMap()

const arr = [1, 2, [3, 4], 5, 6, 7, [[8, [9, 10]], 11], 12, 13]
console.log(arr.flat()) // 第一层拍平了，但是深层次的没有拍平
// flat没有参数的话，默认拍平一层，参数Number，表示拍平的层数
// flat可以链式调用
console.log(arr.flat(4)) // 传 Infinity 也可以，无限的

