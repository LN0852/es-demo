// 引入了两个处理String前后空格的方法
// String.prototype.trimStart() String.prototype.trimEnd()
const str = '   imooc   '
console.log(str)
console.log(str.trimStart()) // 去掉前面的空格,对应的trimLeft
console.log(str.trimEnd()) // 去掉后面的空格,对应的trimRight
// 去掉前后空格：str.trim()