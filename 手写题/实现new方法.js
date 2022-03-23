/*
* 创建一个空对象
* 链接到原型
* 绑定this对象
* 返回新对象
* */

function createNew() {
    let obj = {}
    let constructor = [].shift.call(arguments)
    obj.__proto__ = constructor.prototype
    let result = constructor.apply(obj, arguments)
    return typeof result === 'object' ? result : obj
}

function People(name, age) {
    this.name = name
    this.age = age
}

let people = createNew(People, 'Bob', 25)

console.log(people)
console.log(people.name)
console.log(people.age)