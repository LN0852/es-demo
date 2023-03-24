const str = 'imooc'
console.log(str.padStart(8, 'x')); // 在str前填充'x'直到length = 8
console.log(str.padEnd(8, 'x')); // 后边填充

// 例子一：
const now = new Date()
const year = now.getFullYear()
const month = (now.getMonth() + 1).toString().padStart(2, '0') // 前边补 0 
const day = Number.parseInt((now.getDate()).toString().padStart(2, '0'))
// padStart 是 String.property的方法，要转成String才能调，再用Number.parseInt()转Number
console.log(`${year}-${month}-${day}`);

// 例子二：
const tel = '13212345678'
const newTel = tel.slice(-4).padStart(tel.length, '*')
console.log(newTel);

