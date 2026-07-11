import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-furniture',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './furniture.component.html',
  styleUrl: './furniture.component.scss'
})
export class FurnitureComponent {
  products = [
    { name: 'बेड', image: 'assets/img/bed.webp' },
    { name: 'दिवाण', image: 'assets/img/diwan.webp' },
    { name: 'सोफा', image: 'assets/img/sofa1.webp' },
    { name: 'टिपॉय', image: 'assets/img/tipoy.webp' },
    { name: 'टेबल', image: 'assets/img/table.webp' },
    { name: 'खुर्ची', image: 'assets/img/chair.webp' },
    { name: 'ड्रेसिंग टेबल', image: 'assets/img/dressing table.webp' }
  ];
}
