const obj = {
    name: 'lining',
    age: 18
}

obj[Symbol.iterator] = function () {
    let _this = this
    let keys = Object.getOwnPropertyNames(_this) // object.keys Reflect.ownkeys
    let index = 0
    return { // 这里也可以参考iterator中的makeIterator函数的写法
        next() {
            return {
                value: keys[index++],
                done: index > keys.length
            }
        }
    }
}

for (const iter of obj) {
    console.log(iter + ' ' + obj[iter])
}