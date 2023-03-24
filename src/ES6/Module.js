import { a, b, sum, obj, People } from './export.js' //导入 a 模块
// 换名字用as, import { a as aa } from './export.js' 
console.log(a, b)
console.log(sum(2, 7))
console.log(obj)
let p = new People('lining')
p.showName()
