/* 
  分类
    -1.基础类型:String,Number,Boolean,undefined,null
      -String：任意的字符串
      -Number：任意的数字
      -Boolean:true/flase
      -undefined:undefined
      -null:null
    -2.对象（引用）类型：Object,Function,Array
      -Object:任意对象都是Object  对象用来存数据的
      -Function:一种特别的对象  函数用来存代码的，一种特别的对象可以执行
      -Array:一种特别的对象（数值下标，内部数据是有序的）
  判断
    *typeof
    *instanceof
    *===
*/

// 1.基本数据
var a 
console.log(a);
let arr = [1,2,3,4,5,6,7,8,9]
console.log(typeof arr);

let fn  = function() {
  console.log('fn我司');
}
console.log(typeof fn);

let obj = {}
console.log(typeof null)
console.log(typeof obj)
// 2.引用数据

/* 
对象的组成
  属性：属性名（字符串)和属性值组成
  方法：一种特别的属性 属性值是函数
*/
// 函数生命
function fn1  () {
  console.log('fn1');
}

// 函数表达式

var fn2 = function () {
  console.log('fn2');
}
