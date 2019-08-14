/**
    * @param {string} moves
    * @return {boolean} 
    * 
    * There is a robot starting at position (0, 0), the origin, on a 2D plane. Given a sequence of its moves, judge if this robot ends up at (0, 0) after it completes its moves.
    * 
    * The move sequence is represented by a string, and the character moves[i] represents its ith move. Valid moves are R (right), L (left), U (up), and D (down). If the robot returns to the origin after it finishes all of its moves, return true. Otherwise, return false.
    * 
    * Note: The way that the robot is "facing" is irrelevant. "R" will always make the robot move to the right once, "L" will always make it move left, etc. Also, assume that the magnitude of the robot's movement is the same for each move.
    Passing Moves
    
    "ULDR" || "RDLU"
    "UUDD" 
    "LURD" || "DRUL"

    class Solution(object):
    def judgeCircle(self, moves):
        x = y = 0
        for move in moves:
            if move == 'U': y -= 1
            elif move == 'D': y += 1
            elif move == 'L': x -= 1
            elif move == 'R': x += 1

        return x == y == 0
**/ 
 
let judgeCircle = (moves) => {
    x, y = 0;

    for (const move of moves) {
        if (move == 'U') {
            y -= 1
        } else if (move == 'D') {
            y += 1
        } else if (move == 'L') {
            x -= 1
        } else if (move == 'R') {
            x += 1
        }
    }

    return x == y;
}


console.log(judgeCircle('ULRD'))

