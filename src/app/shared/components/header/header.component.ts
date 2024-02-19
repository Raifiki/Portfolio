import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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

  setActiveTab(tab:string){
    this.activeTab = tab;
  }

  mobileMenu(state: 'show' | 'hide' | 'transition'){
    this.mobileMenuState = 'transition';
    setTimeout(()=>this.mobileMenuState = state,150);
  }
}
