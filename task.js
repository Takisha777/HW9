// Задан массив городов. На странице сверху разместить input - для поискового запроса.
// Ниже отобразить заданные города списком (ul > li). С помощью setInterval считывать
// содержимое input (HTMLInputElement.value) и выделить города, которые удовлетворяют поиску.
// Например: ввели "Че" и города "Черкассы", "Чернигов", "Черновцы" должны выделяться на фоне других.

let arr = [ "Винница", "Днепр", "Донецк",
    "Житомир", "Запорожье", "Ивано-Франковск",
    "Киев", "Кропивницкий", "Луганск",
    "Луцк", "Львов", "Николаев",
    "Одесса", "Полтава", "Ровно",
    "Сумы", "Тернополь", "Ужгород",
    "Харьков", "Херсон", "Хмельницкий",
    "Черкассы", "Чернигов", "Черновцы"];

// создаем стили
let styleElem = document.createElement("STYLE");
styleElem.type = 'text/css';
styleElem.innerHTML = '.style {font-weight: bold;}';
document.getElementsByTagName("head")[0].appendChild(styleElem);

// создаем input
let elementInput = document.createElement("INPUT");
elementInput.setAttribute("type","text");
document.body.appendChild(elementInput);

// добавляем на страницу список городов
html = '<ul>';
arr.forEach(function(item) {
    html += '<li>' + item + '</li>';
});
html += '</ul>';
document.write(html);

// собственно программа
let HTMLInputElement = document.querySelector('input');
let elementLi = document.querySelectorAll('li');

function checkCity() {
    for (let i = 0; i < arr.length; i++) {
        if (elementLi[i].textContent.toLowerCase().startsWith(HTMLInputElement.value) && HTMLInputElement.value !== '') {
            elementLi[i].classList.add('style');
        } else if (elementLi[i].textContent.startsWith(HTMLInputElement.value) && HTMLInputElement.value !== '') {
                elementLi[i].classList.add('style');
        } else {
                elementLi[i].classList.remove('style');
        }
    }
}

setInterval(checkCity, 1000);


