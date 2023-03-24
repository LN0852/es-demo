// ES10中对toString() 方法进行了修订
// Function.prototype.toString()
// 函数字符串化

function test() {
    // 这是toString
    console.log('imooc')
}
console.log(test.toString()) // 完整的输出test(), 包括注释

// Number下边也有一个toString(), 将
const a = 10
console.log(typeof a.toString(), a.toString())