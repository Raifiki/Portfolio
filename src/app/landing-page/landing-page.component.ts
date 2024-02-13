import { Component } from '@angular/core';
import { SocialMediaAccountsComponent } from '../shared/components/social-media-accounts/social-media-accounts.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    SocialMediaAccountsComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  test = `<button></button>`

}
