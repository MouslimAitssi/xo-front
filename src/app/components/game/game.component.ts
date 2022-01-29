import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  values;
  turn;
  players = ["Player 1", "Player 2"];

  constructor() { }

  ngOnInit(): void {
    this.turn = this.players[0];
    this.newGame();
  }

  getNextValue(value) {
    if(value=="" && !this.gameEnds()) {
      if(this.turn == this.players[0]) {
        return "x";
      }
      else {
        return "o";
      }
    }
    else {
      return value;
    }
  }

  switchTurn() {
    if(this.turn == this.players[0]) {
      this.turn = this.players[1];
    }
    else {
      this.turn = this.players[0];
    }
  }

  newGame() {
    this.values = [["", "", ""], ["", "", ""], ["", "", ""]];
  }

  toggle00() {
    this.values[0][0] = this.getNextValue(this.values[0][0]);
    if(!this.gameEnds()) {
      this.switchTurn();
    }
  }
  toggle01() {
    this.values[0][1] = this.getNextValue(this.values[0][1]);
    if(!this.gameEnds()) {
      this.switchTurn();
    }

  }
  toggle02() {
    this.values[0][2] = this.getNextValue(this.values[0][2]);
    if(!this.gameEnds()) {
      this.switchTurn();
    }

  }
  toggle10() {
    this.values[1][0] = this.getNextValue(this.values[1][0]);
    if(!this.gameEnds()) {
      this.switchTurn();
    }

  }
  toggle11() {
    this.values[1][1] = this.getNextValue(this.values[1][1]);
    if(!this.gameEnds()) {
      this.switchTurn();
    }

  }
  toggle12() {
    this.values[1][2] = this.getNextValue(this.values[1][2]);
    if(!this.gameEnds()) {
      this.switchTurn();
    }

  }
  toggle20() {
    this.values[2][0] = this.getNextValue(this.values[2][0]);
    if(!this.gameEnds()) {
      this.switchTurn();
    }

  }
  toggle21() {
    this.values[2][1] = this.getNextValue(this.values[2][1]);
    if(!this.gameEnds()) {
      this.switchTurn();
    }

  }
  toggle22() {
    this.values[2][2] = this.getNextValue(this.values[2][2]);
    if(!this.gameEnds()) {
      this.switchTurn();
    }

  }
  firstRow() {
    return (this.values[0][0]==this.values[0][1]&&this.values[0][1]==this.values[0][2]&&this.values[0][1]!="");
  }
  secondRow() {
    return (this.values[1][0]==this.values[1][1]&&this.values[1][1]==this.values[1][2]&&this.values[1][1]!="");
  }
  thirdRow() {
    return (this.values[2][0]==this.values[2][1]&&this.values[2][1]==this.values[2][2]&&this.values[2][1]!="");
  }
  firstColumn() {
    return (this.values[0][0]==this.values[1][0]&&this.values[1][0]==this.values[2][0]&&this.values[0][0]!="");
  }
  secondColumn() {
    return (this.values[0][1]==this.values[1][1]&&this.values[1][1]==this.values[2][1]&&this.values[0][1]!="");
  }
  thirdColumn() {
    return (this.values[0][2]==this.values[1][2]&&this.values[1][2]==this.values[2][2]&&this.values[0][2]!="");
  }
  firstDiag() {
    return (this.values[0][0]==this.values[1][1]&&this.values[1][1]==this.values[2][2]&&this.values[1][1]!="");
  }
  secondDiag() {
    return (this.values[0][2]==this.values[1][1]&&this.values[1][1]==this.values[2][0]&&this.values[0][2]!="");
  }
  gameEnds() {
    return (this.firstRow()||this.secondRow()||this.thirdRow()||this.firstColumn()||this.secondColumn()||this.thirdColumn()||this.firstDiag()||this.secondDiag());
  }

}
