import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchText',
})
export class SearchTextPipe implements PipeTransform {
  new_first_name: string[] = [];
  new_last_name: string[] = [];
  new_string: string[] = [];
  transform(value: any, args?: any): any {
    // if (!value) {
    //   return null; //if no data then return null as no search needed
    // } else if (!args) {
    //   return value; //if no search then return the value as no search was given
    // } else {
    //   args = args.toLowerCase(); //convert it to lowercase
    //   args = args.trim(); //removes white spaces

    //   for (let i = 0; i < value.length; i++) {
    //     if (value[i]?.first_name && value[i]?.last_name) {
    //       this.new_first_name[i] = value[i].first_name; //store it in another array so that actual data isn't tampered
    //       this.new_last_name[i] = value[i].last_name; //store it in another array so that actual data isn't tampered
    //       this.new_first_name[i] = this.new_first_name[i].split(' ').join(''); //remove spaces in first name
    //       this.new_last_name[i] = this.new_last_name[i].split(' ').join(''); //remove spaces in last name
    //       this.new_string[i] = this.new_first_name[i].concat(
    //         this.new_last_name[i]
    //       ); //joins the two strings
    //       this.new_string[i] = this.new_string[i].toLowerCase();
    //     }
    //   }
    //   return value.filter((item: any) => {
    //     return this.new_string.includes(args); //value is converted to JSON and then checked if the search value is present or not if yes then it includes it
    //   });
    // }
    if (!value) {
      return null; // If no data then return null as no search needed
    } else if (!args) {
      return value; // If no search then return the value as no search was given
    } else {
      args = args.toLowerCase(); // Convert it to lowercase
      args = args.trim(); // Removes white spaces
      args = args.split(' ').join('');

      return value.filter((user: any) => {
        let fullName = (
          user.first_name +
          user.last_name +
          user.email
        ).toLowerCase();
        fullName = fullName.split(' ').join('');
        return fullName.includes(args); // Check if the search value is present in the data
      });
    }
  }
}
