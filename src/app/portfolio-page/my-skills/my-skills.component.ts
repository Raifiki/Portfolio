import { Component, inject } from '@angular/core';
import { SkillComponent } from './skill/skill.component';

import { LanguageService } from '../../shared/services/language.service';
import { SKILLS } from '../../shared/data/skills';


@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [
    SkillComponent
  ],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})

export class MySkillsComponent {
  languageService = inject(LanguageService);

  sectionText = {
        HL: 'My skills',
        description: 'I have gained experience in building projects with various front end technologies and concepts.',
        contact: 'Get in touch'
  };

  ngOnInit(){
    this.languageService.pageText.subscribe((text:any) => {this.sectionText = text.mySkills;})
  }
  skills = SKILLS;
}
