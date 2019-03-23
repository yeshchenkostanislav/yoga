function modal() {

  let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    tabs = document.querySelectorAll('.description-btn'),
    close = document.querySelector('.popup-close');

  function show(b) {
    b.addEventListener('click', () => {
      overlay.style.display = 'block';
      b.classList.add('more-splash');
      document.body.style.overflow = 'hidden';
    });
    close.addEventListener('click', () => {
      overlay.style.display = 'none';
      b.classList.remove('more-splash');
      document.body.style.overflow = '';
    });
  }
  show(more);

  for (let i = 0; i < tabs.length; i++) {
    show(tabs[i]);
  }

}

module.exports = modal;