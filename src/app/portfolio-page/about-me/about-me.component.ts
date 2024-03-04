import { Component, inject } from '@angular/core';

import { LanguageService } from '../../shared/services/language.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  languageService = inject(LanguageService);

  sectionText = {
    HL: 'About me',
    paragraph1: 'Hey, I\'m Leo Weiß, and after 7 years in power electronics development, I\'ve decided to dive into the world of software. I\'ve always been passionate about coding, which led me to successfully transition to frontend development through the Developer Academy. During this part-time training, I worked on individual and team projects, honing my skills in HTML, CSS, and JavaScript. Interested? You can find all my abilities and top projects listed below.',
    paragraph2: 'What excites me about software development is the ability to quickly and affordably bring a project to life from an idea. Additionally, I thrive on problem-solving and learning new technologies, which aligns perfectly with the dynamic nature of the software world.',
    paragraph3: 'I\'m eager to put my skills into practice and am actively seeking new projects and challenges. As the software landscape is ever-evolving, I look forward to embracing and applying new technologies. If I\'ve piqued your interest, I\'d love to hear from you! Feel free to reach out below :-).',
  };

  ngOnInit(){
    this.languageService.pageText.subscribe((text:any) => {this.sectionText = text.aboutMe;})
  }
}
