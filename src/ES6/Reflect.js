// 将Object属于语言内部的方法放到Reflect上变
// 修改Object返回结果，让其变得更合理
// 让Object操作变成函数行为 , 例如： delete 转为 Reflect.deleteProperty()
// 与Proxy对象方法一一对象，相辅相成

// Object.defienProperty 和 Reflect.defineProperty
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
            // return target[prop]
            return Reflect.get(target, prop)
        }
    },
    set(target, prop, value) {  // set拦截
        if (prop.startsWith('_')) {
            throw new Error('访问受到限制')
        } else {
            // target[prop] = value
            Reflect.set(target, prop, value)
            return true // 要返回boolean
        }
    },
    deleteProperty(target, prop) { // 拦截删除操作
        if (prop.startsWith('_')) {
            throw new Error('不可删除')
        } else {
             Reflect.deleteProperty(target, prop) // Reflect中的方法和Proxy是一一对应的
            return true // 要返回一个boolean
        }
    },
    ownKeys(target) { // 拦截object.keys()
        return Reflect.ownKeys(target).filter(key => !key.startsWith('_'))
    }
})
console.log(user.age)
user.age = 22
console.log(user.age)

