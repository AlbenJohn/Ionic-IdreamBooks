import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ApiserviceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ApiserviceProvider {

  data:any;
  titlebook:any;
  constructor(public http: Http) {
    console.log('Hello ApiserviceProvider Provider');
  }

  loadapiservices(apiname) {
    // if (this.data) {
    //   // already loaded data
    //   return Promise.resolve(this.data);
    // }
  
    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular HTTP provider to request the data,
      // then on the response, it'll map the JSON data to a parsed JS object.
      // Next, we process the data and resolve the promise with the new data.
      this.http.get('http://idreambooks.com/api/publications/recent_recos.json?key=e72170b25e700c2a00439bca2ce42122d85f2165&slug='+apiname)
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.data = data;
          resolve(this.data);
        });
    });
  }

  loadindbook(titlebook){
// don't have the data yet
return new Promise(resolve => {
  // We're using Angular HTTP provider to request the data,
  // then on the response, it'll map the JSON data to a parsed JS object.
  // Next, we process the data and resolve the promise with the new data.
  this.http.get('http://idreambooks.com/api/books/reviews.json?q=' + titlebook + '&key=e72170b25e700c2a00439bca2ce42122d85f2165')
    .map(res => res.json())
    .subscribe(data => {
      // we've got back the raw data, now generate the core schedule data
      // and save the data for later reference
      this.data = data;
      resolve(this.data);
    });
});
  }

}
