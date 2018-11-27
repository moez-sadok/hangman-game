import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-keybord',
  templateUrl: './keybord.component.html',
  styleUrls: ['./keybord.component.scss']
})
export class KeybordComponent implements OnInit {

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onSelectChar: EventEmitter<string> = new EventEmitter<string>();
  public allCars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  constructor() { }

  ngOnInit() { }

  selectChar(char: string) {
    this.onSelectChar.emit(char);
  }

}
