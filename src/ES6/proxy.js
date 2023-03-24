// 代理，俗称拦截
// ES5
let obj = {}
let newVal = ''
Object.defineProperty(obj, 'name', {
    get() {
        console.log('get')
        return newVal
    },
    set(val) {
        console.log('set')
        // this.name = val // 设置value时，不能这样，会死循环
        newVal = val
    }
}) // 这也是Vue2中响应式的核心
// 第一个参数，拦截对象本身，第二个：拦截的属性,第三个：配置一些拦截的方法

// console.log(obj.name) // obj对象中的'name'属性被拦截了，进入到拦截处理方法中

obj.name = 'lining'
console.log(obj.name)


// ES6 引入 Proxy , Vue3响应式的核心
console.log("ES中引入的Proxy:")
let p = {}
let proxy = new Proxy(p, {}) // 第一参数是代理对象
proxy.name = 'lining' // 设置一个代理，name属性
console.log(p.name) // name属性被代理了，返回'lining'

// 数组的代理
let arr = [1, 2, 3]
arr = new Proxy(arr, {// 第一个是代理的目标对象 ，第二个参数：配置对象
    get(target, prop) { // 第一个参数是目标对象，也就是arr, 第二个参数：所要访问的属性
        console.log(target, prop)
        return prop in target ? target[prop] : 'error'
    }
})
console.log(arr[1])

console.log('Proxy代理对象：')
let dict = {
    'hello': '你好', 
    'world': '世界'
}
dict = new Proxy(dict, {
    get(target, prop) {
        return prop in target ? target[prop] : prop
    }
})

console.log(dict.he)

// Proxy set代理
console.log('Proxy set ：')
let arr1 = []
arr1 = new Proxy(arr1, {
    set(target, prop, val) { // target当前目标对象， prop属性名，val 给prop属性设置的值
        if (typeof val === 'number') {
            target[prop] = val
            return true
        } else {
            return false
        }
    }
})
arr1.push(5) // 对象的拦截操作，不会破坏原有的功能
arr1.push(15)
console.log(arr1[0],arr1[1])

// has()
console.log('has()函数')
let range = {
    start: 1,
    end: 5
}
range = new Proxy(range, {
    has(target, prop) {// 
        return prop >= target.start && prop <= target.end
    }
})
console.log(2 in range)
console.log(9 in range)

// ownKeys()
console.log('ownKeys()函数')
let ownKeys = {
    name: 'imooc',
    [Symbol('proxy')]: 'proxy'
}
console.log(Object.keys(ownKeys)) // 不会返回symbol的键值
console.log(Object.getOwnPropertyNames(ownKeys)) // 不会返回symbol的键值
console.log(Object.getOwnPropertySymbols(ownKeys))// 只输出symbol
// for in 遍历也没有symbol

// 使用ownKeys代理, 用来拦截Object.keys()操作，对象中的某些key，不想让被人访问
let userinfo = {
    username: 'lining',
    age: 18,
    _password: '***'
}
userinfo = new Proxy(userinfo, {
    ownKeys(target) {
        return Object.keys(target).filter(key => !key.startsWith('_'))
    }
})

console.log(Object.keys(userinfo)) // 没有_password属性, 用for in 遍历也是一样的
console.log(Reflect.ownKeys(userinfo)) // 同上

console.log('拦截对象属性的访问');
// 自定义对象属性的私有性，不可访问、不可赋值、不可删除等操作
let user = {
    name: 'lining',
    age: 18,
    _password: '***'
}
user = new Proxy(user, {
    get(target, prop) {// get拦截
        if (prop.startsWith('_')) {
            throw new Error('访问受到限制')
        } else {
            return target[prop]
        }
    },
    set(target, prop, value) {  // set拦截
        if (prop.startsWith('_')) {
            throw new Error('访问受到限制')
        } else {
            target[prop] = value
            return true // 要返回boolean
        }
    },
    deleteProperty(target, prop) { // 拦截删除操作
        if (prop.startsWith('_')) {
            throw new Error('不可删除')
        } else {
             Reflect.deleteProperty(target, prop)
            return true // 要返回一个boolean
        }
    },
    ownKeys(target) { // 拦截object.keys()
        return Reflect.ownKeys(target).filter(key => !key.startsWith('_'))
    }
})
// console.log(user._password)

// user.age = 18
// console.log(user.age)
// user._password = '123456'
// console.log(user._password)
try {
    Reflect.deleteProperty(user, 'age')
    console.log(user.age) // undefiend
    Reflect.deleteProperty(user, '_password')
    console.log(user._password)
} catch (error) {
    console.log(error)
}
console.log(Object.keys(user))

// apply 拦截函数调用以及call 和 apply操作
console.log('apply()函数')
let sum = (...args) => {
    let num = 0
    args.forEach(item => {
        num += item
    })
    return num
}
sum = new Proxy(sum, {
    apply(target, ctx, args) { // ctx 上下文 ， args目标对象的参数数组
        return target(...args) * 2
        // return Reflect.apply(target, target, [...args]) * 2
    }
})
console.log(sum(1, 2, 3, 4))
console.log(sum.call(null, 1,2,3))
console.log(sum.apply(null, [1, 2, 3]))

// construct 拦截new
console.log('construct 拦截new ')
let Client = class {
    constructor(name) {
        this.name = name
    }
}

Client = new Proxy(Client, {
    construct(target, args, newTarget) {
 // 第二个参数是：当前class中构造函数的参数列表
    // 第三个参数：创造实例的时候，new命令作用的构造函数
        console.log('object')
        return new target(...args)
    }
})
console.log(new Client('lining'))

// proxy中常见的拦截器 get set has deleteProperty ownKeys apply construct 