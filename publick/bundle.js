/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/webpack/buildin/harmony-module.js":
/*!*********************************************************!*\
  !*** ../node_modules/webpack/buildin/harmony-module.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', function () {
  "use strict";

  var calc = __webpack_require__(/*! ./parts/calc.js */ "./parts/calc.js"),
      form = __webpack_require__(/*! ./parts/form.js */ "./parts/form.js"),
      slider = __webpack_require__(/*! ./parts/slider.js */ "./parts/slider.js"),
      tabs = __webpack_require__(/*! ./parts/tabs.js */ "./parts/tabs.js"),
      timer = __webpack_require__(/*! ./parts/timer.js */ "./parts/timer.js"),
      scrol = __webpack_require__(/*! ./parts/scrol.js */ "./parts/scrol.js"),
      modal = __webpack_require__(/*! ./parts/modal.js */ "./parts/modal.js");

  calc();
  form();
  slider();
  tabs();
  timer();
  scrol();
  modal();
});

/***/ }),

/***/ "./parts/calc.js":
/*!***********************!*\
  !*** ./parts/calc.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {!(function webpackMissingModule() { var e = new Error("Cannot find module 'core-js/modules/es6.regexp.replace'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


function calc() {
  // Calc
  var persons = document.querySelectorAll('.counter-block-input')[0],
      restDays = document.querySelectorAll('.counter-block-input')[1],
      place = document.getElementById('select'),
      totalValue = document.getElementById('total'),
      personsSum = 0,
      daysSum = 0,
      total = 0;
  totalValue.innerHTML = 0;
  persons.addEventListener('input', function (e) {
    this.value = e.target.value.replace(/[^0-9]+/g, '');
    personsSum = +this.value;
    total = (daysSum + personsSum) * 4000;

    if (restDays.value == '' || personsSum == '') {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total * place.options[place.selectedIndex].value;
    }
  });
  restDays.addEventListener('input', function (e) {
    this.value = e.target.value.replace(/[^0-9]+/g, '');
    daysSum = +this.value;
    total = (daysSum + personsSum) * 4000;

    if (persons.value == '' || daysSum == '') {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total * place.options[place.selectedIndex].value;
      place.addEventListener('change', function () {
        totalValue.innerHTML = total * place.options[place.selectedIndex].value;
      });
    }
  });
}

module.exports = calc;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./parts/form.js":
/*!***********************!*\
  !*** ./parts/form.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {!(function webpackMissingModule() { var e = new Error("Cannot find module 'core-js/modules/es6.promise'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'core-js/modules/es6.object.to-string'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



function form() {
  // form
  var message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся!',
    failure: 'Что-то пошло не так...'
  };
  var form = document.querySelectorAll('form'),
      input = document.querySelectorAll('input'),
      inputTel = document.querySelectorAll('.tel'),
      statusMessage = document.createElement('div');
  statusMessage.classList.add('status');
  form.forEach(function sendForm(item) {
    item.addEventListener('submit', function (e) {
      e.preventDefault();
      item.appendChild(statusMessage);
      var formData = new FormData(item);

      function postData(data) {
        return new Promise(function (resolve, reject) {
          var request = new XMLHttpRequest();
          request.open('POST', 'server.php');
          request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

          request.onreadystatechange = function () {
            if (request.readyState < 4) {
              resolve();
            } else if (request.readyState === 4) {
              if (request.status == 200) {
                resolve();
              } else {
                reject();
              }
            }
          };

          request.send(data);
        });
      }

      function clearInput() {
        input.forEach(function (item) {
          item.value = '';
        });
      }

      ;
      postData(formData).then(function () {
        /*           statusMessage.textContent = message.loading; */
        statusMessage.textContent = "<img src='../img/images.png'>";
      }).then(function () {
        /*           statusMessage.textContent = message.success; */
        statusMessage.innerHTML = "<img src='../img/tossl.png'>";
        setTimeout(func, 3000);
      }).catch(function () {
        /*           statusMessage.textContent = message.failure; */
        statusMessage.innerHTML = "<img src='../img/Status-dialog-error-symbolic-icon.png'>";
      }).then(clearInput);
    });
  });

  function func() {
    // // удаляем надпись о удачной отправке сообления, при закрытии мод окна
    statusMessage.innerHTML = "";
  }

  inputTel.forEach(function (item) {
    // Проверяем фокус
    item.addEventListener('focus', function () {
      // Если там ничего нет или есть, но левое
      if (!/^\+\d*$/.test(item.value)) // То вставляем знак плюса как значение
        item.value = '+';
    });
    item.addEventListener('keypress', function (e) {
      // Отменяем ввод не цифр
      if (!/\d/.test(e.key)) {
        e.preventDefault();
        alert("Прошу вводить только цыфры");
      } else {
        if (item.value.length == 2) item.value = item.value + "(";
        if (item.value.length == 6) item.value = item.value + ")-";
        if (item.value.length == 11) item.value = item.value + "-";
        if (item.value.length == 14) item.value = item.value + "-";
        if (item.value.length > 16) item.value = item.value.substring(0, 16);
      }
    });
  });
}

module.exports = form;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./parts/modal.js":
/*!************************!*\
  !*** ./parts/modal.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modal() {
  // modal
  var more = document.querySelector('.more'),
      overlay = document.querySelector('.overlay'),
      tabs = document.querySelectorAll('.description-btn');
  close = document.querySelector('.popup-close');

  function show(b) {
    b.addEventListener('click', function () {
      overlay.style.display = 'block';
      b.classList.add('more-splash');
      document.body.style.overflow = 'hidden'; // запрещаем скролл страницы при открытии мод окна
    });
    close.addEventListener('click', function () {
      overlay.style.display = 'none';
      b.classList.remove('more-splash');
      document.body.style.overflow = ''; // разрешает скролл страницы при открытии мод окна
    });
  }

  show(more);

  for (var i = 0; i < tabs.length; i++) {
    show(tabs[i]);
  }
}

module.exports = modal;

/***/ }),

/***/ "./parts/scrol.js":
/*!************************!*\
  !*** ./parts/scrol.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {!(function webpackMissingModule() { var e = new Error("Cannot find module 'core-js/modules/es6.regexp.replace'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


function scrol() {
  // плавный скрол страницы на чистом JS
  var linkNav = document.querySelectorAll('[href^="#"]'),
      //выбираем все ссылки к якорю на странице
  V = 0.5; // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)

  var _loop = function _loop(i) {
    linkNav[i].addEventListener('click', function (event) {
      //по клику на ссылку
      event.preventDefault(); //отменяем стандартное поведение

      var w = window.pageYOffset,
          // производим прокрутка 
      hash = linkNav[i].href.replace(/[^#]*(.*)/, '$1'),
          // к id элемента, к которому нужно перейти
      t = document.querySelector(hash).getBoundingClientRect().top,
          // отступ от окна браузера до id
      start = null;
      requestAnimationFrame(step);

      function step(time) {
        if (start === null) start = time;
        var progress = time - start,
            r = t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t);
        window.scrollTo(0, r);

        if (r != w + t) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash; // URL с хэшем
        }
      }
    }, false);
  };

  for (var i = 0; i < linkNav.length; i++) {
    _loop(i);
  }
}

module.exports = scrol;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./parts/slider.js":
/*!*************************!*\
  !*** ./parts/slider.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

function slider() {
  //slider 
  var slideIndex = 1,
      slides = document.querySelectorAll('.slider-item'),
      prev = document.querySelector('.prev'),
      next = document.querySelector('.next'),
      dotsWrap = document.querySelector('.slider-dots'),
      dots = document.querySelectorAll('.dot');
  showSlides(slideIndex);

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach(function (item) {
      return item.style.display = "none";
    });
    dots.forEach(function (item) {
      return item.classList.remove('dot-active');
    });
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('dot-active');
  }

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  prev.addEventListener('click', function () {
    plusSlides(-1);
  });
  next.addEventListener('click', function () {
    plusSlides(1);
  });
  dotsWrap.addEventListener('click', function (event) {
    for (var i = 0; i < dots.length + 1; i++) {
      if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
        currentSlide(i);
      }
    }
  });
}

module.exports = slider;

/***/ }),

/***/ "./parts/tabs.js":
/*!***********************!*\
  !*** ./parts/tabs.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs() {
  var info = document.querySelector('.info-header'),
      // добавляем обвертку в которой все табы
  tab = document.querySelectorAll('.info-header-tab'),
      //табы которые внутри родителя
  tabContent = document.querySelectorAll('.info-tabcontent'); // контент который будет появлятся при клике на таб

  function hideTabContent(a) {
    //скрываем все табы с инф кроме первого  hideTabContent(1)
    for (var i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }

  hideTabContent(1);

  function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.add('show');
      tabContent[b].classList.remove('hide');
    }
  }

  info.addEventListener('click', function (event) {
    var target = event.target;

    if (target && target.classList.contains('info-header-tab')) {
      for (var i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });
}

module.exports = tabs;

/***/ }),

/***/ "./parts/timer.js":
/*!************************!*\
  !*** ./parts/timer.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

function timer() {
  //timer 
  var deadline = '2019-04-21';

  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date()),
        // Date.parse переводит в колличество секунд
    seconds = Math.floor(t / 1000 % 60),
        // Math.floor округляет до целого числа
    minutes = Math.floor(t / 1000 / 60 % 60),
        hours = Math.floor(t / (1000 * 60 * 60));
    if (hours <= 9) hours = "0" + hours;
    if (minutes <= 9) minutes = "0" + minutes;
    if (seconds <= 9) seconds = "0" + seconds;
    return {
      'total': t,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function setClock(id, endtime) {
    var timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      var t = getTimeRemaining(endtime);
      hours.textContent = t.hours;
      minutes.textContent = t.minutes;
      seconds.textContent = t.seconds;

      if (t.total <= 0) {
        clearInterval(timeInterval);
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";
      }
    }
  }

  setClock('timer', deadline);
}

module.exports = timer;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map