import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Card1Component } from '../../components/card1/card1.component';
import { Card2Component } from '../../components/card2/card2.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [Card1Component, Card2Component, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  cardText = "wertwertwertwertwertd!";

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  @ViewChild('cardsContainer') cardsContainer!: ElementRef;

  @HostListener('scroll', ['$event'])

  updateCards(event?: Event) {
    const cardsContainer = this.cardsContainer.nativeElement;
    const numberOfCards = cardsContainer.childNodes.length;
    const scrollElement = this.scrollContainer.nativeElement;
    // Get the scroll position
    const scrollPosition = scrollElement.scrollTop;
    const {scrollHeight} = scrollElement;
    const scrollPartSize = scrollHeight/numberOfCards

    console.log("SCROLL", scrollPartSize)
    // document.documentElement.style.setProperty('--card-scroll-position', `calc(50% - ${400+scrollPosition}px)`); 
    for (let i =0; i< numberOfCards; i++) {
      // set opacity
      const cardsScrollStart = i * scrollPartSize
      const cardsScrollEnd = (i+1) * scrollPartSize
      let opacityValue = (cardsScrollEnd - scrollPosition)/scrollPartSize
      if (scrollPosition < cardsScrollStart) {
        opacityValue = (scrollPosition - cardsScrollStart)/1000 + 1
        console.log("opacityValue", opacityValue)
      }
      if (opacityValue < 0) {
        opacityValue = 0;
      }
      if (opacityValue > 1) {
        opacityValue = 0;
      }
      document.documentElement.style.setProperty(`--card${i + 1}-opacity`, opacityValue.toString()); 

      // set scale
      let scaleValue = (scrollPosition - cardsScrollStart)/1000 + 1
      if (scaleValue < 0) {
        scaleValue = 1/Math.abs(scaleValue)
      }
      document.documentElement.style.setProperty(`--card${i + 1}-scale`, scaleValue.toString());
    }
  }

  ngAfterViewInit(): void {
    this.updateCards();

  }  

  onScroll(event?: Event) {
    this.updateCards(event);
  }
}
