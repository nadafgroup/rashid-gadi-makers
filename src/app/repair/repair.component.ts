import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-repair',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './repair.component.html',
  styleUrl: './repair.component.scss'
})
export class RepairComponent {
  benefits = [
    'परिपूर्ण आरामासाठी प्रीमियम दर्जाची सामग्री.',
    'तुमच्या गरजा पूर्ण करण्यासाठी विविध आकारात उपलब्ध.',
    'चांगल्या झोपेच्या मुद्रेसाठी अर्गोनॉमिकली डिझाइन केलेले.',
    'हायपोअलर्जेनिक आणि देखभाल करण्यास सोपे.'
  ];
}
