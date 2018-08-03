{
	// 基本定义
	let ajax = function (callback) {
		console.log('running');
		setTimeout(function () {
			callback && callback.call();
		}, 1000);
	};
	ajax(function () {
		console.log('timeout');
	});
}

{
	let ajax = function () {
		console.log('running2');
		return new Promise(function (resolve, reject) {
			setTimeout(function () {
				resolve();
			}, 1000);
		});
	};

	ajax().then(function () {
		console.log('promise', 'timeout2');
	})
}

{
	let ajax = function () {
		console.log('running3');
		return new Promise(function (resolve, reject) {
			setTimeout(function () {
				resolve();
			}, 1000);
		});
	};

	ajax()
		.then(function () {
		return new Promise(function (resolve, reject) {
			setTimeout(function () {
				resolve();
			}, 2000);
		});
	})
		 .then(function () {
		console.log('timeout3');
	});
}

{
	let ajax = function (num) {
		console.log('running4');
		return new Promise (function (resolve, reject) {
			if (num >5) {
				resolve();
			} else {
				throw new Error('something is wrong');
			}
		});
	};

	ajax(6).then(function () {
		console.log('log: ', 6);
	}).catch(function (err) {
		console.log('catch: ', err);
	});
}

{
	// 所有图片加载完再加载页面
	function loadImg(src) {
		return new Promise((resolve, reject) => {
			let img = document.createElement('img');
			img.src = src;
			img.onload = function () {
				resolve(img);
			}
			img.onerror = function (err) {
				reject(err);
			}
		})
	}
	
	function showImgs(imgs) {
		imgs.forEach(function (img) {
			document.body.appendChild(img);
		})
	}

	Promise.all([
		loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png'),
		loadImg('http://i4.buimg.com/567751/2b07ee25b08930ba.png'),
		loadImg('http://i2.muimg.com/567751/5eb8190d6b2a1c9c.png')
	]).then(showImgs);
}

{
	// 有一个图片加载完就加载页面
	function loadImg(src) {
		return new Promise((resolve, reject) => {
			let img = document.createElement('img');
			img.src = src;
			img.onload = function () {
				resolve(img);
			}
			img.onerror = function (err) {
				reject(err);
			}
		})
	}

	function showImgs(img) {
		let p = document.createElement('p');
		p.appendChild(img);
		document.body.appendChild(p);
	}

	Promise.race([
		loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png'),
		loadImg('http://i4.buimg.com/567751/2b07ee25b08930ba.png'),
		loadImg('http://i2.muimg.com/567751/5eb8190d6b2a1c9c.png')
	]).then(showImgs);
}
