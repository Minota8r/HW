let phrases = [
  'отправить другу смешную гифку',
  'посмотреть скидки на авиабилеты',
  'разобраться, о чём поют рэперы',
  'Юрий Дудь',
  'расставить книги на полке по цвету',
  'читать про зарплаты в Сан-Франциско',
  'добавить сюда больше фраз',
  'открыть окно и вдохнуть леденящий воздух',
  'хоть бы эта фраза здесь появилась'
];

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');



button.addEventListener('click', function () {
 phrase.textContent = getRandomElement(phrases);
}); 