export interface Skill {
    name: string;
    imgPath: string
  }

export interface PortfolioProject{
  name: string;
  imgPath: string;
  technologies: string[];
  description: string;
  urlGit: string;
  urlDemo: string;
}