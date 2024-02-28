import { Component } from '@angular/core';
import { SkillComponent } from './skill/skill.component';
import { Skill } from '../../shared/interfaces/interfaces';


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
  skills: Skill[] = [
    {imgPath: 'assets/icons/skills/angular.svg', name: 'Angular'},
    {imgPath: 'assets/icons/skills/typescript.svg', name: 'TypeScript'},
    {imgPath: 'assets/icons/skills/javascript.svg', name: 'JavaScript'},
    {imgPath: 'assets/icons/skills/html.svg', name: 'HTML'},
    {imgPath: 'assets/icons/skills/firebase.svg', name: 'Firebase'},
    {imgPath: 'assets/icons/skills/git.svg', name: 'GIT'},
    {imgPath: 'assets/icons/skills/css.svg', name: 'CSS'},
    {imgPath: 'assets/icons/skills/rest-api.svg', name: 'Rest-Api'},
    {imgPath: 'assets/icons/skills/scrum.svg', name: 'Scrum'},
    {imgPath: 'assets/icons/skills/material-design.svg', name: 'Material Design'},
  ]
}
