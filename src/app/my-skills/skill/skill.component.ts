import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss'
})
export class SkillComponent {
  @Input() name: string = 'Angular';
  @Input() imgPath: string = 'assets/icons/skills/angular.svg';
}
