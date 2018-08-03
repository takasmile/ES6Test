{
	let obj = {
		time: '2017-03-11',
		name: 'net',
		_r: 123
	};

	let monitor = new Proxy(obj, {
		// 拦截对象属性的读取
		get(target, key) {
			return target[key].replace('2017', '2018');
		},
		// 拦截对象设置属性
		set(target, key, value){
			if (key === 'name') {
				return target[key] = value;
			} else {
				return target[key];
			}
		},
		// 拦截key in obj操作
		has(target, key){
			if (key === 'name') {
				return target[key];
			} else {
				return false;
			}
		},
		// 拦截delete
		deleteProperty(target, key) {
			if (key.indexOf('_') > -1) {
				delete target[key];
				return true;
			} else {
				return target[key];
			}
		},
		// 拦截object.keys, object.getOwnProtertySymbols, object.getOwnProtertyNames
		ownKeys(target){
			return Object.keys(target).filter(item => item != 'time');
		},
	});

	console.log('get', monitor.time);
	monitor.time = '2019';
	console.log('set-time', monitor.time);
	monitor.name = 'alex';
	console.log('set-name', monitor.name); 
	console.log('has', 'name' in monitor);
	console.log('has', 'time' in monitor);
	
	delete monitor.time;
	console.log('delete', monitor);

	delete monitor._r;
	console.log('delete', monitor);
	//console.log('ownkeys', Object.keys(monitor));
}

{
	let obj = {
		time: '2017-03-11',
		name: 'net',
		_r: 123
	};

	console.log('reflect get', Reflect.get(obj, 'time'));
	Reflect.set(obj, 'name', 'Alex');
	console.log('reflect set', obj);
	console.log('reflect has', Reflect.has(obj, 'name'));
}

{
	function validator(target, validator) {
		return new Proxy(target, {
			_validator: validator,
			set(target, key, value, proxy) {
				if (target.hasOwnProperty(key)) {
					let va = this._validator[key];
					if (!!va(value)) {
						return Reflect.set(target, key, value, proxy);
					} else {
						throw Error(`cannot set ${key} to ${value}`);
					}
				} else {
					throw Error(`${key} not exist`)
				}
			}
		})
	}
	const personValidators = {
		name (val) {
			return typeof val === 'string'
		},
		age(val) {
			return typeof val === 'number' && val > 18;
		}
	}

	class Person {
		constructor(name, age){
			this.name = name;
			this.age = age;
			return validator(this, personValidators);
		}
	}

	const person = new Person('lilei', 10);
	console.log(person);
	person.name = 'Alex';
	console.log(person);
}
