import { Routes } from '@angular/router';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { ImpressumPageComponent } from './impressum-page/impressum-page.component';

export const routes: Routes = [
    { path: '', component: PortfolioPageComponent },
    { path: 'imprint', component: ImpressumPageComponent },
];
