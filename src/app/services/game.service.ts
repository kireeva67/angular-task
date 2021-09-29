import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Button } from '../Button';
import { BUTTONS } from '../mock-buttons';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor() {}

  getButtons(): Observable<Button[]> {
    const buttons = of(BUTTONS);
    return buttons;
  }
}
