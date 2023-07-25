import { FormDataService } from './../services/form-data.service';
import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { UserdataService } from '../services/userdata.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  page_number: number = 1;
  constructor(
    private sanitizer: DomSanitizer,
    private dataService: FormDataService,
    private user_data: UserdataService
  ) {
    this.getInfo();
  }
  public search_text: string = '';

  users: any = [
    // {
    //   first_name: 'Syed Ali',
    //   last_name: 'Raza Gillani',
    //   email: 'aliraza@gmail.com',
    // },
    // {
    //   first_name: 'Muhammad Ibrahim',
    //   last_name: 'Tayyab',
    //   email: 'ibrahimtayyab127@gmail.com',
    // },
    // {
    //   first_name: 'Muhammad Asjad',
    //   last_name: 'Naeem',
    //   email: 'asjadnaeem25@hotmail.com',
    // },
    // {
    //   first_name: 'Muhammad Usman',
    //   last_name: 'Elahi',
    //   email: 'usmanelahi123@yahoo.com',
    // },
    // {
    //   first_name: 'Faiq',
    //   last_name: 'Shahzad Kamboh',
    //   email: 'faiqsh@gmail.com',
    // },
    // {
    //   first_name: 'Emaan',
    //   last_name: 'Arshad',
    //   email: 'emaanarshad@icommunix.com',
    // },
    // {
    //   first_name: 'Waqar',
    //   last_name: 'Amjad',
    //   email: 'waqaramjad@icommunix.com',
    // },
    // {
    //   first_name: 'Syed Mohib Ali',
    //   last_name: 'Kazmi',
    //   email: 'mohibali@gmail.com',
    // },
  ];

  getInfo() {
    // add in your.component.ts
    // this.users = this.dataService.getDataArray();

    this.user_data.showUsers().subscribe((data) => {
      this.users = data;
    });
  }
}
