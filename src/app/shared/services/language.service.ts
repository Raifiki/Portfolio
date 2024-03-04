import { Injectable } from '@angular/core';

import { TEXTOPTIONS } from '../data/pageText';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  language: 'german' | 'english' = 'english';



  pageText = new BehaviorSubject<{}> ({
    header: {},
    landingPage: {},
    aboutMe: {},
    mySkills: {},
    portfolio: {},
    contact: {},
    footer: {},
    imprint: {},
  });

  constructor() {
    this.setLanguage('english');
   }

  setLanguage(language:'german' | 'english'){
    this.language = language;
    (language == 'english')? this.setEnglish(): this.setGerman();
  }

  setEnglish(){
    let pageText = {
      header : TEXTOPTIONS.header.english,
      landingPage : TEXTOPTIONS.landingPage.english,
      aboutMe : TEXTOPTIONS.aboutMe.english,
      mySkills : TEXTOPTIONS.mySkills.english,
      portfolio : TEXTOPTIONS.portfolio.english,
      contact : TEXTOPTIONS.contact.english,
      footer : TEXTOPTIONS.footer.english,
      imprint : TEXTOPTIONS.imprint.english,
    };    
    this.pageText.next(pageText);
  }

  setGerman(){
    let pageText = {
      header : TEXTOPTIONS.header.german,
      landingPage : TEXTOPTIONS.landingPage.german,
      aboutMe : TEXTOPTIONS.aboutMe.german,
      mySkills : TEXTOPTIONS.mySkills.german,
      portfolio : TEXTOPTIONS.portfolio.german,
      contact : TEXTOPTIONS.contact.german,
      footer : TEXTOPTIONS.footer.german,
      imprint : TEXTOPTIONS.imprint.german,
    };
    this.pageText.next(pageText);
  }
}
