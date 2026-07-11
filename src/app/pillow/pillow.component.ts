import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pillow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pillow.component.html',
  styleUrl: './pillow.component.scss'
})
export class PillowComponent {
  benefits = [
    'कापसाच्या उशा चांगले हवेचे परिसंचरण करतात, ज्यामुळे तुम्ही रात्रभर थंड आणि आरामदायी राहता.',
    'कापसाची नैसर्गिक मऊपणा सौम्य आधार देते, आरामदायी झोप सुनिश्चित करते.',
    'कापूस एलर्जी किंवा संवेदनशील त्वचा असलेल्या लोकांसाठी आदर्श आहे.',
    'कापूस प्रभावीपणे ओलावा शोषून घेतो, घाम जमा होण्यापासून प्रतिबंधित करतो.',
    'उच्च दर्जाच्या कापसाच्या उशा दीर्घकाळ वापरल्यानंतरही त्यांचा आकार टिकवून ठेवतात.'
  ];
}
