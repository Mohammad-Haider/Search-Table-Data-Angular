import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormDataService {
  private dataArray: any[] = [];

  addData(data: any): void {
    this.dataArray.push(data);
  }

  getDataArray(): any[] {
    return this.dataArray;
  }
}
