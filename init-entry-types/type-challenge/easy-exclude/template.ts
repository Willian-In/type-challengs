type MyExclude<T, U> = T extends U ? never : T


// extends 可以直接遍历 union类型 1 | 2 | 3


const arr = ['1', '2', '3', '4'] as const

type t1 = typeof arr[number] // 转换为union类型

type t2 = MyExclude<t1, '1'>

// js逻辑

function myExclude(T, U) {
  const result = []
  for (let i = 0; i < T.length; i++) {
    const t = T[i]
    // let boo = false

    // for (let j = 0; j < U.length; j++) {
    //   const u = U[j]
    //   if (t === u) {
    //     boo = true
    //   }
    // }

    // if (!boo) {
    //   result.push(t)
    // }

    if(!U.include(t)) {
      result.push(t)
    }
  }
  return result
}