// tabs

window.addEventListener('DOMContentLoaded', function () {
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

  info.addEventListener('click', function (event) {
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
});


// плавный скрол страницы на чистом JS

let linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
  V = 0.5; // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
for (var i = 0; i < linkNav.length; i++) {
  linkNav[i].addEventListener('click', function (e) { //по клику на ссылку
    e.preventDefault(); //отменяем стандартное поведение
    var w = window.pageYOffset, // производим прокрутка 
      hash = this.href.replace(/[^#]*(.*)/, '$1'); // к id элемента, к которому нужно перейти
    t = document.querySelector(hash).getBoundingClientRect().top, // отступ от окна браузера до id
      start = null;
    requestAnimationFrame(step);

    function step(time) {
      if (start === null) start = time;
      var progress = time - start,
        r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
      window.scrollTo(0, r);
      if (r != w + t) {
        requestAnimationFrame(step)
      } else {
        location.hash = hash // URL с хэшем
      }
    }
  }, false);
}