import { Routes } from '@angular/router';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';

export const routes: Routes = [
    { path: '', component: PortfolioPageComponent },
    { path: './Impressum', component: PortfolioPageComponent },
];
