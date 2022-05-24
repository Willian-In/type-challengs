type MyReadonly<T> = {
  readonly [P in keyof T] : T[P] // 这里使用到lookUp 即将T中的所有的key全部返回出来
}

// 案例讲解
interface Todo {
  name: string;
  age: number;
}

type r = keyof Todo

// 验证
const rv: r = 'age'


// js实现

function readonly (obj) {
  const result = {}
  for (const key in obj) {
    result['readonly' + key] = obj[key]
  }

  return result
}

// 1. 返回一个对象
// 2. 遍历obj (在js中叫做对象，在TS中遍历得就是接口)  in -> mapped keyof -> lookup
// 3. 往每个key前面添加redonly关键字 新知识点readonly 只读
// 4. 通过key来获取obj(接口)里面得值