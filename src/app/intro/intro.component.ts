import { Component, OnInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'],
})
export class IntroComponent implements OnInit, AfterContentInit {
  text = ['Hello, here is a passionate Web Developer',
  'I love to build webs and improve my code everyday.',
  'Do not hesitate to take a look at my work and contact me.'];
  outputText = ['', '', ''];
  imgSource = '../../assets/img/about.jpg';

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    let i = 0;
    let j = 0;
    let k = 0;
    const typeWritting0 = setInterval(() => {
      if ( this.outputText[0].length === this.text[0].length) {
        clearInterval(typeWritting0);
        const typeWritting1 = setInterval(() => {
          if ( this.outputText[1].length === this.text[1].length) {
            clearInterval(typeWritting1);
            const typeWritting2 = setInterval(() => {
              if ( this.outputText[2].length === this.text[2].length) {
                clearInterval(typeWritting2);
                // tslint:disable-next-line:max-line-length
                this.outputText[0] = 'Hello, here is a <span class="enphasis1">passionate</span> Web Developer<span class="enphasis2">!</span>';
              } else {
                this.outputText[2] = this.outputText[2] + this.text[2][k];
                k++;
              }
            }, Math.floor(Math.random() * (60 - 40 + 1) ) + 40);
          } else {
            this.outputText[1] = this.outputText[1] + this.text[1][j];
            j++;
          }
        }, Math.floor(Math.random() * (60 - 40 + 1) ) + 40);
      } else {
        this.outputText[0] = this.outputText[0] + this.text[0][i];
        i++;
      }
    }, Math.floor(Math.random() * (60 - 40 + 1) ) + 40);
  }


}
