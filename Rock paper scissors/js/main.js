var buttons = document.getElementsByTagName('button');
var store1;
var screen = document.getElementById('screen');
var resultScreen = document.getElementById('result');
//css for computers choice
screen.style.backgroundColor = '#90BCD4';
screen.style.marginTop = '5%';
screen.style.padding = '2.5%';
screen.style.width = '30%';
screen.style.fontSize = '32px';

//css for result div
resultScreen.style.marginTop = '10%';
resultScreen.style.fontSize = '28px';

//empty storage vars
var random;
var store2;


for (var i=0; i<buttons.length;i++) {

	buttons[i].onclick = function() {
		
		console.log('click');
		store1 = this.value; //stores clicked buttons value
		random = Math.floor(Math.random() * 3); //generates randomnumber 0-3
		store2 = screen.innerHTML = (buttons[random].value); // uses ranom number to select button arrey no. + print to pagw
	if(store2 === store1){
		resultScreen.innerHTML = ('Tie');

	} else if (store1 === 'Rock' && store2 === 'Paper' ) { //rock lose
		resultScreen.innerHTML = ('You Lose');
	} else if (store1 === 'Rock' && store2 === 'scissors') { //rock win
		resultScreen.innerHTML = ('You Win');
	} else if (store1 === 'Paper' && store2 === 'scissors') { //paper lose
		resultScreen.innerHTML = ('You Lose');
	} else if (store1 === 'scissors' && store2 === 'Rock') { //scissorslose
		resultScreen.innerHTML = ('You Lose');
		
	} else if (store1 === 'Paper' && store2 === 'Rock') { //paper win
		resultScreen.innerHTML = ('You Win');
		
	} else if (store1 === 'scissors' && store2 === 'Paper') { //scissors win
		resultScreen.innerHTML = ('You Win');
	}
	}
};




