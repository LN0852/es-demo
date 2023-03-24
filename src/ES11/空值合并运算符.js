// 日常业务当中
const b = ''
const a = b || 5 // 判断有没有b ，在决定给不给默认值
// 这种判断方式会将：false 、 0 、'' 、null、undefiend都判断为空
// 但是在需求中传 false, 0 , '' 都是合法的,这种写法就不能判断了
console.log(a)
// ES11引入： ?? 运算符

const c = ''
const d = c ?? 10 // 只过滤 null 和 undefined
console.log(d)