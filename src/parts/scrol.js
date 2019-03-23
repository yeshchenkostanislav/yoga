function scrol() {

  let linkNav = document.querySelectorAll('[href^="#"]'),
    V = 0.5;

  for (let i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', (event) => {

      event.preventDefault();

      let w = window.pageYOffset,
        hash = linkNav[i].href.replace(/[^#]*(.*)/, '$1'),
        t = document.querySelector(hash).getBoundingClientRect().top,
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
          location.hash = hash;
        }
      }
    }, false);
  }
}

module.exports = scrol;