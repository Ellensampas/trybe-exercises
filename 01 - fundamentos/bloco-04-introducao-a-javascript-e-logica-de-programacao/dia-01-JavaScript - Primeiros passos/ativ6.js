const chessPieces = "KING";
let movement;

switch (chessPieces.toLowerCase()){
  case "pawn":
  movement = "one square in your front"
  break;

  case "bishop":
  movement = "diagonals"
  break;

  case "knight":
  movement = "L move"
  break;

  case "rook":
  movement = "collumn and lines"
  break;

  case "queen":
  movement = "any directions"
  break;

  case "king":
  movement = "any directions, but move just one square"
  break;

  default:
    movement ="Erro"
}
console.log(movement);