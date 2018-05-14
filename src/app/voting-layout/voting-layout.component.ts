import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-voting-layout',
  templateUrl: './voting-layout.component.html',
  styleUrls: ['./voting-layout.component.css']
})
export class VotingLayoutComponent implements OnInit {
  divPos = [0, 87.5, 175, 262.5, 350, 437.5, 525, 612.5];
  td = '<div class="voting-panel">' + '</div>';
  x = 12 ;
  // a = '<div>asdfghjkl</div>';
 // b = '<div  class="counter"></div>';
 // c = '<div id="more_info"></div>';
 // name = '<div class="div_bottom">' + this.a + this.b + this.c + '</div>';
 // img = '<img src="../../assets/images/about-us.jpg" class="image">';
 // td: number = 0;
 //  horize: number[] = [0, 275, 550];
 //  // vertize: number[] = [];
  constructor() {
    this.imageBlock();
    // alert(this.imageBlock() + 'working ');
    this.mainDiv();
  }

  ngOnInit() {
    // this.validate();
  }
    imageBlock(): any {
    // for ( let a = 0; a <= this.horize.length; a++) {
      // for (let vertize = 0; vertize <= 12; vertize++) {
      //   this.td = '<div class="voting-panel">' + this.img + this.name + '</div>';
      //   this.td = this.horize[a];
      // }
    }
    // return this.td;
    // }
//
//   for (let i = 0; i < 8; i++) {
//   for (var j = 0; j < 8; j++) {
//   if (i % 2 != 0) {
//   if (j % 2 != 0) {
//   var colorElement = 'rgba(255,218,103,1)';
// } else {
//   var colorElement = 'rgba(136,94,0,1)';
// }
// } else {
//   if (j % 2 != 0) {
//     var colorElement = 'rgba(136,94,0,1)';
//   } else {
//     var colorElement = 'rgba(255,218,103,1)';
//   }
// }
// $('#div-board').append(elementPieces.getElement(i, j));
// elementPieces.setElement(i, j);
// elementPieces.setColor(i, j, colorElement);
// //elementPieces.setSize(i,j,"87.5px");
// //elementPieces.setShadow(i,j);
// }
// }
  mainDiv () {
    // for ( let a)
    $('.div_main').append(this.td);
  }
}
