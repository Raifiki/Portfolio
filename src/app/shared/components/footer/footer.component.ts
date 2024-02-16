import { Component } from '@angular/core';
import { SocialMediaAccountsComponent } from '../social-media-accounts/social-media-accounts.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SocialMediaAccountsComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
