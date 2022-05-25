// type First<T extends any[]> = T extends [] ? never : T[0] //第一种解法
// type First<T extends any[]> = T['length'] extends 0 ? never : T[0] // 第二种解法 利用indexed
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never // 第三种解发，利用extends 和T[number]->unio 进行 解题
type First<T extends any[]> = T extends [infer First, ... infer Rest] ? First : never // infer First相当是设 第一个值为X ... infer Rest 设剩下的值为Y


// 验证取剩下的值
type Test<T extends any[]> = T extends [infer First, ...infer Rest] ? Rest : never
type R = Test<[1, 2, 3]> // 打印为[2, 3]

// 验证取union值
type ages = [1, 2, 3] 

type ages2 = []

type r = ages[number] // type r = 3 | 1 | 2 
type r2 = ages2[number] // type r2 = never

// 这里运用到了union ages[number] 得到type r = 3 | 1 | 2  extend 对1进行限制
// 执行原理 1 extends 3 -> 1 extends 1 -> 1 extends 2
type r3 = 1 extends ages[number] ? true : false

type tuple = {
  name: string,
  age: string,
  size: number
}

type t = keyof tuple

// js 实现
function firstArr(arr) {
  // if (arr.length === 0) return 'never'
  const [ first, ...rest ] = arr
  return first ? first : 'never'
  // return arr[0]
}

// 假设原理
let arr = [1, 2, 3]
const [First, ...Rest] = arr
// 此时的First 为1， Rest 为[2， 3]

/**
 * 知识点
 * 1. extends 类型条件判断 对T进行限制看是否符合条件
 * 2. 获取tuple 的 length属性 利用indexed 和extends限制 进行判断T['length'] extends 0 ?
 * 3. extend union 判断规则 利用extends 对T[0]进行限制，将T[number]得到union 3 | 1 | 2 再进行逐个比较
 * 4. inter 的使用 // infer First相当是设 第一个值为X ... infer Rest 设剩下的值为Y
 */

