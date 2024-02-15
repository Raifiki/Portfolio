import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  validationName: 'empty' | 'error' | 'valid' = 'error';
  validationEmail: 'empty' | 'error' | 'valid' = 'empty';
  validationMsg: 'empty' | 'error' | 'valid' = 'valid';
  validationPP: 'empty' | 'error' | 'valid' = 'valid';

  formDataValid: boolean = true;
}
