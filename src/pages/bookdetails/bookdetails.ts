import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ApiserviceProvider} from '../../providers/apiservice/apiservice';

/**
 * Generated class for the BookdetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bookdetails',
  templateUrl: 'bookdetails.html',
  providers:[ApiserviceProvider]
  
})
export class BookdetailsPage {

  id:any;
  TitleBook:any;
  booldetails:any;
  keys:any;
  imagename :any;
  Critic_Rev:any;

  constructor(public navCtrl: NavController, params: NavParams,public apiserives:ApiserviceProvider, public navParams: NavParams) {
    this.TitleBook = params.get('id');
    this.imagename = params.get('img');
    
    console.log("hfdjhgjshjdas",this.TitleBook, this.imagename);
    this.loadBooksdetails();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookdetailsPage');
  }

  loadBooksdetails(){
    this.apiserives.loadindbook(this.TitleBook)
    .then(data => {
      this.booldetails = data;

      this.keys = Object.keys(this.booldetails);
      this.Critic_Rev = this.booldetails.book.critic_reviews;
      console.log("book details",this.booldetails.book.critic_reviews);
      
    });
  }

}
