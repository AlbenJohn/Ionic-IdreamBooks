import { Component } from '@angular/core';
import { NavController ,NavParams} from 'ionic-angular';
import {ApiserviceProvider} from '../../providers/apiservice/apiservice';
import { BookdetailsPage} from '../../pages/bookdetails/bookdetails';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[ApiserviceProvider]
})
export class HomePage {
  posts: any;
  books:any;
  booktitle:any;
  image:any;

  idvalue:any;
  apiservicename:any;

  constructor(public navCtrl: NavController,params: NavParams,public apiserives:ApiserviceProvider, public http: Http) {

  //   this.http.get('http://idreambooks.com/api/publications/recent_recos.json?key=e72170b25e700c2a00439bca2ce42122d85f2165&slug=all-books').map(res => res.json()).subscribe(data => {
  //     this.posts = data;
  //     console.log(this.posts);
  // });

  this.idvalue = params.get('id');
  this.apiservicename = params.get('name');

    console.log(this.idvalue,this.apiservicename)
if(this.idvalue = 1){
  this.loadBooks(this.apiservicename)
  console.log("login")
  
}else{
  console.log("genedd")
  
}

  }

  loadBooks(apinamen){
    this.apiserives.loadapiservices(apinamen)
    .then(data => {
      this.books = data;
    });
  }

  movedetailpage(booktitle,image)
  {
    console.log(booktitle, image);
    this.navCtrl.push(BookdetailsPage,{id: booktitle, img: image} );
  }
}
