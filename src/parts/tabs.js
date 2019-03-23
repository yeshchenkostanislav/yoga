function tabs() {
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

}

module.exports = tabs;