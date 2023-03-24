const use = {
    name: 'lining',
    age: 12
}
const { name: uname, age } = use // 解构赋值的时候可以换key
console.log(uname, age) 

// 字符串的解构和数组是一样的