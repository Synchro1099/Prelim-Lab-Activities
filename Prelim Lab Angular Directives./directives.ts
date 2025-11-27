import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 


@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [
    CommonModule     
  ],
  templateUrl: './directives.html',
  styleUrls: ['./directives.css']
})

export class Directives {
  
  // For *ngIf and main image
  showHamsterFacts = true;
  hamsterFactImageUrl = 'https://media.istockphoto.com/id/1312923831/photo/hamster-on-white-background.jpg?s=612x612&w=0&k=20&c=LwPohMBim2B-3zb6S4fjAYzXfbvxAdDzcd_gxKz3ksI='; // Placeholder image

  // For *ngFor + [ngClass] + food icons
  hamsterFoods = [
    { name: 'Sunflower Seeds', favorite: true, icon: 'https://img.icons8.com/emoji/48/sunflower-emoji.png' },
    { name: 'Carrots', favorite: false, icon: 'https://img.icons8.com/emoji/48/carrot-emoji.png' },
    { name: 'Apples', favorite: false, icon: 'https://img.icons8.com/emoji/48/red-apple.png' },
    { name: 'Broccoli', favorite: true, icon: 'https://img.icons8.com/emoji/48/broccoli-emoji.png' }
  ];
}