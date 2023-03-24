const max = 2 ** 53
console.log(max)
console.log(Number.MAX_SAFE_INTEGER)

// 能存储比MAX_SAFE_INTEGER还大的数
const bigInt = 9007199254740993n // 后边加个 n ，表示这个数是BigInt类型
console.log(bigInt)
console.log(typeof bigInt)
console.log(1n == 1) // true
console.log(1n === 1) // false

const bigInt2 = BigInt(9007199254740993n)
console.log(bigInt + bigInt2)
// 如果想用string存储，要用toString()转为string类型，不然村Number村不下
console.log((bigInt + bigInt2).toString()) // 去掉后面的 'n'