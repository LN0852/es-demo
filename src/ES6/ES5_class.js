// ES5中模拟类
function People(name, age) { // 首字母大写，不是普通的方法，是个构造函数，是一个类
    this.name = name // this指向实例对象
    this.age = age
    People.count++
    // this.showName = function () {
    //     console.log('My name is ' + this.name)
    // }
}
// 直接定义在原型上，实例方法
People.prototype.showName = function () {
    console.log('My name is ' + this.name);
}
People.count = 0
let p1 = new People('lining', 18) // 在这中可以理解，People 为类，p1是类的实例，是对象
console.log(p1)
p1.showName() // 找到原型上的showName

// 静态属性，定义在构造函数里面
console.log(People.count)

// 静态方法
People.getCount = function () { // 静态方法的this指向构造函数本身
    console.log('People 共实例化了：' + People.count + ' 个对象')
}
People.getCount()

// ES6 写法