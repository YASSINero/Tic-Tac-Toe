function newGame() {
    const gameBoard = (function() {
        // Draw initial state of the board
        console.log("Welcome to the goodold tictactoe game!!\n\n");
    
        const spaces = ["\t\t","\t\t","\t\t","\t\t","\t\t","\t\t","\t\t","\t\t","\t\t"];
        const combinations = [{
            combo: "123", 
            ticks: 0,
            choice: ''
        },
                      {
            combo: "147", 
            ticks: 0, 
            choice: ''
        },
                      {
            combo: "159", 
            ticks: 0, 
            choice: ''
        },
                      {
            combo: "258", 
            ticks: 0, 
            choice: ''
        },
                      {
            combo: "357", 
            ticks: 0, 
            choice: ''
        },
                      {
            combo: "369", 
            ticks: 0, 
            choice: ''
        },
                      {
            combo: "456", 
            ticks: 0, 
            choice: ''
        },
                      {
            combo: "987", 
            ticks: 0, 
            choice: ''
        }];

        
        let arrArr = [];
        function makeArray(keyInput) {
            let tempArr = [];
            combinations.filter(obj => obj.combo.includes(`${keyInput}`))
                .forEach((comboObj)=>{tempArr
                .push(comboObj);
                });
           
            arrArr.push(tempArr);
        
            return arrArr.at(keyInput-1);
            //TODOO modify same object from different reference copies (objects are copied)
        }

        let inputTick = new Map([
            [1, makeArray(1)],
            [2, makeArray(2)],
            [3, makeArray(3)],
            [4, makeArray(4)],
            [5, makeArray(5)],
            [6, makeArray(6)],
            [7, makeArray(7)],
            [8, makeArray(8)],
            [9, makeArray(9)],
        ]);

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

        function playerTicked(choice, position) {
            console.log(`${choice} is choice, and ${position} is pos`);

            let winning = 0;
            
            inputTick.get(Number(position)).forEach((elem) => {
                if(elem.choice.length === 0 || choice === elem.choice) {
                    elem.ticks++;
                    elem.choice = choice;
                }
                if(elem.ticks === 3) {
                    console.log(`Player ${choice} wins by completing three ticks in ${elem.combo}`);
                    winning = -1;
                }
            });
            //return code for gameloop condition
            return winning;
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
            let won = playerTicked(choice.toLowerCase(), position);
            console.log(board());
            
            return won;
        }

                return {play, isFull}}
    ) ();

    let win = 0;
    while (!gameBoard.isFull() && win === 0) {//Add winning/tie condition
       
        win = gameBoard.play();
    }
    console.log("Game finished");
}

newGame();
//TODO make game loop 
//  