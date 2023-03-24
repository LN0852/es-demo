// inclues(searchElement, fromIndex)
// fromIndex 正数：从头数， 负数：从尾巴数

// ES5中的indexOf(searchElement) 返回索引，不存在返回 -1

console.log('复杂用法')
const arr = ['1', ['2', '3'], '4']
console.log(arr.includes(['2', '3'])) // false , 引用数据类型找不到，但是检测NaN
console.log(arr.indexOf(['2', '3'])) // -1 不能检测NaN

// 幂运算符 **
console.log(2 ** 10)
console.log(Math.pow(2,10))