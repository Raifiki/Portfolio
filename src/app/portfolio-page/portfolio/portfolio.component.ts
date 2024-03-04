import { Component, inject } from '@angular/core';
import { PortfolioProjectComponent } from './portfolio-project/portfolio-project.component';

import { PROJECTS_DE, PROJECTS_ENG } from '../../shared/data/projects';
import { LanguageService } from '../../shared/services/language.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [PortfolioProjectComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})

export class PortfolioComponent {
  languageService = inject(LanguageService);
  projects = PROJECTS_ENG;

  sectionText = {
    HL: 'Portfolio',
    description: 'This page is a sample of my work - please feel free to try them out'
  };

  ngOnInit(){
    this.languageService.pageText.subscribe((text:any) => {
      this.sectionText = text.portfolio;
      this.projects = (this.languageService.language == 'english')? PROJECTS_ENG: PROJECTS_DE;
    })
  }

}
