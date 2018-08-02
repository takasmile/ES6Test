{
  //简介表示法
  let o = 1;
  let k = 2;
  let es5 = {
    o: o,
    k: k
  };
  console.log(es5);
  let es6 = {
    o, k
  }
  console.log(es6);

  let es5_method = {
    hello: function () {
      console.log('hello');
    }
  };
  es5_method.hello();

  let es6_method = {
    hello(){
      console.log('hello6');
    }
  };
  es6_method.hello();
}

//属性表达式
{
  let a = 'b';
  let es5_obj = {
    a: 'c'
  };

  let es6_obj = {
    [a]: 'c',
    a: 'c'
  };

  console.log(es5_obj);
  console.log(es6_obj);
}

{
  //新增API
  console.log(Object.is('abc', 'abc'));
  console.log('array: ', Object.is([], []), [] === []);

  console.log('copy', Object.assign({a: 'a'}, {b: 'b'}));

  let test = {k: 123, o: 456};
  for (let [key, value] of Object.entries(test)) {
    console.log([key, value]);
  }
}

{
  //扩展运算符
  // let { a, b, ...c} = {a: 'test', b: 'kill', c: 'ddd', d: 'ccc'};
  // console.log()
}
