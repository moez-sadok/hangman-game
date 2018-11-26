import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-keybord',
  templateUrl: './keybord.component.html',
  styleUrls: ['./keybord.component.scss']
})
export class KeybordComponent implements OnInit {

  constructor() { }

  @Output() onSelectChar = new EventEmitter<string>();
  selectChar(char: string) {
    this.onSelectChar.emit(char);
  }

  public allCars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  ngOnInit() { }

}
