import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Card1Component } from '../../components/card1/card1.component';
import { Card2Component } from '../../components/card2/card2.component';

@Component({
  selector: 'app-home',
  imports: [Card1Component, Card2Component],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  @HostListener('scroll', ['$event'])

  ngAfterViewInit(): void {
    console.log("home ngAfterViewInit!", this.scrollContainer);
  }  

  onScroll(event: Event) {
    const numberOfCards = 2;
    const scrollElement = this.scrollContainer.nativeElement;
    // Get the scroll position
    const scrollPosition = scrollElement.scrollTop;
    const {scrollHeight} = scrollElement;

    const newFontSize = Math.min(20, 16 + scrollPosition / 100);

    console.log("SCROLL")
    // Set the new value to the CSS custom property
    document.documentElement.style.setProperty('--font-size', `${newFontSize}px`);
    document.documentElement.style.setProperty('--primary-color', `rgb(${scrollPosition % 255}, 100, 200)`); 
    document.documentElement.style.setProperty('--card-scroll-position', `calc(50% - ${400+scrollPosition}px)`); 
    const scrollPartSize = scrollHeight/numberOfCards
    for (let i =0; i< numberOfCards; i++) {
      const cardsScrollStart = i/numberOfCards * scrollPartSize
      const cardsScrollEnd = (i+1)/numberOfCards * scrollPartSize
      let opacityValue = (scrollPosition - cardsScrollStart)/scrollPartSize
      if (opacityValue < 0) {
        opacityValue = 0;
      }
      if (opacityValue > 1) {
        opacityValue = 0;
      }
      document.documentElement.style.setProperty(`--card${i + 1}-opacity`, opacityValue.toString()); 
    }
  }
}
