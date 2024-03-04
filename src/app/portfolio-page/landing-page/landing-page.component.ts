import { Component, inject } from '@angular/core';
import { SocialMediaAccountsComponent } from '../../shared/components/social-media-accounts/social-media-accounts.component';

import { LanguageService } from '../../shared/services/language.service';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    SocialMediaAccountsComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  languageService = inject(LanguageService);

  sectionText = {
    name: 'Leonard Weiß',
    developer: 'FRONTEND DEVELOPER',
    salutation: 'I am',
    contact: 'Lets talk!',
    scroll: 'Scroll down'
  };

  ngOnInit(){
    this.languageService.pageText.subscribe((text:any) => {this.sectionText = text.landingPage;})
  }
}
