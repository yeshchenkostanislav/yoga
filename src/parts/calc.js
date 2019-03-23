function calc() {

  let persons = document.querySelectorAll('.counter-block-input')[0],
    restDays = document.querySelectorAll('.counter-block-input')[1],
    place = document.getElementById('select'),
    totalValue = document.getElementById('total'),
    personsSum = 0,
    daysSum = 0,
    total = 0;

  totalValue.innerHTML = 0;

  persons.addEventListener('input', (e) => {

    this.value = e.target.value.replace(/[^0-9]+/g, '');

    personsSum = +this.value;
    total = (daysSum + personsSum) * 4000;

    if (restDays.value == '' || personsSum == '') {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total * place.options[place.selectedIndex].value;
    }
  });

  restDays.addEventListener('input', (e) => {
    this.value = e.target.value.replace(/[^0-9]+/g, '');
    daysSum = +this.value;
    total = (daysSum + personsSum) * 4000;

    if (persons.value == '' || daysSum == '') {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total * place.options[place.selectedIndex].value;
      place.addEventListener('change', () => {
        totalValue.innerHTML = total * place.options[place.selectedIndex].value;
      })
    }
  });
}

module.exports = calc;