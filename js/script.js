// tabs

window.addEventListener('DOMContentLoaded', () => {

  let info = document.querySelector('.info-header'), // добавляем обвертку в которой все табы
    tab = document.querySelectorAll('.info-header-tab'), //табы которые внутри родителя
    tabContent = document.querySelectorAll('.info-tabcontent'); // контент который будет появлятся при клике на таб

  function hideTabContent(a) { //скрываем все табы с инф кроме первого  hideTabContent(1)
    for (let i = a; i < tabContent.length; i++) {
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

  info.addEventListener('click', (event) => {
    let target = event.target;
    if (target && target.classList.contains('info-header-tab')) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });

  //timer 

  let deadline = '2019-04-21';

  function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()), // Date.parse переводит в колличество секунд
      seconds = Math.floor((t / 1000) % 60), // Math.floor округляет до целого числа
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor((t / (1000 * 60 * 60)));

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
    let timer = document.getElementById(id),
      hours = timer.querySelector('.hours'),
      minutes = timer.querySelector('.minutes'),
      seconds = timer.querySelector('.seconds'),
      timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      let t = getTimeRemaining(endtime);
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

  // плавный скрол страницы на чистом JS

  let linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
    V = 0.5; // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)

  for (let i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', (event) => { //по клику на ссылку

      event.preventDefault(); //отменяем стандартное поведение

      let w = window.pageYOffset, // производим прокрутка 
        hash = linkNav[i].href.replace(/[^#]*(.*)/, '$1'), // к id элемента, к которому нужно перейти
        t = document.querySelector(hash).getBoundingClientRect().top, // отступ от окна браузера до id
        start = null;

      requestAnimationFrame(step);

      function step(time) {

        if (start === null) start = time;
        let progress = time - start,
          r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));

        window.scrollTo(0, r);

        if (r != w + t) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash; // URL с хэшем
        }
      }
    }, false);
  }

  // modal

  let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    tabs = document.querySelectorAll('.description-btn')
  close = document.querySelector('.popup-close');

  function show(b) {
    b.addEventListener('click', () => {
      overlay.style.display = 'block';
      b.classList.add('more-splash');
      document.body.style.overflow = 'hidden'; // запрещаем скролл страницы при открытии мод окна
    });
    close.addEventListener('click', () => {
      overlay.style.display = 'none';
      b.classList.remove('more-splash');
      document.body.style.overflow = ''; // разрешает скролл страницы при открытии мод окна
    });
  }
  show(more);

  for (let i = 0; i < tabs.length; i++) {
    show(tabs[i]);
  }


  // form

  let message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся!',
    failure: 'Что-то пошло не так...'
  }

  let form = document.querySelectorAll('form'),
    input = document.querySelectorAll('input'),
    inputTel = document.querySelectorAll('.tel'),
    statusMessage = document.createElement('div');
  statusMessage.classList.add('status');


  form.forEach(function sendForm(item) {

    item.addEventListener('submit', (e) => {
      e.preventDefault();
      item.appendChild(statusMessage);
      let formData = new FormData(item);

      function postData(data) {
        return new Promise(function (resolve, reject) {
          let request = new XMLHttpRequest();
          request.open('POST', 'server.php');
          request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

          request.onreadystatechange = function () {
            if (request.readyState < 4) {
              resolve()
            } else if (request.readyState === 4) {
              if (request.status == 200 && request.status < 300) {
                resolve()
              } else {
                reject()
              }
            }
          }
          request.send(data);
        })
      }

      function clearInput() {
        input.forEach((item) => {
          item.value = '';
        });
      };

      postData(formData)
        .then(() => {
          /*           statusMessage.textContent = message.loading; */
          statusMessage.textContent = "<img src='../img/images.png'>";
        })
        .then(() => {
          /*           statusMessage.textContent = message.success; */
          statusMessage.innerHTML = "<img src='../img/tossl.png'>";
          setTimeout(func, 3000);
        })
        .catch(() => {
          /*           statusMessage.textContent = message.failure; */
          statusMessage.innerHTML = "<img src='../img/Status-dialog-error-symbolic-icon.png'>";
        })
        .then(clearInput)
    });
  });

  function func() { // // удаляем надпись о удачной отправке сообления, при закрытии мод окна
    statusMessage.innerHTML = "";
  }


  inputTel.forEach(function (item) {
    // Проверяем фокус
    item.addEventListener('focus', () => {
      // Если там ничего нет или есть, но левое
      if (!/^\+\d*$/.test(item.value))
        // То вставляем знак плюса как значение
        item.value = '+';
    });

    item.addEventListener('keypress', (e) => {
      // Отменяем ввод не цифр
      if (!/\d/.test(e.key)) {
        e.preventDefault();
        alert("Прошу вводить только цыфры")
      } else {
        if (item.value.length == 2) item.value = item.value + "(";
        if (item.value.length == 6) item.value = item.value + ")-";
        if (item.value.length == 11) item.value = item.value + "-";
        if (item.value.length == 14) item.value = item.value + "-";
        if (item.value.length > 16) item.value = item.value.substring(0, 16);
      }
    });
  });
});