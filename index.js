let playerScore=0;
        let computerScore=0;
        
        function playGame(playerChoice) {
            const choices=['rock', 'paper', 'scissors'];
            const computerChoice=choices[Math.floor(Math.random()*choices.length)];
            let result='';
            
            if (playerChoice===computerChoice) {
                result = "It's a draw!";
            } else if (
                (playerChoice==='rock' && computerChoice==='scissors') ||
                (playerChoice==='paper' && computerChoice==='rock') ||
                (playerChoice==='scissors' && computerChoice==='paper')
            ) {
                result="You win! 🎉";
                playerScore++;
                document.getElementById('result').className='winner';
            } else {
                result="You lose! 😢";
                computerScore++;
                document.getElementById('result').className='loser';
            }
            
            document.getElementById('result').innerHTML=`Computer chose <strong>${computerChoice}</strong>. <br> ${result}`;
            document.getElementById('playerScore').textContent=playerScore;
            document.getElementById('computerScore').textContent=computerScore;
        }