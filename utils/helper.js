class Helper {
	constructor() {
		this.timer = {};
	}
	get hash(){
		return this.createHash(8);
	}

	/** Среднее целое */
	getMidSize(min,max){
		return Math.ceil((max + min)/2);
	}

	/** Фильтр часто запускаемых действий */
	actionFilter({ keyTimer, duration=10, action }){
		if(this.timer[keyTimer]){
			clearTimeout(this.timer[keyTimer]);
			this.timer[keyTimer] = '';
		}

		if(action){
			this.timer[keyTimer] = setTimeout(() => {
				action();
			}, duration);
		}
	}

	/** Генератор хеш-кода */
	createHash(length) {
		let chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
		let text = '';

		length = length || 6;

		for (let i = 0; i < length; i++) {
		  text += chars.charAt(Math.floor(Math.random() * chars.length));
		}

		return text;
	}

	/** Рандомное перемешивание массива */
	shuffle(array) {
		for (let i = array.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
	}

	pause(duration=500, call){
		return new Promise((resolve)=>{
			setTimeout(() => {
				if(call) call();
				resolve(true);
			}, duration);
		});
	}

	/** Первый символ заглавный */
	ucFirst(str) {
		if (!str) return str;

		return str[0].toUpperCase() + str.slice(1);
	}

	/** Вырезание тегов из строки */
	cutTags(str) {
		let regex = /( |<([^>]+)>)/ig;

		return str.replace(regex, "");
	}
}

export default new Helper();
