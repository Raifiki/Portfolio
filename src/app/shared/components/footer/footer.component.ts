import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SocialMediaAccountsComponent } from '../social-media-accounts/social-media-accounts.component';

import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SocialMediaAccountsComponent,RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  languageService = inject(LanguageService);

  sectionText = {
    imprint: 'imprint'
};

  ngOnInit(){
    this.languageService.pageText.subscribe((text:any) => {this.sectionText = text.footer;})
  }
}
