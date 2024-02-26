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
        imgPath: 'assets/images/projects/Pokedex_Vorlage_Laptop.png',
        technologies: [
          'Javascript',
          'HTML',
          'CSS',
          'Api'
        ],
        description:  'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
        urlGit: 'https://github.com/Raifiki/Pokedex',
        urlDemo: 'https://leonard-weiss.developerakademie.net/Projekte/M09_Pokedex/index.html'
      },
      {
        name: 'Join',
        imgPath: 'assets/images/projects/Join_Vorlage_Laptop.png',
        technologies: [
          'Javascript',
          'HTML',
          'CSS'
        ],
        description:  'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
        urlGit: 'https://github.com/Raifiki/Join_Portfolio',
        urlDemo: 'https://leonard-weiss.developerakademie.net/Projekte/M12_JoinPortfolio/index.html'
      },
      {
        name: 'Sharkie',
        imgPath: 'assets/images/projects/Sharkie_Vorlage_Laptop.png',
        technologies: [
          'Javascript',
          'HTML',
          'CSS',
          'JS OOP'
        ],
        description:  'A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.',
        urlGit: 'https://github.com/Raifiki/gameSharky',
        urlDemo: 'https://leonard-weiss.developerakademie.net/Projekte/M11_Sharkie/index.html'
      },
      {
        name: 'This Page',
        imgPath: 'assets/images/projects/Portfolio_Vorlage_Laptop.png',
        technologies: [
          'Angular',
          'Typscript',
          'HTML',
          'CSS'
        ],
        description:  'My portfolio page where I introduce myself and present my best projects. Additionaly you can contact me trough a contact form. I am exicted to hear from you.',
        urlGit: 'https://github.com/Raifiki/Portfolio',
        urlDemo: 'https://leonard-weiss.developerakademie.net/angular-projects/M15_portfolio/'
      }
  ]
}
