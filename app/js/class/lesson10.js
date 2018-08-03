{
  let list = new Set();
  list.add(5);
  list.add(7);
  console.log('size', list.size);
  console.log('list: ', list);
}

{
  let arr = [1, 2, 3, 4, 5];
  let list = new Set(arr);

  console.log('size2', list.size);
}

{
  let list = new Set();
  list.add(1);
  list.add(2);
  list.add(1);
  console.log('list: ', list);

  let arr = [1, 2, 3, 4, 1.0, '2'];
  let list2 = new Set(arr);
  console.log('list2: ', list2);
}

{
  let arr = ['add', 'delete', 'clear', 'has'];
  let list = new Set(arr);
  console.log('has', list.has('add'));
  console.log('delete', list.delete('add'), list);
  list.clear();
  console.log('clear', list);
}

{
  let arr = ['add', 'delete', 'clear', 'has'];
  let list = new Set(arr);

  for (let key of list.keys()){
    console.log('keys', key);
  }
  for (let value of list.keys()){
    console.log('value', value);
  }
  for (let key of list){
    console.log('entrires', key);
  }

	list.forEach(function (item) {
		console.log(item);
	});
}

{
	let weakList = new WeakSet();
	let arg = {};
	weakList.add(arg);
	console.log('weakList', weakList);
}

{
	let map = new Map();
	let arr = ['123'];
	map.set(arr, 456);
	console.log('map', map, map.get(arr));
}

{
	let map = new Map([['a', 123], ['b', 456]]);
	console.log('map args', map);
	console.log('size', map.delete('a'), map);
	console.log('clear', map.clear(), map);
}

{
	let weakmap = new WeakMap();
	
	let o = {};
	weakmap.set(o, 123);
	console.log(weakmap.get(o));
}

{
	//���ݽṹ����Աȣ������顢�ġ�ɾ
	let map = new Map();
	let array = [];
	//��
	map.set('t', 1);
	array.push({t: 1});

	console.info('map-array', map, array);

	//��
	let map_exist = map.has('t');
	let array_exist = array.find(item => item.t);
	console.info('map_exit, array_exit', map_exist, array_exist);

	//��
	map.set('t', 2);
	array.forEach(item => item.t ? item.t = 2 : '');
	console.info('map-array-modify', map, array);

	//ɾ��
	map.delete('t');
	let index = array.findIndex(item => item.t);
	array.splice(index, 1);
	
	console.info('map-array-empty', map, array);
}

{
	// set��array�ĶԱ�
	let set = new Set();
	let array = [];

	//��
	set.add({t: 1});
	array.push({t: 1});

	console.info('set-array', set, array);

	//��
	let item = {t: 3};
	set.add(item);
	let set_exit_item = set.has(item);
	let set_exit = set.has({t: 1});
	let array_exit = array.find(item => item.t);
	console.info('set-array-exit', set_exit_item, set_exit, array_exit);

	//��
	set.forEach(item => item.t ? item.t = 2: '');
	array.forEach(item => item.t ? item.t = 2 : '');
	console.info('set-array-modify', set, array);

	//ɾ
	set.forEach(item => item.t ? set.delete(item): '');
	let index = array.findIndex(item => item.t);
	array.splice(index, 1);
	console.info('set-array-delete', set, array);
}

{
	//map, set, obj�Ա�
	let item = {t: 1};
	let map = new Map();
	let set = new Set();
	let obj = {};

	//��
	map.set('t', 1);
	set.add(item);
	obj['t'] = 1;
	console.info('map-set-obj', obj, map, set);

	//��
	console.info({
		map_exist: map.has('t'),
		set_exist: set.has(item),
		object_exist: 't' in obj
	})

	//��
	map.set('t', 2);
	item.t = 2;
	obj['t'] = 2;
	console.info('map-set-obj', obj, map, set);

	//ɾ
	map.delete('t');
	set.delete(item);
	delete obj['t'];
	console.info('map-set-obj-empty', obj, set, map);
}
