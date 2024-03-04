import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  languageService = inject(LanguageService);

  activeTab: string = '';
  mobileMenuState: 'show' | 'hide' | 'transition' = 'hide';

  sectionText = {
    aboutMe: 'about me',
    skills: 'skills',
    portfolio: 'portfolio',
    contact: 'contact'
  };


  constructor(public router: Router){ }

  ngOnInit(){
    this.languageService.pageText.subscribe((text:any) => {this.sectionText = text.header;})
  }

  setActiveTab(tab:string){
    this.activeTab = tab;
  }

  mobileMenu(state: 'show' | 'hide' | 'transition'){
    this.mobileMenuState = 'transition';
    setTimeout(()=>this.mobileMenuState = state,150);
  }
}
