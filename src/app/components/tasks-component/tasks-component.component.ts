import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Button } from '../../Button';
import { BUTTONS } from 'src/app/mock-buttons';

@Component({
  selector: 'app-tasks-component',
  templateUrl: './tasks-component.component.html',
  styleUrls: ['./tasks-component.component.css'],
})
export class TasksComponentComponent implements OnInit {
  buttons: Button[] = [];
  choosenOne: number;
  attempt: number = 0;
  constructor(private gameService: GameService) {
    this.choosenOne = Math.floor(Math.random() * BUTTONS.length) + 1;
  }

  ngOnInit(): void {
    this.gameService
      .getButtons()
      .subscribe((buttons) => (this.buttons = buttons));
  }

  onClick(buttonId: number) {
    this.attempt += 1;
    if (buttonId === this.choosenOne) {
      alert(`You won! You did it from ${this.attempt} attempt`);
      this.choosenOne = Math.floor(Math.random() * BUTTONS.length) + 1;
      this.attempt = 0;
    } else if (buttonId > this.choosenOne) {
      alert('To the left');
    } else if (buttonId < this.choosenOne) {
      alert('To the right');
    }
  }
}
