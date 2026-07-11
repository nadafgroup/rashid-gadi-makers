import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sofa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sofa.component.html',
  styleUrl: './sofa.component.scss'
})
export class SofaComponent {
  benefits = [
    'कॉम्पॅक्ट स्पेससाठी आदर्श, सोफा गाद्या बसण्याची आणि झोपण्याची दोन्ही सोयी एकाच ठिकाणी देतात.',
    'दीर्घकाळ बसताना किंवा झोपताना होणारी अस्वस्थता कमी करून उत्कृष्ट कमरेचा आधार देतात.',
    'तुमच्या सोफाच्या फ्रेममध्ये पूर्णपणे बसण्यासाठी विविध आकार आणि जाडीत उपलब्ध.',
    'उच्च दर्जाची आधार देणारी सामग्री सॅगिंग प्रतिबंधित करते आणि तुमच्या सोफाचे आयुष्य वाढवते.'
  ];
}
