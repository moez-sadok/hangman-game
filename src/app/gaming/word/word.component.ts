import { Component, OnInit, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.scss']
})
export class WordComponent implements OnInit, OnChanges {

  blancWord: string = '';

  @Input() word: string = '';
  @Input() char: string = '';

  @Output() isCorrectChar = new EventEmitter<boolean>();
  @Output() isWordFound = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    let wordSize = this.word.length;
    this.blancWord = new Array(wordSize + 1).join('-');
  }

  ngOnChanges(changes: SimpleChanges) {
    this.checkInputChar(changes.char.currentValue);
  }

  checkInputChar(c) {
    if (c) {
      var isFound = false;
      for (let i = 0; i < this.word.length; i++) {
        if (this.word.charAt(i) == c) {
          this.blancWord = this.replaceAt(this.blancWord, i, c);
          isFound = true;
        }
      }
      this.isCorrectChar.emit(isFound);

      if (this.blancWord == this.word) {
        this.isWordFound.emit(true);
      }
    }
  }

  replaceAt(s, n, t) {
    return s.substring(0, n) + t + s.substring(n + 1);
  }

}