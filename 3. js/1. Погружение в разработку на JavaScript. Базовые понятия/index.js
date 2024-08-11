// Задача 1
/*
В интернет-магазине у зарегистрированного пользователя есть имя и бонусный баланс. Представим, что вы пользователь. Отобразите информацию об успешном входе и своем бонусном балансе.
*/
let username = "my name";
let bonusBalance = 1000;

console.log(`Пользователь: ${username}`);
console.log(`Баланс: ${bonusBalance}`);

// Зачача 2
/*
За каждую покупку мы добавляем на баланс фиксированную сумму в 50 бонусных баллов. Баллы сгорают со временем - каждый день сгорает 3 балла.

Посчитайте, какой баланс будет у пользователя через 7 дней, если обычно он раз в два дня делает покупку.
*/ 
let bonusAfterPayment = 50;
let bonusBurned = 3;
let daysCount = 7;
let paymentCount = Math.floor(daysCount / 2);

let resultBalance =
  bonusBalance + bonusAfterPayment * paymentCount - bonusBurned * daysCount;
console.log(`Результат: ${resultBalance}`);
