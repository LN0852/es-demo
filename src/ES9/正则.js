// dotAll
const reg = new RegExp(/./) // . 匹配任意字符
console.log(reg.test('s')) // true
console.log(reg.test('6'))
console.log(reg.test('\n')) // false 划行不行

const regDotAll = new RegExp(/./s) // 后边加 s 表示开启dotAll模式
console.log('dotAll ' + regDotAll.test('/n')) // true

// 具名组匹配
console.log('具名组匹配例子：')
// 正常写法
const date = /(\d{4})-(\d{2})-(\d{2})/.exec('2022-01-01')
console.log(date)
console.log(date[1]) // 拿到第一个判断条件的值，也就是year

// 具名组写法,date下边会有一个groups数组，用于存储具名组
const dateGourps = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/.exec('2022-02-02')
// groups数组会生成三个数据： year month day 
console.log(dateGourps)
console.log(dateGourps.groups.year)
console.log(dateGourps.groups.month)
console.log(dateGourps.groups.day)

//也可以用结构赋值拿出数据 
const { year, month, day } = dateGourps.groups
console.log(year, month, day)
