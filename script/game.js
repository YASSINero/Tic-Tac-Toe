function newGame() {
    const gameBoard = (function() {
        // Draw initial state of the board
        console.log("Welcome to the goodold tictactoe game!!\n\n");
    
        const spaces = ["\t\t","\t\t","\t\t","\t\t","\t\t","\t\t","\t\t","\t\t","\t\t"];
        let board = () => "\t\t|\t\t|\t\t\n"
                  + spaces[0]+"|"+spaces[1]+"|"+spaces[2]+"\n"
                  + "\t\t|\t\t|\t\t\n"
                  + "________________|_______________|________________\n"
                  + "\t\t|\t\t|\t\t\n"
                  + spaces[3]+"|"+spaces[4]+"|"+spaces[5]+"\n"
                  + "\t\t|\t\t|\t\t\n"
                  + "________________|_______________|________________\n"
                  + "\t\t|\t\t|\t\t\n"
                  + spaces[6]+"|"+spaces[7]+"|"+spaces[8]+"\n"
                  + "\t\t|\t\t|\t\t\n";
                  //values don't change


        const isFull = () => {
            return spaces.every((space) => {
                return /[XO]/i.test(space);
            });
        }

        function userPosition(inform = "Insert a position: [1, 2, 3, 4, 5, 6, 7, 8, 9]") {
            let position = prompt(inform);
    
            while (!/^[1-9]$/.test(position)) {
                position = prompt("Please insert a number in the range [1-9]");
            }
            return position;
        }
    

        const play = () => {
            let choice = prompt("Choose your mark: Circle [O] or Cross [X]");

            while(!(/^[xo]$/i.test(choice))) {
                choice = prompt("Either insert [O] or [X]");    
            }

            let position = userPosition();
            while(/[xo]/i.test(spaces[position-1])) {
                position = userPosition("Box already ticked. Choose another position in [1-9]");
            }

            spaces[position-1] = spaces[position-1].slice(0, 1) + `${choice}` + spaces[position-1].slice(1);
            console.log(board());
            
            //TODO make cases for win/lose/draw etc
        }

                return {play, isFull}}
    ) ();
    while (!gameBoard.isFull()) {
        gameBoard.play();
    }
    console.log("Game finished");
}

newGame();
//TODO make game loop 
//  