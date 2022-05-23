// type MyPick<T, K> = any
//  需求，传递一个数据，和一个key，返回一个新的类型出来

// 在ts中需要遍历就用in, K就是MyPick<Todo, 'title' | 'completed'> 中的'title' | 'completed' （称为ts的联合类型， union, 用in进行遍历）
type MyPick <T, K extends keyof T> = { // extends 对K进行约束 只有当K存在于T才进行赋值 keyof 将todo: {title: '123', nage: '456'} 遍历成数组 [title, name] 此时的K就相当于title 看[title, name] 是否存在类似
  [P in K]: T[P]  // K是联合类型 使用in进行遍历，得到的值用P进行表示
}


// 先采用js的方法去实现
function myPick (todo, keys) {
  const obj = {}
  todo.forEach(key => {
    if (keys in todo) {
      obj[key] = todo[key]
    }
    return obj
  });
}

// 1. 返回一个对象
// 2. 使用forEach进行遍历 mapped
//  - https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#handbook-content
// 3. 从todo[key]进行取值 indexed
//  - https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html#handbook-content
// 4. 进行判断看key 在不在todo里面
//  - lookup 查阅的意思 将一个对象数据的key遍历出来挨个查阅
//  - https://www.typescriptlang.org/docs/handbook/2/keyof-types.html#handbook-content
//  - extends