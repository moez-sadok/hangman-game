import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pendu',
  templateUrl: './pendu.component.html',
  styleUrls: ['./pendu.component.scss']
})
export class PenduComponent implements OnInit {


  firstImage;
  prefix = 'https://user.oc-static.com/files/131001_132000/1318'
  public imageUrl ;//=  this.prefix+ this.firstImage + '.jpg';

  constructor() { }

  ngOnInit() {
      this.firstImage = 70;
      this.imageUrl = this.prefix  + this.firstImage + '.jpg';
  }

  nextImage(){
      this.firstImage ++;
      this.imageUrl = this.prefix + this.firstImage + '.jpg';
  }

}