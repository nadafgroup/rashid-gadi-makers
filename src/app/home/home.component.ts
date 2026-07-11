import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isMenuOpen = false;
  isScrolled = false;
  showScroll = false;
  currentYear = new Date().getFullYear();

  navItems = [
    { name: 'मुख्यपृष्ठ', link: 'home' },
    { name: 'सेवा', link: 'services' },
    { name: 'आमच्याबद्दल', link: 'about' },
    { name: 'संपर्क', link: 'contact' }
  ];

  services = [
    { name: 'बेड गाद्या', desc: 'आरामदायी झोपेसाठी उत्कृष्ट बेड गाद्या.', link: '/bed', icon: 'fa-bed' },
    { name: 'उशा', desc: 'डोक्याला आधार देणाऱ्या आरामदायी उशा.', link: '/pillow', icon: 'fa-pillow' },
    { name: 'सोफा गाद्या', desc: 'स्टाईलिश आणि आरामदायी सोफा गाद्या.', link: '/sofa', icon: 'fa-couch' },
    { name: 'गादी दुरुस्ती', desc: 'व्यावसायिक गादी दुरुस्ती सेवा.', link: '/repair', icon: 'fa-tools' },
    { name: 'गादी भाड्याने', desc: 'स्वच्छ आणि आरामदायी गाद्या भाड्याने.', link: '/rent', icon: 'fa-handshake' },
    { name: 'फर्निचर', desc: 'स्टाईलिश आणि उच्च दर्जाचे फर्निचर.', link: '/furniture', icon: 'fa-chair' }
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
    this.showScroll = window.scrollY > 300;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollTo(sectionId: string) {
    this.isMenuOpen = false;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}