import { CommonModule, NgFor, NgForOf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'card1',
  standalone: true,
  imports: [],
  templateUrl: './card1.component.html',
  styleUrl: './card1.component.scss'
})
export class Card1Component {
  @Input() text!: string;

  ngOnInit(): void {
    // This is where you'll write your logic to fetch data or initialize properties
    console.log("card1 initialized!");
    
  }
}
