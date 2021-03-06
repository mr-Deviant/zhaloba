module.exports = {
	// Countries list from: http://semantic-ui.com/modules/dropdown.html
	// Translation from: https://github.com/umpirsky/country-list/blob/master/data/ru/country.json
	// Phone codes: https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D1%82%D0%B5%D0%BB%D0%B5%D1%84%D0%BE%D0%BD%D0%BD%D1%8B%D1%85_%D0%BA%D0%BE%D0%B4%D0%BE%D0%B2_%D1%81%D1%82%D1%80%D0%B0%D0%BD
	getAll: function () {
		let countries = [
			{code: "af", name: "Афганистан", phone: ""},
			{code: "ax", name: "Аландские о-ва", phone: ""},
			{code: "al", name: "Албания", phone: ""},
			{code: "dz", name: "Алжир", phone: ""},
			{code: "as", name: "Американское Самоа", phone: ""},
			{code: "ad", name: "Андорра", phone: ""},
			{code: "ao", name: "Ангола", phone: ""},
			{code: "ai", name: "Ангилья", phone: ""},
			{code: "ag", name: "Антигуа и Барбуда", phone: ""},
			{code: "ar", name: "Аргентина", phone: ""},
			{code: "am", name: "Армения", phone: ""},
			{code: "aw", name: "Аруба", phone: ""},
			{code: "au", name: "Австралия", phone: ""},
			{code: "at", name: "Австрия", phone: ""},
			{code: "az", name: "Азербайджан", phone: ""},
			{code: "bs", name: "Багамские о-ва", phone: ""},
			{code: "bh", name: "Бахрейн", phone: ""},
			{code: "bd", name: "Бангладеш", phone: ""},
			{code: "bb", name: "Барбадос", phone: ""},
			{code: "by", name: "Беларусь", phone: "+375 (XX) XXX-XX-XX"},
			{code: "be", name: "Бельгия", phone: ""},
			{code: "bz", name: "Белиз", phone: ""},
			{code: "bj", name: "Бенин", phone: ""},
			{code: "bm", name: "Бермудские о-ва", phone: ""},
			{code: "bt", name: "Бутан", phone: ""},
			{code: "bo", name: "Боливия", phone: ""},
			{code: "ba", name: "Босния и Герцеговина", phone: ""},
			{code: "bw", name: "Ботсвана", phone: ""},
			// {code: "bv", name: "Bouvet Island", phone: ""},
			{code: "br", name: "Бразилия", phone: ""},
			{code: "vg", name: "Виргинские о-ва (Британские)", phone: ""},
			{code: "bn", name: "Бруней-Даруссалам", phone: ""},
			{code: "bg", name: "Болгария", phone: ""},
			{code: "bf", name: "Буркина-Фасо", phone: ""},
			{code: "mm", name: "Мьянма (Бирма)", phone: ""}, // Originally code was "ar"
			{code: "bi", name: "Бурунди", phone: ""},
			{code: "tc", name: "О-ва Тёркс и Кайкос", phone: ""},
			{code: "kh", name: "Камбоджа", phone: ""},
			{code: "cm", name: "Камерун", phone: ""},
			{code: "ca", name: "Канада", phone: ""},
			{code: "cv", name: "Кабо-Верде", phone: ""},
			{code: "ky", name: "Каймановы о-ва", phone: ""},
			{code: "cf", name: "ЦАР", phone: ""},
			{code: "td", name: "Чад", phone: ""},
			{code: "cl", name: "Чили", phone: ""},
			{code: "cn", name: "Китай", phone: ""},
			{code: "cx", name: "О-в Рождества", phone: ""},
			{code: "cc", name: "Кокосовые о-ва", phone: ""},
			{code: "co", name: "Колумбия", phone: ""},
			{code: "km", name: "Коморские о-ва", phone: ""},
			{code: "cg", name: "Конго - Браззавиль", phone: ""},
			{code: "cd", name: "Конго - Киншаса", phone: ""},
			{code: "ck", name: "О-ва Кука", phone: ""},
			{code: "cr", name: "Коста-Рика", phone: ""},
			{code: "ci", name: "Кот-д’Ивуар", phone: ""},
			{code: "hr", name: "Хорватия", phone: ""},
			{code: "cu", name: "Куба", phone: ""},
			{code: "cy", name: "Кипр", phone: ""},
			{code: "cz", name: "Чехия", phone: ""},
			{code: "dk", name: "Дания", phone: ""},
			{code: "dj", name: "Джибути", phone: ""},
			{code: "dm", name: "Доминика", phone: ""},
			{code: "do", name: "Доминиканская Республика", phone: ""},
			{code: "ec", name: "Эквадор", phone: ""},
			{code: "eg", name: "Египет", phone: ""},
			{code: "sv", name: "Сальвадор", phone: ""},
			{code: "gb", name: "Великобритания", phone: ""},
			{code: "gq", name: "Экваториальная Гвинея", phone: ""},
			{code: "er", name: "Эритрея", phone: ""},
			{code: "ee", name: "Эстония", phone: ""},
			{code: "et", name: "Эфиопия", phone: ""},
			// {code: "eu", name: "European Union", phone: ""},
			{code: "fk", name: "Фолклендские о-ва", phone: ""},
			{code: "fo", name: "Фарерские о-ва", phone: ""},
			{code: "fj", name: "Фиджи", phone: ""},
			{code: "fi", name: "Финляндия", phone: ""},
			{code: "fr", name: "Франция", phone: ""},
			{code: "gf", name: "Французская Гвиана", phone: ""},
			{code: "pf", name: "Французская Полинезия", phone: ""},
			{code: "tf", name: "Французские Южные Территории", phone: ""},
			{code: "ga", name: "Габон", phone: ""},
			{code: "gm", name: "Гамбия", phone: ""},
			{code: "ge", name: "Грузия", phone: ""},
			{code: "de", name: "Германия", phone: ""},
			{code: "gh", name: "Гана", phone: ""},
			{code: "gi", name: "Гибралтар", phone: ""},
			{code: "gr", name: "Греция", phone: ""},
			{code: "gl", name: "Гренландия", phone: ""},
			{code: "gd", name: "Гренада", phone: ""},
			{code: "gp", name: "Гваделупа", phone: ""},
			{code: "gu", name: "Гуам", phone: ""},
			{code: "gt", name: "Гватемала", phone: ""},
			{code: "gw", name: "Гвинея-Бисау", phone: ""},
			{code: "gn", name: "Гвинея", phone: ""},
			{code: "gy", name: "Гайана", phone: ""},
			{code: "ht", name: "Гаити", phone: ""},
			// {code: "hm", name: "Heard Island", phone: ""},
			{code: "hn", name: "Гондурас", phone: ""},
			{code: "hk", name: "Гонконг", phone: ""},
			{code: "hu", name: "Венгрия", phone: ""},
			{code: "is", name: "Исландия", phone: ""},
			{code: "in", name: "Индия", phone: ""},
			{code: "io", name: "Британская территория в Индийском океане", phone: ""},
			{code: "id", name: "Индонезия", phone: ""},
			{code: "ir", name: "Иран", phone: ""},
			{code: "iq", name: "Ирак", phone: ""},
			{code: "ie", name: "Ирландия", phone: ""},
			{code: "il", name: "Израиль", phone: ""},
			{code: "it", name: "Италия", phone: ""},
			{code: "jm", name: "Ямайка", phone: ""},
			{code: "jp", name: "Япония", phone: ""},
			{code: "jo", name: "Иордания", phone: ""},
			{code: "kz", name: "Казахстан", phone: ""},
			{code: "ke", name: "Кения", phone: ""},
			{code: "ki", name: "Кирибати", phone: ""},
			{code: "kw", name: "Кувейт", phone: ""},
			{code: "kg", name: "Киргизия", phone: ""},
			{code: "la", name: "Лаос", phone: ""},
			{code: "lv", name: "Латвия", phone: ""},
			{code: "lb", name: "Ливан", phone: ""},
			{code: "ls", name: "Лесото", phone: ""},
			{code: "lr", name: "Либерия", phone: ""},
			{code: "ly", name: "Ливия", phone: ""},
			{code: "li", name: "Лихтенштейн", phone: ""},
			{code: "lt", name: "Литва", phone: ""},
			{code: "lu", name: "Люксембург", phone: ""},
			{code: "mo", name: "Макао", phone: ""},
			{code: "mk", name: "Македония", phone: ""},
			{code: "mg", name: "Мадагаскар", phone: ""},
			{code: "mw", name: "Малави", phone: ""},
			{code: "my", name: "Малайзия", phone: ""},
			{code: "mv", name: "Мальдивские о-ва", phone: ""},
			{code: "ml", name: "Мали", phone: ""},
			{code: "mt", name: "Мальта", phone: ""},
			{code: "mh", name: "Маршалловы о-ва", phone: ""},
			{code: "mq", name: "Мартиника", phone: ""},
			{code: "mr", name: "Мавритания", phone: ""},
			{code: "mu", name: "Маврикий", phone: ""},
			{code: "yt", name: "Майотта", phone: ""},
			{code: "mx", name: "Мексика", phone: ""},
			{code: "fm", name: "Федеративные Штаты Микронезии", phone: ""},
			{code: "md", name: "Молдова", phone: ""},
			{code: "mc", name: "Монако", phone: ""},
			{code: "mn", name: "Монголия", phone: ""},
			{code: "me", name: "Черногория", phone: ""},
			{code: "ms", name: "Монтсеррат", phone: ""},
			{code: "ma", name: "Марокко", phone: ""},
			{code: "mz", name: "Мозамбик", phone: ""},
			{code: "na", name: "Намибия", phone: ""},
			{code: "nr", name: "Науру", phone: ""},
			{code: "np", name: "Непал", phone: ""},
			// {code: "an", name: "Netherlands Antilles", phone: ""},
			{code: "nl", name: "Нидерланды", phone: ""},
			{code: "nc", name: "Новая Каледония", phone: ""},
			{code: "pg", name: "Папуа – Новая Гвинея", phone: ""},
			{code: "nz", name: "Новая Зеландия", phone: ""},
			{code: "ni", name: "Никарагуа", phone: ""},
			{code: "ne", name: "Нигер", phone: ""},
			{code: "ng", name: "Нигерия", phone: ""},
			{code: "nu", name: "Ниуэ", phone: ""},
			{code: "nf", name: "О-в Норфолк", phone: ""},
			{code: "kp", name: "КНДР", phone: ""},
			{code: "mp", name: "Северные Марианские о-ва", phone: ""},
			{code: "no", name: "Норвегия", phone: ""},
			{code: "om", name: "Оман", phone: ""},
			{code: "pk", name: "Пакистан", phone: ""},
			{code: "pw", name: "Палау", phone: ""},
			{code: "ps", name: "Палестинские территории", phone: ""},
			{code: "pa", name: "Панама", phone: ""},
			{code: "py", name: "Парагвай", phone: ""},
			{code: "pe", name: "Перу", phone: ""},
			{code: "ph", name: "Филиппины", phone: ""},
			{code: "pn", name: "Питкэрн", phone: ""},
			{code: "pl", name: "Польша", phone: ""},
			{code: "pt", name: "Португалия", phone: ""},
			{code: "pr", name: "Пуэрто-Рико", phone: ""},
			{code: "qa", name: "Катар", phone: ""},
			{code: "re", name: "Реюньон", phone: ""},
			{code: "ro", name: "Румыния", phone: ""},
			{code: "ru", name: "Россия", phone: "+7 (XXX) XXX-XX-XX"},
			{code: "rw", name: "Руанда", phone: ""},
			{code: "sh", name: "О-в Св. Елены", phone: ""},
			{code: "kn", name: "Сент-Китс и Невис", phone: ""},
			{code: "lc", name: "Сент-Люсия", phone: ""},
			{code: "pm", name: "Сен-Пьер и Микелон", phone: ""},
			{code: "vc", name: "Сент-Винсент и Гренадины", phone: ""},
			{code: "ws", name: "Самоа", phone: ""},
			{code: "sm", name: "Сан-Марино", phone: ""},
			{code: "gs", name: "Южная Георгия и Южные Сандвичевы о-ва", phone: ""},
			{code: "st", name: "Сан-Томе и Принсипи", phone: ""},
			{code: "sa", name: "Саудовская Аравия", phone: ""},
			{code: "sn", name: "Сенегал", phone: ""},
			// {code: "cs", name: "Serbia", phone: ""},
			{code: "rs", name: "Сербия", phone: ""},
			{code: "sc", name: "Сейшельские о-ва", phone: ""},
			{code: "sl", name: "Сьерра-Леоне", phone: ""},
			{code: "sg", name: "Сингапур", phone: ""},
			{code: "sk", name: "Словакия", phone: ""},
			{code: "si", name: "Словения", phone: ""},
			{code: "sb", name: "Соломоновы о-ва", phone: ""},
			{code: "so", name: "Сомали", phone: ""},
			{code: "za", name: "ЮАР", phone: ""},
			{code: "kr", name: "Республика Корея", phone: ""},
			{code: "es", name: "Испания", phone: ""},
			{code: "lk", name: "Шри-Ланка", phone: ""},
			{code: "sd", name: "Судан", phone: ""},
			{code: "sr", name: "Суринам", phone: ""},
			{code: "sj", name: "Шпицберген и Ян-Майен", phone: ""},
			{code: "sz", name: "Свазиленд", phone: ""},
			{code: "se", name: "Швеция", phone: ""},
			{code: "ch", name: "Швейцария", phone: ""},
			{code: "sy", name: "Сирия", phone: ""},
			{code: "tw", name: "Тайвань", phone: ""},
			{code: "tj", name: "Таджикистан", phone: ""},
			{code: "tz", name: "Танзания", phone: ""},
			{code: "th", name: "Таиланд", phone: ""},
			{code: "tl", name: "Восточный Тимор", phone: ""},
			{code: "tg", name: "Того", phone: ""},
			{code: "tk", name: "Токелау", phone: ""},
			{code: "to", name: "Тонга", phone: ""},
			{code: "tt", name: "Тринидад и Тобаго", phone: ""},
			{code: "tn", name: "Тунис", phone: ""},
			{code: "tr", name: "Турция", phone: ""},
			{code: "tm", name: "Туркменистан", phone: ""},
			{code: "tv", name: "Тувалу", phone: ""},
			{code: "ug", name: "Уганда", phone: ""},
			{code: "ua", name: "Украина", phone: "+38 (XXX) XXX-XX-XX"},
			{code: "ae", name: "ОАЭ", phone: ""},
			{code: "us", name: "Соединенные Штаты", phone: ""},
			{code: "uy", name: "Уругвай", phone: ""},
			{code: "um", name: "Внешние малые о-ва (США)", phone: ""},
			{code: "vi", name: "Виргинские о-ва (США)", phone: ""},
			{code: "uz", name: "Узбекистан", phone: ""},
			{code: "vu", name: "Вануату", phone: ""},
			{code: "va", name: "Ватикан", phone: ""},
			{code: "ve", name: "Венесуэла", phone: ""},
			{code: "vn", name: "Вьетнам", phone: ""},
			{code: "wf", name: "Уоллис и Футуна", phone: ""},
			{code: "eh", name: "Западная Сахара", phone: ""},
			{code: "ye", name: "Йемен", phone: ""},
			{code: "zm", name: "Замбия", phone: ""},
			{code: "zw", name: "Зимбабве", phone: ""}
		];

		countries.sort(function(a, b){
			if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
			if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
			return 0;
		});

		return countries;
	},

	getByIp: function (req) {
		let geoip = require('geoip-lite');

		let ip = '94.76.102.4', // Only for testing, TODO: use req.ip instead
			geo = geoip.lookup(ip),
			country =  geo ? geo.country.toLowerCase() : '';

		return country;
	},

	getCountryName: function(code) {
		let countries = this.getAll();
		var name = '';

		countries.forEach(function (item) {
			if (item.code === code) {
				name = item.name;
			}
		});

		return name;
	}
};