type Length<T extends readonly any[]> = T['length']




// js逻辑
function getLength(arr) {
  if (!Array.isArray(arr)) return
  return arr.length
}


type StringNumberPair = [string, number]
const str:StringNumberPair = ['123', 10]

type t1 = StringNumberPair['length']  // t1返回的值为number类型

type StringArr = string[]
type t2 = StringArr['length'] // number类型 

// 知识点
// 什么是tuple类型  是数组的另外一种类型，类似伪数组，tuple清晰的描述了每个位置上的类型
// tuple和普通数组有什么区别