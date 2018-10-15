var money = parseInt(prompt('Сколько у Вас денег с собой?'))
var apple = parseInt(prompt('Сколько вы купили яблок?'))
var bread = parseInt(prompt('Сколько вы купили батонов хлеба?'))
var applePrice = parseInt(prompt('Сколько стоит одно яблоко?'))
var breadprice = parseInt(prompt('Сколько стоит один батон хлеба?'))
var cash = money - ((bread * breadprice) + (apple * applePrice))
if (cash >= 0){
	document.body.innerHTML = 'True' 
} else if (cash < 0) {
	document.body.innerHTML = 'False'
}