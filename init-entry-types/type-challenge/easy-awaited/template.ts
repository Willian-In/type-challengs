type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer X> 
? X extends Promise<unknown> 
  ? MyAwaited<X> 
  : X 
: never





/**
 * 知识点
 * infer 假设一个值类似：x, y
 * Promise<unknown> unknown 表示一个空集
 */