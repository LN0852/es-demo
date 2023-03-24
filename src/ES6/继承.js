// 父类
function Animal(name) {
    this.name = name
} 
Animal.prototype.showName = function () {
    console.log('Name is ' + this.name)
}

// 子类
function Dog(name, color) {
    Animal.call(this, name) // 继承属性，call第一个参数是需要改变this的对象，将Animal中的this指向Dog
    this.color = color
}
// 原型继承, 加上call 组合继承
Dog.prototype = new Animal()
Dog.prototype.constuctor = Dog

let dog = new Dog('wangcai', 'red')
console.log(dog)
dog.showName()

// ES6中的继承 ES6新引入了class语法糖

class PeopleES6 {
    constructor(name, age) {
        this.name = name
        this.age = age
        this._sex = 'male'
    }
    showName() {
        console.log('ES6 My nanme is ' + this.name);
    }
    // 在class中推荐使用get set定义属性，当前的属性有一些业务逻辑的操作，例如0：'male' 1: 'female'
    get sex() { // 定义一个get方法, 顶层属性 ， sex属性只能用set来赋值, get只读
        return this._sex
    }
    set sex(val) { // 对class顶层属性控制读写
        // 不能直接this.sex = xxx , 会死循环，它会不断的调用set sex() 不断的触发
        this._sex = val
    }
    // 使用static定义静态方法， 只有静态方法，static没有静态属性， 静态属性跟ES5一样使用PeopleES6.count = 8
    static getCount() { // 静态的不能在实例上调用，要在对象(类)上调用 PeopleES6.getCount() , 不是实例上的方法
        return 7
    }
}

let p2 = new PeopleES6('lining', 18)
// console.log(p2)
console.log(p2.sex) // get属性可以不加()
p2.sex = 'female'
console.log(p2.sex)
console.log('静态方法 ： ' + PeopleES6.getCount())

// es6 中的继承，关键字 extends
class Man extends PeopleES6 {
    constructor(name, age, company) { // extends 的class也有自身的constructor,
        // 在构造函数里边通过super()来继承父类
        super(name, age) // 继承父类
        this.company = company
    }
    showCompany() {
        console.log(this.company)
    }
}
let m = new Man('lining', 18, 'startimes')
console.log(m)
m.showCompany()
m.showName()
console.log('子类静态方法 ： ' + Man.getCount())
console.log(m.sex) // 子类也能继承父类的顶层属性