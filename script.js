"use strict";
var money = prompt("Ваш бюджет на месяц?",'');
var time = prompt("Введите дату в формате YYYY-MM-DD", '');

var appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optinalExpenses:{},
    income: {},
    savings: false    
};

var a = prompt("Введите обязательную статью расходов в этом месяце", ''),
    a2 = prompt("Во сколько обойдется?", ''); 

appData.expenses.a1 = a2;
        
alert(appData.budget/30);