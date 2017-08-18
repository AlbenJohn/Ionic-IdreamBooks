import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  usName:string = 'admin';
  password:string = 'password';

  value:number = 1;
  constructor(public navCtrl: NavController, public navParams: NavParams,public AlertCtrl: AlertController,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  //testing login 
  loginUser(username , emailid){
    console.log(this.usName,this.password);
    console.log(username,emailid);
   if(username == this.usName && emailid == this.password){



        this.navCtrl.setRoot(HomePage,{id: this.value,name:'all-books'});
    }else
    {
      console.log("Login Error");
      this.ShowAlert();
    }


  }
  
  ShowAlert(){
    let Alert = this.AlertCtrl.create({
   title:"Login Error",
   subTitle:"Please enter the correct username and password",
   buttons:['OK'] 

    });
    Alert.present();
  }


}
