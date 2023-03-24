console.log('模板字符串')
// es6 优化了unicode字符， 码点 \uxxxx 0000-ffff , 超出码点用法\u{xxxx}
// ES6中对字符串的操作，重点引入了   《模板字符串》

const a = 20
const str1 = `1
2
3
${a}
4` // 使用变量
console.log(str1)

const str2 = `
<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul>
`
console.log(str2)
console.log(`我的年龄是：${a}`)

// 
console.log(String.fromCodePoint(0x20BB7)) // ES6中将码点转为字符

const str = 'imooc'
// 匹配字串
console.log(str.indexOf('mo')) // ES5写法，存在字串的，返回第一匹配的index,不存在的返回-1
console.log(str.includes('mo')) // ES6 写法，返回false 和 true
console.log(str.endsWith('mo')) // ES6 是否以 'mo'结尾 ， 返回false true
