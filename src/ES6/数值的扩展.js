// 十进制转二进制
const a = 5
console.log(parseInt(a, 10)) // 后面是进制数，将a用十进制表示

// 5/0 输出 Infinity(无限的)
console.log(Number.isFinite(5 / 0)) // 判断一个数是否为有限的
console.log(Number.isFinite(5)) // 非Number数据类型返回false

console.log('判断NaN: ' + Number.isNaN(NaN))

// parseInt 是windows下的parseInst： window.parseInst()
// 在ES6当中，将这个从window上拆出来，放到Number上了 , 全局方法模块化
console.log(Number.parseInt(a))

console.log(0.1+0.2) // 不等于0.3 浮点数运算，精确缺失