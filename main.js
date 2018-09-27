var field = document.querySelectorAll('.field');

function changePlayer() {
        let playerName = document.getElementById('playerid');
        let btn = document.getElementsByClassName('field');
        let playerTurn = 1;
        let i = 0;
        

        // SPRAWDZ TURE -> JESLI TURA NIE JEST /2 TO ZMIEN KLIKNIETY BUTTON TEXT NA X -> INACZEJ Y

        $('.field').click(function() {

            if (playerTurn%2 != 0) {
                if(this.innerText === "X" || this.innerText === "O") {
                    alert('Pole jest już zajęte!!!');
                } else {
                    (this).innerText = "X";
                    playerTurn++;
                    document.getElementById('playerid').innerText = "Player Two";
                    checkWin();
                }
            } else {
                if(this.innerText === "X" || this.innerText === "O") {    // Sprawdzenie czy pole juz nie jest zajete 
                    alert('Pole jest już zajęte!!!');
                } else {
                    (this).innerText = "O";
                    playerTurn++;
                    document.getElementById('playerid').innerText = "Player One";
                    checkWin();
                }
            }

        });

        // WYCZYSC PLANSZE -> USTAW PLAYER ONE -> USTAW PLAYERTURN = 1

        $('#resetbtn').click(function() {
            for (i=0; i<btn.length;i++) {
                btn[i].innerText = null;
            }
            playerTurn = 1;
            document.getElementById('playerid').innerText = "Player One";
        });
        

}

function checkWin() {

    

}