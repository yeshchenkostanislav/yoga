function calc() {


  let persons = document.querySelectorAll('.counter-block-input')[0],
    restDays = document.querySelectorAll('.counter-block-input')[1],
    place = document.getElementById('select'),
    totalValue = document.getElementById('total'),
    total = 0;

  totalValue.innerHTML = 0;

  persons.addEventListener('input', (e) => {

    this.value = e.target.value.replace(/[^0-9]+/g, '');

    personsSum = +this.value;
    total = ((persons.value + restDays.value) * 4000 * place.options[place.selectedIndex].value);

    if (persons.value == '' || restDays.value == '' || persons.value == 0 || restDays.value == 0) {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }
  });

  restDays.addEventListener('input', (e) => {
    this.value = e.target.value.replace(/[^0-9]+/g, '');
    daysSum = +this.value;
    total = ((persons.value + restDays.value) * 4000 * place.options[place.selectedIndex].value);

    if (persons.value == '' || restDays.value == '' || persons.value == 0 || restDays.value == 0) {
      totalValue.innerHTML = 0;
    } else {
      place.addEventListener('change', () => {

        total = ((persons.value + restDays.value) * 4000 * place.options[place.selectedIndex].value);

        console.log(persons.value, restDays.value, place.options[place.selectedIndex].value);

        if (persons.value == '' || restDays.value == '' || persons.value == 0 || restDays.value == 0) {
          totalValue.innerHTML = 0;
        } else {
          totalValue.innerHTML = total;
        }
      })
    }
  });
}

module.exports = calc;