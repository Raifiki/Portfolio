import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LanguageService } from '../../../shared/services/language.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  languageService = inject(LanguageService);

  sectionText = {
    HL: 'Contact',
    subHL: 'Got a problem to solve?',
    description1: 'Contact me through this form, I am interested in hearing you, knowing your ideas and contributing to your projects with my work.',
    description2: 'Need a Frontend developer?',
    description3: 'Contact me!',
    form: {
        name: 'Your name',
        email: 'Your email',
        message: 'Your message',
        privacyPolicy1:'I\'ve read the',
        privacyPolicy2:'privacy policy',
        privacyPolicy3:'and agree to the processing of my data as outlined',
        send: 'Send message',
        thankYou: 'Thank you!'
    }
};


  http = inject(HttpClient);

  formData = {
    name: "",
    email: "",
    message: "",
    privacypolicy: false
  }

  mailTest = true;
  playSendEmailAnimation:boolean = false;

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  ngOnInit(){
    this.languageService.pageText.subscribe((text:any) => {this.sectionText = text.contact;})    
  }

  submitForm(form: NgForm){
    if (form.submitted && form.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.formData))
        .subscribe({
          next: (response) => {

            form.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (form.submitted && form.form.valid && this.mailTest) {
      this.playSendEmailAnimation = true;
      form.resetForm();
      setTimeout(() => {this.playSendEmailAnimation = false;},5000);
    }
  }
}
