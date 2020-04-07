var result = document.querySelector('#result');
var buttonMath = document.querySelector('#math');
var buttonYear = document.querySelector('#year');
var result = document.querySelector('#result');
var number = document.querySelector('#number');

buttonMath.addEventListener('click', async function getMathApi() {
    var mathResult = number.value;
    await fetch('http://numbersapi.com/'+mathResult+'/math')
    .then(res => res.text())
    .then(data => {
        result.innerHTML = data;
    })
    .catch(err => console.log(err))

});

buttonYear.addEventListener('click', async function getYearApi() {
    var yearResult = number.value;
    await fetch('http://numbersapi.com/'+yearResult+'/year')
    .then(res => res.text())
    .then(data => {
        result.innerHTML = data;
    })
    .catch(err => console.log(err))

});



