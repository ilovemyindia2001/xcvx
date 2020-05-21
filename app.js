var score, activePlayer, roundScore;
init();
// roll dice for active player

document.querySelector('.btn-new').addEventListener('click',init);

document.querySelector(".btn-roll").addEventListener('click', function(){
	console.log("rolled")
	var dice = Math.floor(Math.random()*6) + 1 //Genrate random number b/w 1 to 6
	var diceDoc = document.getElementById("dice-1");
	diceDoc.style.display = "block";
	diceDoc.src = 'dice-' + dice + '.png';
	if(dice != 1){
		roundScore += dice;
		document.getElementById("current-"+activePlayer).textContent = roundScore;
	}else{
		nextPlayer();
	}
})

//Hold the round value
document.querySelector(".btn-hold").addEventListener('click', function(){
	score[activePlayer] += roundScore;
	document.getElementById("score-"+activePlayer).textContent = score[activePlayer];
	if(score[activePlayer] > 100){
		document.getElementById("name-"+activePlayer).textContent = "Winner!";
		document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
		document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
		document.getElementById("dice-1").style.display = "none";
		document.querySelector(".btn-hold").disabled = ture
		document.querySelector(".btn-roll").disabled = ture
	}else{
		nextPlayer();
	}
})


function nextPlayer(){
		roundScore = 0;
		document.getElementById("dice-1").style.display = "none";
		document.getElementById("current-"+activePlayer).textContent = 0;
		activePlayer = activePlayer == 1 ? 0 : 1;
		document.querySelector(".player-0-panel").classList.remove('active');
		document.querySelector(".player-1-panel").classList.remove('active');
		document.querySelector(".player-" + activePlayer +"-panel").classList.add('active');
}


function init() {
    score = [0, 0];
    activePlayer = 0;
    roundScore = 0;
	
    document.querySelector(".btn-hold").disabled = false;
		document.querySelector(".btn-roll").disabled = false;
	
    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
	
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
	
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
	
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
	
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('active');
	
    document.querySelector('.player-0-panel').classList.add('active');
}
