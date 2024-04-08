export function createScoreBoard() {
    let board = {
        "The Best Ever": 1000000
    }

    return board;
};

export function addPlayer(scoreBoard, player, score) {
    scoreBoard[player] = score;

    return scoreBoard;

}

export function removePlayer(scoreBoard, player) {
     if(scoreBoard.hasOwnProperty(player)) {
        delete scoreBoard[`${player}`];
     }

     return scoreBoard;
}

export function updateScore(scoreBoard, player, points) {
    scoreBoard[`${player}`] += points;
    
    return scoreBoard;
};

export function applyMondayBonus(scoreBoard) {
    for (const key in scoreBoard) {
        scoreBoard[`${key}`] += 100;       
        }

        return scoreBoard;
};

export function normalizeScore(params) {
    let currentScore = params.score;
    return params.normalizeFunction(currentScore);
};
