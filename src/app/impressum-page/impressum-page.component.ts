import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../shared/services/language.service';

@Component({
  selector: 'app-impressum-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './impressum-page.component.html',
  styleUrl: './impressum-page.component.scss'
})
export class ImpressumPageComponent {
  languageService = inject(LanguageService);

  sectionText = {
    HL: 'Imprint',
    subHL: 'According to § 5 TMG',
    contact: 'Contact',
    phone: 'phone:'
  };

  ngOnInit(){
    this.languageService.pageText.subscribe((text:any) => {this.sectionText = text.imprint;})
  }
}
