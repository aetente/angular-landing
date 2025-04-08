import { Component } from '@angular/core';

@Component({
  selector: 'card2',
  standalone: true,
  imports: [],
  templateUrl: './card2.component.html',
  styleUrl: './card2.component.scss'
})
export class Card2Component {
  ngOnInit(): void {
    // This is where you'll write your logic to fetch data or initialize properties
    console.log("card2 initialized!");
    
  }
}
