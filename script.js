"use strict";
var money = +prompt("Ваш бюджет на месяц?",'');
var time = prompt("Введите дату в формате YYYY-MM-DD", '');

var appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optinalExpenses:{},
    income: {},
    savings: false    
};

for (let i = 0; i < 2; i++ ){
    var a = prompt("Введите обязательную статью расходов в этом месяце", ''),
    b = prompt("Во сколько обойдется?", '');
    if ((typeof(a)) === 'string' && (typeof(a) != null) && (typeof(b) != null) && a != '' && b != '' && a.length < 50){
        console.log('done');
        appData.expenses[a] = b;
     }else{

     }    

};
     
appData.moneyPerDay = appData.budget/30;
alert("Ежедневный бюджет: "+ appData.moneyPerDay);

if(appData.moneyPerDay <100){
    console.log("Минимальный уровень достатка");
}else if(appData.moneyPerDay >100 && appData.moneyPerDay <2000){
    console.log("Средний уровень достатка");
}else if(appData.moneyPerDay > 2000){
    console.log("Высокий уровень дохода");
}else {
    console.log("Произошла ошибка");
}