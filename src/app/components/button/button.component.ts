import { Component, OnInit, Input } from '@angular/core';
import { Button } from 'src/app/Button';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() text!: string;
  @Input() color!: string;
  @Input() button!: Button;
}
