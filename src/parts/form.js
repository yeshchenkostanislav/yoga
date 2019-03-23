function form() {

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

          request.onreadystatechange = () => {
            if (request.readyState < 4) {
              resolve()
            } else if (request.readyState === 4) {
              if (request.status == 200) {
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
          statusMessage.textContent = message.loading;
        })
        .then(() => {
          statusMessage.innerHTML = message.success;
          setTimeout(func, 3000);
        })
        .catch(() => {
          statusMessage.innerHTML = message.failure;
        })
        .then(clearInput)
    });
  });

  function func() {
    statusMessage.innerHTML = "";
  }


  inputTel.forEach((item) => {
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
}

module.exports = form;