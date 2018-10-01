// Store tip info in an object. In the future maybe get em from a database
let tips = {
	health: ['Eat a lot of fruits ', 'Drink a gallon of water daily ', 'Exercise a few times per week '],
	romance: ['Be Kind and considerate ', 'Be spontaneous', 'Rub the booty once in a while '],
	career:  ['Practice interview questions ', 'Be punctual as often as you can ', 'Get enough rest '],
	financial: ['Try to save 5% of your paycheck as often as you can', 'Cook more, eat out less', 'Buy things in bulk when possible'] 
}

//An alternative to this would be to use a loop and do 'tip_line' + i for to get element
const healthSelect = function() {
	this.addEventListener("click", function(event){
	//Output corresponding tips based on the child element involved in the click event
		document.getElementById('tip_line1').textContent = tips.health[0];
		document.getElementById('tip_line2').textContent = tips.health[1];
		document.getElementById('tip_line3').textContent = tips.health[2];
	})	
}

const romanceSelect = function() {
	this.addEventListener("click", function(event){

		document.getElementById('tip_line1').textContent = tips.romance[0];
		document.getElementById('tip_line2').textContent = tips.romance[1];
		document.getElementById('tip_line3').textContent = tips.romance[2];
	})	
}

const careerSelect = function() {
	this.addEventListener("click", function(event){

		document.getElementById('tip_line1').textContent = tips.career[0];
		document.getElementById('tip_line2').textContent = tips.career[1];
		document.getElementById('tip_line3').textContent = tips.career[2];
	})	
}

const financialSelect = function() {
	this.addEventListener("click", function(event){

		document.getElementById('tip_line1').textContent = tips.financial[0];
		document.getElementById('tip_line2').textContent = tips.financial[1];
		document.getElementById('tip_line3').textContent = tips.financial[2];
	})		
}