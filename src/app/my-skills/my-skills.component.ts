import { Component } from '@angular/core';
import { SkillComponent } from './skill/skill.component';

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
  skills = [
    {urlImg: 'assets/icons/skills/angular.svg', name: 'Angular'},
    {urlImg: 'assets/icons/skills/typescript.svg', name: 'TypeScript'},
    {urlImg: 'assets/icons/skills/javascript.svg', name: 'JavaScript'},
    {urlImg: 'assets/icons/skills/html.svg', name: 'HTML'},
    {urlImg: 'assets/icons/skills/firebase.svg', name: 'Firebase'},
    {urlImg: 'assets/icons/skills/git.svg', name: 'GIT'},
    {urlImg: 'assets/icons/skills/css.svg', name: 'CSS'},
    {urlImg: 'assets/icons/skills/rest-api.svg', name: 'Rest-Api'},
    {urlImg: 'assets/icons/skills/scrum.svg', name: 'Scrum'},
    {urlImg: 'assets/icons/skills/material-design.svg', name: 'Material Design'},
  ]
}
