import { Component, Input } from '@angular/core';
import { PortfolioProject } from '../../../shared/interfaces/interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio-project.component.html',
  styleUrl: './portfolio-project.component.scss'
})
export class PortfolioProjectComponent {
  @Input() project: PortfolioProject = 
    {
      name: 'Join',
      imgPath: 'assets/images/projects/Join_test.png',
      technologies: [
        'Javascript',
        'HTML',
        'CSS'
      ],
      description:  'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
      urlGit: '',
      urlDemo:''
    }
    @Input() imgLeft: boolean = true;
}
