const obj = {
    name: 'imooc',
    course: 'es'
}
const desc = Object.getOwnPropertyDescriptors(obj) // 输出所有属性的desc
// Object.getOwnPropertyDescriptor(Object, key) 没有s ，传两个参数，
console.log(desc)
// 获取对象的描述符
// course: {value: 'es', writable: true, enumerable: true, configurable: true}
// name:
//   configurable: true // 能否用delete删除该属性
//   enumerable: true // 是否可枚举
//   value: "imocc"
//   writable: true  // 对象属性是否可改

const object = {}
Reflect.defineProperty(object, 'name', { // 给object对象的name属性配置desc
    value: 'lining', // 默认属性的值
    writable: false, // 是否可写，不可写就是只读属性
    configurable: false, // 不能删除
    enumerable: true // 是否可枚举 ， true是
})
// object.name = 'xxx' // 报错
// delete object.name // 报错 ,configurable = false , 不可删除
console.log(object)
console.log(Object.getOwnPropertyDescriptor(object,'name').enumerable);
// Object.getOwnPropertyDescriptors获取描述