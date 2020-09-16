// Задан массив городов. На странице сверху разместить input - для поискового запроса.
// Ниже отобразить заданные города списком (ul > li). С помощью setInterval считывать
// содержимое input (HTMLInputElement.value) и выделить города, которые удовлетворяют поиску.
// Например: ввели "Че" и города "Черкассы", "Чернигов", "Черновцы" должны выделяться на фоне других.
debugger;
let arr = [ "Винница", "Днепр", "Донецк",
    "Житомир", "Запорожье", "Ивано-Франковск",
    "Киев", "Кропивницкий", "Луганск",
    "Луцк", "Львов", "Николаев",
    "Одесса", "Полтава", "Ровно",
    "Сумы", "Тернополь", "Ужгород",
    "Харьков", "Херсон", "Хмельницкий",
    "Черкассы", "Чернигов", "Черновцы"];
let elementValue;
let elementInput = document.createElement("INPUT");
elementInput.setAttribute("type","text");
document.body.appendChild(elementInput);
html = '<ul>';
arr.forEach(function(item) {
    html += '<li>' + item + '</li>';
});
html += '</ul>'
document.write(html);
// function checkCity () {
//     elementInput = document.querySelector('input');
//     elementValue = elementInput.value;
//     arr.forEach(function (item)
//     {
//         // console.log(item);
//         if (item.includes(elementValue)) {
//             html += '<li>' + '<strong>' + item + '</strong>' + '</li>';
//             document.write(html);
//         }
//     });
// }
//
//
// // setInterval(checkCity, 1000);


