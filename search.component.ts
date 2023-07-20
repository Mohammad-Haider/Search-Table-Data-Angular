import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface User {
  first_name: string;
  last_name: string;
  email: string;
}
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  constructor(private sanitizer: DomSanitizer) {}
  public search_text: string = '';

  users: any = [
    {
      first_name: 'Ali',
      last_name: 'Raza',
      email: 'aliraza@gmail.com',
    },
    {
      first_name: 'Ibrahim',
      last_name: 'Tayyab',
      email: 'ibrahimtayyab127@gmail.com',
    },
    {
      first_name: 'Asjad',
      last_name: 'Naeem',
      email: 'asjadnaeem25@hotmail.com',
    },
    {
      first_name: 'Usman',
      last_name: 'Elahi',
      email: 'usmanelahi123@yahoo.com',
    },
    {
      first_name: 'Faiq',
      last_name: 'Shahzad',
      email: 'faiqsh@gmail.com',
    },
    {
      first_name: 'Emaan',
      last_name: 'Arshad',
      email: 'emaanarshad@icommunix.com',
    },
    {
      first_name: 'Waqar',
      last_name: 'Amjad',
      email: 'waqaramjad@icommunix.com',
    },
    {
      first_name: 'Syed Mohib Ali',
      last_name: 'Kazmi',
      email: 'mohibali@gmail.com',
    },
  ];
}
