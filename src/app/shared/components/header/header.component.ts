import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  activeTab: string = '';
  mobileMenuState: 'show' | 'hide' | 'transition' = 'hide';

  constructor(public router: Router){}

  setActiveTab(tab:string){
    this.activeTab = tab;
  }

  mobileMenu(state: 'show' | 'hide' | 'transition'){
    this.mobileMenuState = 'transition';
    setTimeout(()=>this.mobileMenuState = state,150);
    console.log(this.router.url);
  }
}
