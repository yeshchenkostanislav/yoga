function scrol() {
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
}

module.exports = scrol;