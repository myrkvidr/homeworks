"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let x1;
  let x2;
  let discr = (b ** 2) - (4 * a * c);
  if (discr < 0) {
    return arr;
  } else if (discr === 0) {
    x1 = -b / (2 * a);
    arr.push(x1);
    return arr;
  } else {
    x1 = (-b + Math.sqrt(discr)) / (2 * a);
    x2 = (-b - Math.sqrt(discr)) / (2 * a);
    arr.push(x1, x2);
    return arr;
  }
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let percentNum = +percent / 100;
  let contributionNum = +contribution;
  let amountNum = +amount;

  if (Number.isNaN(percentNum)) {
    return `Параметр \"Процентная ставка\" содержит неправильное значение \"${percent}\"`;
  } 
  if (Number.isNaN(contributionNum)) {
    return `Параметр \"Начальный взнос\" содержит неправильное значение \"${contribution}\"`;
  }
  if (Number.isNaN(amountNum)) {
    return `Параметр \"Общая стоимость\" содержит неправильное значение \"${amount}\"`;
  }

  let creditBody = amountNum - contributionNum; 

  let startDate = new Date();
  let startYear = startDate.getFullYear();
  let endYear = date.getFullYear();
  let months = (endYear - startYear) * 12;
  
  let monthlyPercent = percentNum / 12;
  let monthlyPayment = creditBody * (monthlyPercent + (monthlyPercent / (((1 + monthlyPercent) ** months) - 1)));

  
  totalAmount = monthlyPayment * months;
  totalAmount = Math.round(totalAmount * 100) / 100;

  console.log(totalAmount);
  return totalAmount;
}
