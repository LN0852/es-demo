// 异步迭代
// 1:迭代器协议 2: 可迭代协议
const arr = ['1', '2', '3']
arr[Symbol.iterator] = function () {
    let nextIndex = 0
    return {
        next() {
            return nextIndex < arr.length ? {
                value: arr[nextIndex++],
                done: false
            } : {
                value: undefined,
                done: true
            }
        }
    }
}
for (const iterator of arr) {
    console.log(iterator);
}
// 上边这种属于同步迭代


// ES 9 引入异步迭代

function getPromise(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                value: time, 
                done: false
            })
        },time)
    })
}

const arrPromise = [getPromise(1000), getPromise(2000), getPromise(3000)]
for (const item of arrPromise) {
    console.log(item) // 这里能看到控制台立刻输出三个padding状态的Promise
}

// 遵循异步迭代协议
// 结构和迭代器协议相同，其实也要遵循迭代器协议
arrPromise[Symbol.asyncIterator] = function () {
    let nextIndex = 0
    return {
        next() {
            return nextIndex < arrPromise.length ? arrPromise[nextIndex++] : 
                Promise.resolve({
                    value: undefined,
                    done: true
                })
        }
    }
}
// for (const item of arrPromise) {
//     console.log(item)
// }
console.log(arrPromise);
async function test() {
    for await (let item of arrPromise) { // 等待Promise进入resolve or reject状态后在执行循环
        console.log(item) // 依次输出1000 2000 3000 , 异步
    }// 也就是等一个异步执行完成后，在执行下一次
}
test()