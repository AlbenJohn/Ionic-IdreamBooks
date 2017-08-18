import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BookdetailsPage} from '../../pages/bookdetails/bookdetails';
import { HomePage } from '../../pages/home/home';

/**
 * Generated class for the GenresPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-genres',
  templateUrl: 'genres.html',
})
export class GenresPage {

  arrayvalues = ["all-books","bestsellers","fiction","non-fiction","action-adventure"];
  dataarray = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
    for( var i=0; i<this.arrayvalues.length; i++){

       this.dataarray.push({'title' :this.arrayvalues[i]});
        }
      console.log(this.dataarray);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GenresPage');
  }
  editProduct(i)
  {
    console.log(i);
    var iii=2;
    this.navCtrl.push(HomePage,{name: i, id:iii} );
    
    // if(i = this.dataarray[i]){
    //       console.log("index values same",this.dataarray[i]);

    // }else{
    //   console.log("index values different");
      
    // }
  }
}
