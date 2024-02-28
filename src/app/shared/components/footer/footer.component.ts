import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SocialMediaAccountsComponent } from '../social-media-accounts/social-media-accounts.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SocialMediaAccountsComponent,RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
