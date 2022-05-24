
type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [P in T[number]]: P;
}

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
type r = TupleToObject<typeof tuple>
// 当用[P in keyof T]: P: keyof 遍历array 类型的数据时候 可以得到 type r = readonly ["0", "1", "2", "3"] 即数组的索引
// [P in T[number]]: P: number 可以遍历数组 得到 type r = {
//     tesla: "tesla";
//     "model 3": "model 3";
//     "model X": "model X";
//     "model Y": "model Y";
// }
// type r = TupleToObject<typeof tuple>

// ts 来实现


// js实现原理
function tupleToObject(array) {
  const obj = {}
  
  array.forEach(val => obj[val] = val)

  return obj
}

// typeof后 得出的数据
// const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const // as const 去掉之后 type r = string[]

// type r = typeof tuple  // type r = readonly ["tesla", "model 3", "model X", "model Y"] 
// tuple[0] = '12354' // 会报错 只读 去掉as const 则不会报错

// as const 可以防止用户去修改数组内部的数据，将该数据变为常量

// 知识点
// const let 叫做js 世界
// type interface type 世界 
// js 世界 转换为 type 世界 就会使用的到typeof: TupleToObject<typeof tuple>
// js 世界
// const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
// 转换为type 世界
// TupleToObject<typeof tuple>
