function calc() {


  let persons = document.querySelectorAll('.counter-block-input')[0],
    restDays = document.querySelectorAll('.counter-block-input')[1],
    place = document.getElementById('select'),
    totalValue = document.getElementById('total');


  console.log(place);


  totalValue.innerHTML = 0;

  persons.addEventListener('input', (e) => {

    if (e.value) {
      this.value = e.target.value.replace(/[^0-9]+/g, '');
    };

    let total = ((+persons.value + +restDays.value) * 4000 * place.options[place.selectedIndex].value);

    if (persons.value == '' || restDays.value == '' || persons.value == 0 || restDays.value == 0) {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }
  });

  restDays.addEventListener('input', (e) => {

    if (e.value) {
      this.value = e.target.value.replace(/[^0-9]+/g, '');
    };

    let total = ((+persons.value + +restDays.value) * 4000 * place.options[place.selectedIndex].value);

    if (persons.value == '' || restDays.value == '' || persons.value == 0 || restDays.value == 0) {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }
  });

  place.addEventListener('change', () => {

    let total = ((+persons.value + +restDays.value) * 4000 * place.options[place.selectedIndex].value);

    if (persons.value == '' || restDays.value == '' || persons.value == 0 || restDays.value == 0) {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }
  });
}

module.exports = calc;