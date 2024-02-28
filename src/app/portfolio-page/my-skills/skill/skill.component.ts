import { Component, Input } from '@angular/core';
import { Skill } from '../../../shared/interfaces/interfaces';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss'
})

export class SkillComponent {
  @Input() skill: Skill = {
  name: 'Angular',
  imgPath: 'assets/icons/skills/angular.svg'
  }
}
