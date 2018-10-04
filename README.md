Setup: npm i
Start: npm run start

Play the version of Tic Tac Toe no one ever asked for: multiplayer! Play with your friends or against very stupid AI in this free-for-all. Further updates to this game would include, at a minimum:
(1) implementation of the minimax algorithm with pruning, to make the AI difficult to play against. It would also be fun to introduce points of weakness into the algorithm so that they occasionally make mistakes, and are not impossible to win against.
(2) The larger boards have also not been properly tested and explored. It is likely that changes would be necessary to make the game more fun as the board size increases, and to account for the extra stress on the minimax algorithm.
(3) The symbol assignment uses a rearrangment of the alphabet at present. It would be fun to add an emoji api to play with random or selected emojis instead.
(4) The code itself is in a single file heap at present. With more time, I'd like to restructure it into multiple files for organization and readability, and reduce the inevitable repetition that comes from hacking something together so quickly.