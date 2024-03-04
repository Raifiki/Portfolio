import { Component, inject } from '@angular/core';
import { ContactFormComponent } from './contact-form/contact-form.component';

import { LanguageService } from '../../shared/services/language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactFormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  languageService = inject(LanguageService);

  sectionText = {
    HL: 'Contact',
    subHL: 'Got a problem to solve?',
    description1: 'Contact me through this form, I am interested in hearing you, knowing your ideas and contributing to your projects with my work.',
    description2: 'Need a Frontend developer?',
    description3: 'Contact me!',
    form: {
        name: 'Your name',
        email: 'Your email',
        message: 'Your message',
        privacyPolicy1:'I\'ve read the',
        privacyPolicy2:'privacy policy',
        privacyPolicy3:'and agree to the processing of my data as outlined',
        send: 'Send message',
        thankYou: 'Thank you :-)'
    }
};

  ngOnInit(){
    this.languageService.pageText.subscribe((text:any) => {this.sectionText = text.contact;})
  }
}
