import { Component } from '@angular/core';
import { PortfolioProjectComponent } from './portfolio-project/portfolio-project.component';
import { PortfolioProject } from '../shared/interfaces/interfaces';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [PortfolioProjectComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})

export class PortfolioComponent {
    projects: PortfolioProject[] = [
      {
        name: 'Pokedex',
        imgPath: 'assets/images/projects/Pokedex_test.png',
        technologies: [
          'Javascript',
          'HTML',
          'CSS',
          'Api'
        ],
        description:  'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
        urlGit: '',
        urlDemo: ''
      },
      {
        name: 'Join',
        imgPath: 'assets/images/projects/Join_test.png',
        technologies: [
          'Javascript',
          'HTML',
          'CSS'
        ],
        description:  'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
        urlGit: 'https://github.com/Raifiki/Join_Portfolio',
        urlDemo: ''
      },
      {
        name: 'Sharkie',
        imgPath: 'assets/images/projects/Sharkie_test.png',
        technologies: [
          'Javascript',
          'HTML',
          'CSS',
          'JS OOP'
        ],
        description:  'A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.',
        urlGit: 'https://github.com/Raifiki/gameSharky',
        urlDemo: ''
      },
      {
        name: 'Ring of Fire',
        imgPath: 'assets/images/projects/Sharkie_test.png',
        technologies: [
          'Angular',
          'Typscript',
          'HTML',
          'CSS',
          'Firebase'
        ],
        description:  'A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.',
        urlGit: '',
        urlDemo: ''
      }
  ]
}
