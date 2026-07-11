import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rent.component.html',
  styleUrl: './rent.component.scss'
})
export class RentComponent {
  benefits = [
    'आधार देणाऱ्या गाद्या पाठीचा कणा योग्य संरेखित ठेवतात, पाठ आणि मानेची वेदना कमी करतात.',
    'आधार देणारी गादी झोपेत वारंवार हालचाल कमी करते, ज्यामुळे अखंड आणि गाढ झोप मिळते.',
    'मोशन आयसोलेशन वैशिष्ट्ये जोडीदार झोपेत हालचाल करत असताना कमीतकमी अडथळा सुनिश्चित करतात.',
    'संधिवात किंवा पाठदुखी सारख्या तीव्र वेदनांच्या स्थितीपासून आराम देण्यासाठी डिझाइन केलेले.'
  ];
}
