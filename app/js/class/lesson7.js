{
  function test (x, y = 'world', c) {
    console.log('default: ', x, y);
  }
  test('hello');
  test('hello', 'kill');
}

{
  let x = 'test';
  function test2 (c, y = x) {
    console.log('context', c, y);
  }
  test2('kill');
  test2();
}

{
  function test3 (...arg) {
    for (let v of arg) {
      console.log('rest', v);
    }
    console.log(arg);
  }
  test3(1, 2, 3, 4, 'a');
}

{
  console.log(...[1, 2, 4]);
  console.log('a', ...[1, 2, 4]);
}

{//箭头函数
  let arrow = v => v * 2;
  let arrow2 = () => 5;
  console.log('arrow', arrow(3));
  console.log('arrow2', arrow2());
}

{//伪调用：提升性能
  function tail (x) {
    console.log('tail', x);
  }
  function fx (x) {
    return tail(x);
  }
  fx(123);
}