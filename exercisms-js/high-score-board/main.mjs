export function createScoreBoard() {
    let board = {
        "The Best Ever": 1000000
    }

    return board;
};

export function addPlayer(scoreBoard, player, score) {
    scoreBoard.player = player;
    scoreBoard.score = score

    let allData = [];

    for (const key in scoreBoard) {
        allData.push = key;
        allData.push = scoreBoard[key]
            
        }

        return allData;
    }

const scoreBoard = {
    'Amil Pastorius': 99373,
    'Min-seo Shin': 0,
};

console.log(addPlayer(scoreBoard, 'Jesse Johnson', 1337));