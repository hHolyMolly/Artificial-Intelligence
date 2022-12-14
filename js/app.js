function save(name, value) {
	localStorage.setItem(name, value)
}
function get(name) {
	return localStorage.getItem(name)
}
function rem(name) {
	localStorage.removeItem(name)
}
function off() {
	localStorage.clear();
}

const timePreloader = 1000;

//<====================================================================================================================================>//
//< " Определение типа устройства " >=============================================================================================================>//
//<====================================================================================================================================>//

let isMobile = {
	Android: function () { return navigator.userAgent.match(/Android/i); },
	BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
	iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
	Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
	Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
	any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
};

if (isMobile.any()) {
	document.body.classList.add("_touch");
} else {
	document.body.classList.add("_pc");
}

//<====================================================================================================================================>//
//< " Подключение основных скриптов " >=============================================================================================================>//
//<====================================================================================================================================>//

// // Чекаем основной баланс
// let balanceHumane = async function getBalance() {
// 	// Данные моего контракта
// 	const addressMyContractForBalance = "0x614b9eDfCcA168C6e2D71d0CB07C6bFC9f135390";
// 	const abiMyContractForBalance = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "bytes", "name": "response", "type": "bytes" }], "name": "Response", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": true, "internalType": "uint256", "name": "ids", "type": "uint256" }], "name": "depAfterArbitrage", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "id", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "user", "type": "address" }], "name": "depUser", "type": "event" }, { "inputs": [], "name": "DEVELOPER", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "DEVFEE", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MAXDEP", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MINDEP", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "REFFEE", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint24[]", "name": "_id", "type": "uint24[]" }], "name": "autoTransfer", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "balance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "bonus", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "dep", "outputs": [{ "internalType": "uint256", "name": "deposit", "type": "uint256" }, { "internalType": "uint256", "name": "timestamp", "type": "uint256" }, { "internalType": "uint256", "name": "ids", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_ref", "type": "address" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "deposit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_amount", "type": "uint256" }, { "internalType": "uint256", "name": "_id", "type": "uint256" }], "name": "depositAfterArbitrage", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint24", "name": "", "type": "uint24" }], "name": "ids", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "init", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "lastAddressDeposit", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "lastTimeDeposit", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "markContract", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_maxDep", "type": "uint256" }], "name": "maxDep", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "refTransfer", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "token", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes", "name": "_id", "type": "bytes" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }, { "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "address", "name": "_contract", "type": "address" }], "name": "trade", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "users", "outputs": [{ "internalType": "uint256", "name": "deposit", "type": "uint256" }, { "internalType": "uint256", "name": "timestamp", "type": "uint256" }, { "internalType": "uint256", "name": "refReward", "type": "uint256" }, { "internalType": "uint256", "name": "totalRefValue", "type": "uint256" }, { "internalType": "uint256", "name": "amountDeposit", "type": "uint256" }, { "internalType": "uint128", "name": "id", "type": "uint128" }], "stateMutability": "view", "type": "function" }];
// 	const providerForBalance = new ethers.providers.Web3Provider(window.ethereum, "any");

// 	const myContractForBalance = new ethers.Contract(addressMyContractForBalance, abiMyContractForBalance, providerForBalance);

// 	const balanceMyContract = await myContractForBalance.balance();

// 	const parse = parseInt(balanceMyContract);
// 	balanceHumane = parse / Math.pow(10, 18);
// 	return balanceHumane;
// 	// document.getElementById("balanceContract").innerText = balanceHumane.toFixed(1);
// }

// let first = function qwe() {
// 	first = 1;
// 	return first;
// }
// console.log(first())


//<====================================================================================================================================>//
//< " Подключение динамического адаптива " >=============================================================================================================>//
//<====================================================================================================================================>//

function dynamicAdaptive() {
	function DynamicAdapt(type) {
		this.type = type;
	}

	DynamicAdapt.prototype.init = function () {
		const _this = this;
		this.оbjects = [];
		this.daClassname = "_dynamic_adapt_";
		this.nodes = document.querySelectorAll("[data-da]");

		for (let i = 0; i < this.nodes.length; i++) {
			const node = this.nodes[i];
			const data = node.dataset.da.trim();
			const dataArray = data.split(",");
			const оbject = {};
			оbject.element = node;
			оbject.parent = node.parentNode;
			оbject.destination = document.querySelector(dataArray[0].trim());
			оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
			оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
			оbject.index = this.indexInParent(оbject.parent, оbject.element);
			this.оbjects.push(оbject);
		}

		this.arraySort(this.оbjects);

		this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
			return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
		}, this);
		this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
			return Array.prototype.indexOf.call(self, item) === index;
		});

		for (let i = 0; i < this.mediaQueries.length; i++) {
			const media = this.mediaQueries[i];
			const mediaSplit = String.prototype.split.call(media, ',');
			const matchMedia = window.matchMedia(mediaSplit[0]);
			const mediaBreakpoint = mediaSplit[1];

			const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
				return item.breakpoint === mediaBreakpoint;
			});
			matchMedia.addListener(function () {
				_this.mediaHandler(matchMedia, оbjectsFilter);
			});
			this.mediaHandler(matchMedia, оbjectsFilter);
		}
	};

	DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
		if (matchMedia.matches) {
			for (let i = 0; i < оbjects.length; i++) {
				const оbject = оbjects[i];
				оbject.index = this.indexInParent(оbject.parent, оbject.element);
				this.moveTo(оbject.place, оbject.element, оbject.destination);
			}
		} else {
			for (let i = 0; i < оbjects.length; i++) {
				const оbject = оbjects[i];
				if (оbject.element.classList.contains(this.daClassname)) {
					this.moveBack(оbject.parent, оbject.element, оbject.index);
				}
			}
		}
	};

	DynamicAdapt.prototype.moveTo = function (place, element, destination) {
		element.classList.add(this.daClassname);
		if (place === 'last' || place >= destination.children.length) {
			destination.insertAdjacentElement('beforeend', element);
			return;
		}
		if (place === 'first') {
			destination.insertAdjacentElement('afterbegin', element);
			return;
		}
		destination.children[place].insertAdjacentElement('beforebegin', element);
	}

	DynamicAdapt.prototype.moveBack = function (parent, element, index) {
		element.classList.remove(this.daClassname);
		if (parent.children[index] !== undefined) {
			parent.children[index].insertAdjacentElement('beforebegin', element);
		} else {
			parent.insertAdjacentElement('beforeend', element);
		}
	}

	DynamicAdapt.prototype.indexInParent = function (parent, element) {
		const array = Array.prototype.slice.call(parent.children);
		return Array.prototype.indexOf.call(array, element);
	};

	DynamicAdapt.prototype.arraySort = function (arr) {
		if (this.type === "min") {
			Array.prototype.sort.call(arr, function (a, b) {
				if (a.breakpoint === b.breakpoint) {
					if (a.place === b.place) {
						return 0;
					}

					if (a.place === "first" || b.place === "last") {
						return -1;
					}

					if (a.place === "last" || b.place === "first") {
						return 1;
					}

					return a.place - b.place;
				}

				return a.breakpoint - b.breakpoint;
			});
		} else {
			Array.prototype.sort.call(arr, function (a, b) {
				if (a.breakpoint === b.breakpoint) {
					if (a.place === b.place) {
						return 0;
					}

					if (a.place === "first" || b.place === "last") {
						return 1;
					}

					if (a.place === "last" || b.place === "first") {
						return -1;
					}

					return b.place - a.place;
				}

				return b.breakpoint - a.breakpoint;
			});
			return;
		}
	};

	const da = new DynamicAdapt("max");
	da.init();

}
dynamicAdaptive();;

//<====================================================================================================================================>//
//< " Подключение меню бургера " >=============================================================================================================>//
//<====================================================================================================================================>//

function myBurger() {
	const burgerOpen = document.getElementById("menu-open");
	const burgerContent = document.getElementById("menu-content");

	let unlock = true;
	const time = 500;

	const lockPadding = document.querySelectorAll("._lock-padding");
	const body = document.body;

	function changeActive() {
		if (!burgerOpen.classList.contains("_active")) {
			if (unlock) {
				burgerContent.classList.add("_active");
				burgerOpen.classList.add("_active");
				bodyLock();
			}
		} else {
			if (unlock) {
				removeActive()
				bodyUnLock();
			}
		}
	}

	function removeActive() {
		burgerContent.classList.remove("_active");
		burgerOpen.classList.remove("_active");
	}

	if (burgerOpen && burgerContent) {
		burgerOpen.addEventListener("click", changeActive);

		document.addEventListener("click", function (e) {
			const elementTarget = e.target;
			if (elementTarget.closest("[data-popup-open]") && unlock) {
				removeActive();
			}
		});

		document.addEventListener("keydown", function (e) {
			if (e.code === "Escape" && unlock) {
				removeActive();
				bodyUnLock();
			}
		});
	}

	function bodyLock() {
		const lockPaddingValue = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";

		if (lockPadding) {
			lockPadding.forEach(elem => {
				elem.style.paddingRight = lockPaddingValue;
			});
		}
		body.style.paddingRight = lockPaddingValue;
		body.classList.add("_lock-scroll");

		unlock = false;
		setTimeout(() => {
			unlock = true;
		}, time);
	}

	function bodyUnLock() {
		setTimeout(() => {
			if (lockPadding) {
				lockPadding.forEach(elem => {
					elem.style.paddingRight = "0px";
				});
			}
			body.style.paddingRight = "0px";
			body.classList.remove("_lock-scroll");
		}, time);

		unlock = false;
		setTimeout(() => {
			unlock = true;
		}, time);
	}
}
myBurger();

//<====================================================================================================================================>//
//< " Подключение счетчика (плюс/минус) " >=============================================================================================================>//
//<====================================================================================================================================>//

/*
	Снипет (HTML): count
*/

/* function quantity() {
	if (document.querySelectorAll('[data-quantity]').length > 0) {
		let minValue = 1, // Минимальное значение
			maxValue = 20; // Максимальное значение

		const counters = document.querySelectorAll('[data-quantity]');

		counters.forEach((counter) => {
			const input = counter.querySelector("[data-quantity-input]"),
				plus = counter.querySelector("[data-quantity-plus]"),
				minus = counter.querySelector("[data-quantity-minus]");

			let value = parseInt(input.value);

			plus.addEventListener("click", function () {
				value++;
				changeValueInput()
			});

			minus.addEventListener("click", function () {
				value--;
				changeValueInput()
			});

			window.addEventListener("DOMContentLoaded", changeValueInput);

			function changeValueInput() {
				onButton(minus, minValue);
				onButton(plus, maxValue);

				function onButton(button, whatValue) {
					if (value === whatValue) {
						button.setAttribute("disabled", "");
					} else {
						button.removeAttribute("disabled");
					}

					input.value = value;
					input.setAttribute("value", value)
				}
			}
		});
	}
}
quantity(); */

//<====================================================================================================================================>//
//< " Подключение модальных окон (попап) " >=============================================================================================================>//
//<====================================================================================================================================>//

/*
	Снипет (HTML): op (создать кнопку открытия попапа)
*/

function myPopups() {
	const links = document.querySelectorAll("[data-popup-open]");
	const lockPadding = document.querySelectorAll(".lock-padding");
	const body = document.body;

	let unlock = true;

	const parentContainer = document.getElementById("modal-wrapper");
	const time = parentContainer.dataset.popupSpeed ? Number(parentContainer.dataset.popupSpeed) : 500;

	if (links) {
		links.forEach(link => {
			link.addEventListener("click", function (e) {
				const popupName = this.getAttribute("data-popup");
				const currentPopup = document.getElementById(popupName);
				popupOpen(currentPopup);
			});
		});

		const close = document.querySelectorAll("[data-popup-close]");

		close.forEach(item => {
			item.addEventListener("click", function (e) {
				popupClose(item.closest(".popup"));
			});
		});

		function popupOpen(currentPopup) {
			if (currentPopup && unlock) {
				const popupActive = document.querySelector(".popup._active");

				if (popupActive) {
					popupClose(popupActive, false);
				} else {
					bodyLock();
				}

				currentPopup.classList.add("_active");

				currentPopup.addEventListener("click", function (e) {
					if (!e.target.closest(".popup__body")) {
						popupClose(e.target.closest(".popup"));
					}
				});
			}
		}

		function popupClose(popupActive, doUnlock = true) {
			if (unlock) {
				popupActive.classList.remove("_active");
				if (doUnlock) {
					bodyUnLock();
				}
			}
		}

		function bodyLock() {
			const lockPaddingValue = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";

			if (lockPadding) {
				lockPadding.forEach(elem => {
					elem.style.paddingRight = lockPaddingValue;
				});
			}
			body.style.paddingRight = lockPaddingValue;
			body.classList.add("_lock-scroll");

			unlock = false;
			setTimeout(() => {
				unlock = true;
			}, time);
		}

		function bodyUnLock() {
			setTimeout(() => {
				if (lockPadding) {
					lockPadding.forEach(elem => {
						elem.style.paddingRight = "0px";
					});
				}
				body.style.paddingRight = "0px";
				body.classList.remove("_lock-scroll");
			}, time);

			unlock = false;
			setTimeout(() => {
				unlock = true;
			}, time);
		}

		document.addEventListener("keydown", function (e) {
			if (e.code === "Escape") {
				const popupActive = document.querySelector(".popup._active");
				popupClose(popupActive);
			}
		});

		(function () {
			if (!Element.prototype.closest) {
				Element.prototype.closest = function (css) {
					var node = this;
					while (node) {
						if (node.matches(css)) return node;
						else node = node.parentElement;
					}
					return null;
				};
			}
		})();
		(function () {
			if (!Element.prototype.matches) {
				Element.prototype.mathes = Element.prototype.matchesSelector ||
					Element.prototype.webkitMatchesSelector ||
					Element.prototype.mozMatchesSelector ||
					Element.prototype.msMatchesSelector;
			}
		})();
	}
}
myPopups();

//<====================================================================================================================================>//
//< " Добавление хедеру класса при скролле " >=============================================================================================================>//
//<====================================================================================================================================>//

/* function scrollHeader() {
	const header = document.querySelector('.header');

	const callback = function (entries) {
		if (entries[0].isIntersecting) {
			header.classList.remove('_scroll');
		} else {
			header.classList.add('_scroll');
		}
	};

	const headerObserver = new IntersectionObserver(callback);
	headerObserver.observe(header);
}
scrollHeader();; */

//<====================================================================================================================================>//
//< " Подключение спойлеров/аккардеонов " >=============================================================================================================>//
//<====================================================================================================================================>//

/*
	Снипет (HTML): sp
*/

function mySpollers() {
	let animationSpollers = 500;

	const spollersArray = document.querySelectorAll('[data-spollers]');

	if (spollersArray.length > 0) {
		// Получение обычных спойлеров
		const spollersRegular = Array.from(spollersArray).filter(function (item, index, self) {
			return !item.dataset.spollers.split(",")[0];
		});
		// Инициализация обычных спойлеров
		if (spollersRegular.length > 0) {
			initSpollers(spollersRegular);
		}

		// Получение спойлеров с медиа запросами
		const spollersMedia = Array.from(spollersArray).filter(function (item, index, self) {
			return item.dataset.spollers.split(",")[0];
		});

		// Инициализация спойлеров с медиа запросами
		if (spollersMedia.length > 0) {
			const breakpointsArray = [];
			spollersMedia.forEach(item => {
				const params = item.dataset.spollers;
				const breakpoint = {};
				const paramsArray = params.split(",");
				breakpoint.value = paramsArray[0];
				breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
				breakpoint.item = item;
				breakpointsArray.push(breakpoint);
			});

			// Получаем уникальные брейкпоинты
			let mediaQueries = breakpointsArray.map(function (item) {
				return '(' + item.type + "-width: " + item.value + "px)," + item.value + ',' + item.type;
			});
			mediaQueries = mediaQueries.filter(function (item, index, self) {
				return self.indexOf(item) === index;
			});

			// Работаем с каждым брейкпоинтом
			mediaQueries.forEach(breakpoint => {
				const paramsArray = breakpoint.split(",");
				const mediaBreakpoint = paramsArray[1];
				const mediaType = paramsArray[2];
				const matchMedia = window.matchMedia(paramsArray[0]);

				// Объекты с нужными условиями
				const spollersArray = breakpointsArray.filter(function (item) {
					if (item.value === mediaBreakpoint && item.type === mediaType) {
						return true;
					}
				});
				// Событие
				matchMedia.addListener(function () {
					initSpollers(spollersArray, matchMedia);
				});
				initSpollers(spollersArray, matchMedia);
			});
		}
		// Инициализация
		function initSpollers(spollersArray, matchMedia = false) {
			spollersArray.forEach(spollersBlock => {
				spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
				if (matchMedia.matches || !matchMedia) {
					spollersBlock.classList.add('_init');
					initSpollerBody(spollersBlock);
					spollersBlock.addEventListener("click", setSpollerAction);
				} else {
					spollersBlock.classList.remove('_init');
					initSpollerBody(spollersBlock, false);
					spollersBlock.removeEventListener("click", setSpollerAction);
				}
			});
		}
		// Работа с контентом
		function initSpollerBody(spollersBlock, hideSpollerBody = true) {
			const spollerTitles = spollersBlock.querySelectorAll('[data-spoller]');
			if (spollerTitles.length > 0) {
				spollerTitles.forEach(spollerTitle => {
					if (hideSpollerBody) {
						spollerTitle.removeAttribute('tabindex');
						if (!spollerTitle.classList.contains('_active')) {
							spollerTitle.nextElementSibling.hidden = true;
						}
					} else {
						spollerTitle.setAttribute('tabindex', '-1');
						spollerTitle.nextElementSibling.hidden = false;
					}
				});
			}
		}
		function setSpollerAction(e) {
			const el = e.target;
			if (el.hasAttribute('data-spoller') || el.closest('[data-spoller]')) {
				const spollerTitle = el.hasAttribute('data-spoller') ? el : el.closest('[data-spoller]');
				const spollersBlock = spollerTitle.closest('[data-spollers]');
				const oneSpoller = spollersBlock.hasAttribute('data-one-spoller') ? true : false;
				if (!spollersBlock.querySelectorAll('._slide').length) {
					if (oneSpoller && !spollerTitle.classList.contains('_active')) {
						hideSpollersBody(spollersBlock);
					}
					spollerTitle.classList.toggle('_active');
					_slideToggle(spollerTitle.nextElementSibling, animationSpollers);
				}
				e.preventDefault();
			}
		}
		function hideSpollersBody(spollersBlock) {
			const spollerActiveTitle = spollersBlock.querySelector('[data-spoller]._active');
			if (spollerActiveTitle) {
				spollerActiveTitle.classList.remove('_active');
				_slideUp(spollerActiveTitle.nextElementSibling, animationSpollers);
			}
		}
	}

	let _slideUp = (target, duration = animationSpollers) => {
		if (!target.classList.contains('_slide')) {
			target.classList.add('_slide');
			target.style.transitionProperty = 'height, margin, padding';
			target.style.transitionDuration = duration + 'ms';
			target.style.height = target.offsetHeight + 'px';
			target.offsetHeight;
			target.style.overflow = 'hidden';
			target.style.height = 0;
			target.style.paddingTop = 0;
			target.style.paddingBottom = 0;
			target.style.marginTop = 0;
			target.style.marginBottom = 0;
			window.setTimeout(() => {
				target.hidden = true;
				target.style.removeProperty('height');
				target.style.removeProperty('padding-top');
				target.style.removeProperty('padding-bottom');
				target.style.removeProperty('margin-top');
				target.style.removeProperty('margin-bottom');
				target.style.removeProperty('overflow');
				target.style.removeProperty('transition-duration');
				target.style.removeProperty('transition-property');
				target.classList.remove('_slide');
			}, duration);
		}
	}
	let _slideDown = (target, duration = animationSpollers) => {
		if (!target.classList.contains('_slide')) {
			target.classList.add('_slide');
			if (target.hidden) {
				target.hidden = false;
			}
			let height = target.offsetHeight;
			target.style.overflow = 'hidden';
			target.style.height = 0;
			target.style.paddingTop = 0;
			target.style.paddingBottom = 0;
			target.style.marginTop = 0;
			target.style.marginBottom = 0;
			target.offsetHeight;
			target.style.transitionProperty = "height, margin, padding";
			target.style.transitionDuration = duration + 'ms';
			target.style.height = height + 'px';
			target.style.removeProperty('padding-top');
			target.style.removeProperty('padding-bottom');
			target.style.removeProperty('margin-top');
			target.style.removeProperty('margin-bottom');
			window.setTimeout(() => {
				target.style.removeProperty('height');
				target.style.removeProperty('overflow');
				target.style.removeProperty('transition-duration');
				target.style.removeProperty('transition-property');
				target.classList.remove('_slide');
			}, duration);
		}
	}
	let _slideToggle = (target, duration = animationSpollers) => {
		if (target.hidden) {
			return _slideDown(target, duration);
		} else {
			return _slideUp(target, duration);
		}
	}
}
mySpollers();

//<====================================================================================================================================>//
//< " Подключение валидации форм " >=============================================================================================================>//
//<====================================================================================================================================>//

/* function myForms() {
	const forms = document.querySelectorAll("form");

	if (forms.length > 0) {
		let error = 0;

		let textError;
		let ErrorNullValue = "This is a required field";

		forms.forEach(form => {
			const inputs = form.querySelectorAll("input");
			const textareas = form.querySelectorAll("textarea");
			const checkboxs = form.querySelectorAll('input[type="checkbox"]');
			const phones = form.querySelectorAll('input[type="tel"]');

			if (form.classList.contains("_required")) {
				form.addEventListener("submit", formValid);
				inputs.forEach(input => {
					input.addEventListener("focus", formFocus);
				});
				textareas.forEach(textarea => {
					textarea.addEventListener("focus", formFocus);
				});
				inputs.forEach(input => {
					input.addEventListener("blur", function (e) {
						const elementTarget = e.target;

						if (!elementTarget.classList.contains("_invalid")) {
							elementTarget.classList.add("_invalid");

							textError = this.getAttribute("data-form-prompt");
							if (textError === null || textError === "") {
								textError = `${ErrorNullValue}`;
							}

							if (input.value.match(/^[ ]+$/)) {
								input.classList.add("_invalid");
								error++;
								input.value = '';
							}

							if (!elementTarget.classList.contains("_email") && !elementTarget.classList.contains("_password") && !elementTarget.classList.contains("_phone")) {
								if (input.value.length < 2) {
									input.classList.add("_invalid");
									let textInfo = `${textError}`;
									formBlur(textInfo, e)
								} else {
									input.classList.remove("_invalid");
								}
							}
							if (elementTarget.classList.contains("_email")) {
								const emailValid = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

								function validateEmail(value) {
									return emailValid.test(value);
								}

								if (!validateEmail(input.value)) {
									input.classList.add("_invalid");
									let textInfo = `${textError}`;
									formBlur(textInfo, e)
								} else {
									input.classList.remove("_invalid");
								}
							}
							if (elementTarget.classList.contains("_password")) {
								const minimum8Chars = /^.{8,}$/;
								const beginWithoutDigit = /^\D.*$/;
								const withoutSpecialChars = /^[^-() /]*$/;
								const containsLetters = /^.*[a-zA-Z]+.*$/;
								if (minimum8Chars.test(input.value) && beginWithoutDigit.test(input.value) && withoutSpecialChars.test(input.value) && containsLetters.test(input.value)) {
									input.classList.remove("_invalid");
								} else {
									input.classList.add("_invalid");
									let textInfo = `${textError}`;
									formBlur(textInfo, e)
								}
							}
							if (elementTarget.classList.contains("_phone")) {
								phones.forEach(phone => {
									const requiredPhone = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
									const valid = requiredPhone.test(phone.value);

									if (!valid) {
										input.classList.add("_invalid");
									} else {
										input.classList.remove("_invalid");
									}
								});

								let textInfo = `${textError}`;
								formBlur(textInfo, e)
							}
						}
					});
				});
				textareas.forEach(textarea => {
					textarea.addEventListener("blur", function (e) {
						const elementTarget = e.target;

						if (!elementTarget.classList.contains("_invalid")) {
							textError = this.getAttribute("data-form-prompt");
							if (textError === null || textError === "") {
								textError = `${ErrorNullValue}`;
							}

							if (textarea.value.match(/^[ ]+$/)) {
								textarea.classList.add("_invalid");
								error++;
								textarea.value = '';
							}

							if (textarea.value.length < 2) {
								textarea.classList.add("_invalid");
								let textInfo = `${textError}`;

								if (textarea.classList.contains("_invalid")) {
									if (textarea.parentElement.querySelectorAll(".field__error").length < 1) {
										const template = `
											<div class="field__error field-error">
												<span class="field-error__icon">!</span>
												<div class="field-error__dropdown">
													${textInfo}
												</div>
											</div>
											`;

										textarea.parentElement.insertAdjacentHTML("beforeEnd", template);
									}
								} else {
									textarea.parentElement.querySelectorAll(".field__error").forEach(error => {
										error.remove()
									});
								}
							}
						}
					});
				});
				checkboxs.forEach(checkbox => {
					checkbox.addEventListener("change", function () {
						validCheckbox(checkbox)
					});
				});

				document.addEventListener("click", function (e) {
					const elementTarget = e.target;

					if (isMobile.any()) {
						const iconErrors = document.querySelectorAll(".field-error__icon");
						if (iconErrors.length > 0) {
							iconErrors.forEach(iconError => {
								if (!iconError.nextElementSibling.classList.contains("_active")) {
									if (elementTarget === iconError) {
										iconError.nextElementSibling.classList.add("_active");
									}
								} else {
									iconError.nextElementSibling.classList.remove("_active");

									if (elementTarget != iconError) {
										iconError.nextElementSibling.classList.remove("_active");
									}
								}
							});
						}
					}
				});
			}

			function formBlur(textInfo, e) {
				const elementTarget = e.target;

				if (elementTarget.classList.contains("_invalid")) {
					if (elementTarget.parentElement.querySelectorAll(".field__error").length < 1) {
						const template = `
							<div class="field__error field-error">
								<span class="field-error__icon">!</span>
								<div class="field-error__dropdown">
									${textInfo}
								</div>
							</div>
							`;

						elementTarget.parentElement.insertAdjacentHTML("beforeEnd", template);
					}
				} else {
					elementTarget.parentElement.querySelectorAll(".field__error").forEach(error => {
						error.remove()
					});
				}
			}

			function formFocus(e) {
				const elementTarget = e.target;
				if (elementTarget.classList.contains("_invalid")) {
					elementTarget.classList.remove("_invalid");
					elementTarget.parentElement.querySelectorAll(".field__error").forEach(error => {
						error.remove()
					});
				}
			}

			function validCheckbox(checkbox) {
				if (checkbox.classList.contains("_required")) {
					textError = checkbox.getAttribute("data-form-prompt");
					if (textError === null || textError === "") {
						textError = `${ErrorNullValue}`;
					}

					if (checkbox.checked === true) {
						checkbox.classList.remove("_invalid");
						checkbox.parentElement.querySelectorAll(".field__error").forEach(error => {
							error.remove()
						});
					} else {
						checkbox.classList.add("_invalid");
						error++;
						let textInfo = `${textError}`;

						if (checkbox.parentElement.querySelectorAll(".field__error").length < 1) {
							const template = `
										<div class="field__error field-error">
											<span class="field-error__icon">!</span>
											<div class="field-error__dropdown">
												${textInfo}
											</div>
										</div>
										`;

							checkbox.parentElement.insertAdjacentHTML("beforeEnd", template);
						}
					}
				}
			}

			function formValid(e) {
				inputs.forEach(input => {
					if (input.classList.contains("_required")) {
						textError = input.getAttribute("data-form-prompt");
						if (textError === null || textError === "") {
							textError = `${ErrorNullValue}`;
						}

						validAllInputs()

						if (!input.classList.contains("_email") && !input.classList.contains("_password") && !input.classList.contains("_phone") && !input.classList.contains("_name")) {
							let textInfo = `${textError}`;
							addError(textInfo)
						}

						if (input.classList.contains("_email")) {
							validEmail()
						}
						if (input.classList.contains("_password")) {
							validPassword()
						}
						if (input.classList.contains("_phone")) {
							validPhone()
						}

						function validEmail() {
							const emailValid = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

							function validateEmail(value) {
								return emailValid.test(value);
							}

							if (!validateEmail(input.value)) {
								input.classList.add("_invalid");
								error++;
							} else {
								input.classList.remove("_invalid");
							}

							let textInfo = `${textError}`;
							addError(textInfo)
						}

						function validPassword() {
							const minimum8Chars = /^.{8,}$/;
							const beginWithoutDigit = /^\D.*$/;
							const withoutSpecialChars = /^[^-() /]*$/;
							const containsLetters = /^.*[a-zA-Z]+.*$/;

							if (minimum8Chars.test(input.value) &&
								beginWithoutDigit.test(input.value) &&
								withoutSpecialChars.test(input.value) &&
								containsLetters.test(input.value)) {
								input.classList.remove("_invalid");
							} else {
								input.classList.add("_invalid");
								error++;
							}

							let textInfo = `${textError}`;
							addError(textInfo)
						}

						function validPhone() {
							phones.forEach(phone => {
								const requiredPhone = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
								const valid = requiredPhone.test(phone.value);

								if (!valid) {
									input.classList.add("_invalid");
									error++;
								} else {
									input.classList.remove("_invalid");
								}
							});

							let textInfo = `${textError}`;
							addError(textInfo)
						}

						function validAllInputs() {
							if (input.value.length < 2) {
								input.classList.add("_invalid");
								error++;
							} else {
								input.classList.remove("_invalid");
							}

							if (input.value.match(/^[ ]+$/)) {
								input.classList.add("_invalid");
								error++;
								input.value = '';
							}
						}

						function addError(textInfo) {
							if (input.classList.contains("_invalid")) {
								if (input.parentElement.querySelectorAll(".field__error").length < 1) {
									const template = `
										<div class="field__error field-error">
											<span class="field-error__icon">!</span>
											<div class="field-error__dropdown">
												${textInfo}
											</div>
										</div>
										`;

									input.parentElement.insertAdjacentHTML("beforeEnd", template);
								}
							} else {
								input.parentElement.querySelectorAll(".field__error").forEach(error => {
									error.remove()
								});
							}
						}
					}
				});
				textareas.forEach(textarea => {
					if (textarea.classList.contains("_required")) {
						textError = textarea.getAttribute("data-form-prompt");
						if (textError === null || textError === "") {
							textError = `${ErrorNullValue}`;
						}

						if (textarea.value.match(/^[ ]+$/)) {
							textarea.classList.add("_invalid");
							error++;
							textarea.value = '';
						}

						if (textarea.value.length < 2) {
							textarea.classList.add("_invalid");

							let textInfo = `${textError}`;

							if (textarea.classList.contains("_invalid")) {
								if (textarea.parentElement.querySelectorAll(".field__error").length < 1) {
									const template = `
										<div class="field__error field-error">
											<span class="field-error__icon">!</span>
											<div class="field-error__dropdown">
												${textInfo}
											</div>
										</div>
										`;

									textarea.parentElement.insertAdjacentHTML("beforeEnd", template);
								}
							} else {
								textarea.parentElement.querySelectorAll(".field__error").forEach(error => {
									error.remove()
								});
							}
						} else {
							textarea.classList.remove("_invalid");
						}
					}
				});
				checkboxs.forEach(checkbox => {
					validCheckbox(checkbox)
				});

				const invalids = form.querySelectorAll("._invalid");
				if (invalids.length < 1) {
					error = 0;
				}

				if (error > 0) {
					e.preventDefault();
				}
			}
		});
	}
}
myForms(); */

//<====================================================================================================================================>//
//< " Подключение табов " >=============================================================================================================>//
//<====================================================================================================================================>//

/* function myTabs() {
	document.addEventListener("click", (e) => {
		const elementTarget = e.target;

		if (elementTarget.closest("[data-tab-btn]")) {
			const att = elementTarget.getAttribute("data-tab-btn");
			const modernAtt = `[data-tab="${att}"]`;

			const itemTab = elementTarget.closest("[data-tabs]").querySelector(`${modernAtt}`);

			itemTab.style.display = "block";
			const buttons = elementTarget.closest("[data-tabs]").querySelectorAll("[data-tab-btn]");

			console.log(elementTarget.closest("[data-tabs]").querySelector(`${modernAtt}`).getBoundingClientRect())

			buttons.forEach(button => {
				button.classList.remove("_active");
			});
			elementTarget.classList.add("_active");

			const tabs = elementTarget.closest("[data-tabs]").querySelectorAll("[data-tab]");

			tabs.forEach((tab) => {
				if (tab.getAttribute("data-tab") === att) {
				} else {
					tab.style.display = "none";
				}
			});
		}
	});
}
myTabs(); */

//<====================================================================================================================================>//
//< " Подключение звездного рейтинга " >=============================================================================================================>//
//<====================================================================================================================================>//

/*
	Снипет (HTML): rtng
*/

/* function myRatingStars() {
	const ratings = document.querySelectorAll("[data-rating-stars]");

	if (ratings.length > 0) {
		let ratingActive, ratingValue;

		for (let index = 0; index < ratings.length; index++) {
			const rating = ratings[index];

			function initRating() {
				ratingVars(rating)
				setRating()

				if (rating.hasAttribute("data-rating-stars-set")) {
					const items = rating.querySelectorAll("[data-rating-item]");
					for (let index = 0; index < items.length; index++) {
						const item = items[index];

						item.style.cursor = "pointer";

						item.addEventListener("mouseenter", function () {
							ratingVars(rating)
							setRating(item.value)
						});
						item.addEventListener("mouseleave", function () {
							setRating()
						});
						item.addEventListener("click", function () {
							ratingVars(rating)

							if (this.getAttribute("data-rating-text")) {
								ratingValue.innerHTML = this.getAttribute("data-rating-text");
							} else {
								ratingValue.innerHTML = index + 1;
							}

							setRating()
						});
					}
				}
			}
			initRating();

			function ratingVars() {
				ratingActive = rating.querySelector("[data-rating-stars-active]");
				ratingValue = rating.querySelector("[data-rating-stars-value]");
			}

			function setRating(index = ratingValue.innerHTML) {
				const ratingActiveWidth = index / 0.05;
				ratingActive.style.width = `${ratingActiveWidth}%`;
			}
		}
	}
}
myRatingStars(); */

//<====================================================================================================================================>//
//< " Подключение слайдера " >=============================================================================================================>//
//<====================================================================================================================================>//

/* const slidersDefault = () => {
	const sliders = document.querySelectorAll('.swiper');
	const prevArrow = document.querySelectorAll('.swiper-button-prev');
	const nextArrow = document.querySelectorAll('.swiper-button-next');
	const pagination = document.querySelectorAll('.swiper-pagination');

	sliders.forEach((slider, index) => {
		let sliderLength = slider.children[0].children.length;
		let result = (sliderLength > 1) ? [index] : false;

		const swiper = new Swiper(slider, {
			slidesPerView: 1,
			spaceBetween: 15,
			grabCursor: true,
			loop: result,
			speed: 800,

			// autoplay: {
			// 	delay: 3500,
			// },

			pagination: {
				el: pagination[index],
				clickable: true,
			},

			navigation: {
				nextEl: nextArrow[index],
				prevEl: prevArrow[index],
			},

			breakpoints: {
				767.8: {},
			}
		});
	});
}
window.addEventListener('load', slidersDefault); */

//<====================================================================================================================================>//
//< " Подключение прелоадера " >=============================================================================================================>//
//<====================================================================================================================================>//

if (document.getElementById('preloader')) {
	window.addEventListener("load", () => {
		function loadPage() {
			return new Promise((resolve) => {
				setTimeout(resolve, timePreloader);
			});
		}

		loadPage().then(() => {
			document.body.classList.remove("_lock-scroll");
			document.getElementById('preloader').remove();
		});
	});
}

//<====================================================================================================================================>//
//< " Подключение селектов " >=============================================================================================================>//
//<====================================================================================================================================>//

const selects = document.querySelectorAll("[data-select-body]");

// Заготовка на получение localStorage
function selectGetLocal(whatGet = "") {
	const checkGet = get(whatGet);

	if (checkGet === null) {
	} else {
		const select = document.querySelector(`[data-select-${whatGet}]`)
		if (select) {
			const selectedValue = select.querySelector("[data-select-selected]");
			selectedValue.setAttribute("data-select-selected", checkGet);

			select.querySelectorAll("[data-select-option]").forEach((item) => {
				if (selectedValue.dataset.selectSelected === item.dataset.selectOption) {
					selectedValue.innerText = item.innerText;
				}
			});
		}
	}
}

// Заготовка на сохранение localStorage
function selectSaveLocal(e, item, optionSelected = "") {
	if (e.closest(`[data-select-${optionSelected}]`)) {
		save(`${optionSelected}`, item.dataset.selectOption);
	}
}

selectGetLocal(whatGet = "language");

// Функция добавление/удаления активного класса у селекта + делегирование и т.д.
function mySelects() {

	// Добавляем активный класс
	function addClass(elem) {
		elem.querySelector("[data-select-button]").classList.add("_active");
		elem.querySelector("[data-select-dropdown]").classList.add("_active");
	}

	// Удаляем активный класс
	function removeClass(elem) {
		elem.querySelector("[data-select-button]").classList.remove("_active");
		elem.querySelector("[data-select-dropdown]").classList.remove("_active");
	}

	selects.forEach((select) => {
		select.addEventListener("click", (e) => {
			const elementTarget = e.target;

			const button = elementTarget.closest("[data-select-button]");
			if (button) {
				!button.classList.contains("_active") ? addClass(select) : removeClass(select);

				const selects = document.querySelectorAll("[data-select-body]");
				selects.forEach((select) => {
					if (select === elementTarget.closest("[data-select-body]")) {
					} else {
						removeClass(select);
					}
				});
			}

			const option = elementTarget.closest("[data-select-item]");
			if (option) {
				removeClass(select);

				const selected = select.querySelector("[data-select-selected]");
				selected.innerText = option.innerText;

				selectSaveLocal(elementTarget, option, optionSelected = "language");

				if (option.getAttribute("data-select-option") && selected.getAttribute("data-select-selected")) {
					selected.setAttribute("data-select-selected", `${option.dataset.selectOption}`);
				}
			}
		});
	});

	document.addEventListener("click", (e) => {
		const elementTarget = e.target;

		const selects = document.querySelectorAll("[data-select-body]");
		selects.forEach((select) => {
			if (!elementTarget.closest("[data-select-button]") && !elementTarget.closest("[data-select-dropdown]")) {
				removeClass(select);
			}
		});
	});
}
mySelects();