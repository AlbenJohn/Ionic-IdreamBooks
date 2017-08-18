import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
import {ApiserviceProvider} from '../../providers/apiservice/apiservice';

/**
 * Generated class for the DashboardPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
  providers:[ApiserviceProvider]
  
})
export class DashboardPage {
  @ViewChild('barCanvas') barCanvas;
  @ViewChild('doughnutCanvas') doughnutCanvas;
  
        barChart: any;
        doughnutChart:any;
        books:any;
        bookarray:any =[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public apiserives:ApiserviceProvider) {

  }

  loadBooks(){
      var name = 'all-books';
    this.apiserives.loadapiservices(name)
    .then(data => {
      this.books = data;
       // this.bookarray = this.books;
        //console.log(this.bookarray);
        for (var i=0; i<this.books.length-19; i++) {
           // console.log(this.books[i]['title']);
            this.bookarray.push(this.books[i]['title']);
            
          }
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
    this.loadBooks();
    console.log(this.bookarray);
    
    this.barChart = new Chart(this.barCanvas.nativeElement, {
       
        type: 'bar',
                 data: {
                   // this.barChart.chart.config.data.labels = labels;
                    labels:[this.bookarray],
                   //  labels: [this.bookarray],
                     datasets: [{
                         label: '# of rating',
                         data: [12, 19, 3, 5, 2, 3],
                         backgroundColor: [
                             'rgba(255, 99, 132, 0.2)',
                             'rgba(54, 162, 235, 0.2)',
                             'rgba(255, 206, 86, 0.2)',
                             'rgba(75, 192, 192, 0.2)',
                             'rgba(153, 102, 255, 0.2)',
                             'rgba(255, 159, 64, 0.2)'
                         ],
                         borderColor: [
                             'rgba(255,99,132,1)',
                             'rgba(54, 162, 235, 1)',
                             'rgba(255, 206, 86, 1)',
                             'rgba(75, 192, 192, 1)',
                             'rgba(153, 102, 255, 1)',
                             'rgba(255, 159, 64, 1)'
                         ],
                         borderWidth: 1
                     }]
                 },
                 options: {
                     scales: {
                         yAxes: [{
                             ticks: {
                                 beginAtZero:true
                             }
                         }]
                     }
                 }
      
             });




             //doughnutChart

             this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
              
                         type: 'doughnut',
                         data: {
                             labels: [this.bookarray],
                             datasets: [{
                                 label: '# of rating',
                                 data: [12, 19, 3, 5, 2, 3],
                                 backgroundColor: [
                                     'rgba(255, 99, 132, 0.2)',
                                     'rgba(54, 162, 235, 0.2)',
                                     'rgba(255, 206, 86, 0.2)',
                                     'rgba(75, 192, 192, 0.2)',
                                     'rgba(153, 102, 255, 0.2)',
                                     'rgba(255, 159, 64, 0.2)'
                                 ],
                                 hoverBackgroundColor: [
                                     "#FF6384",
                                     "#36A2EB",
                                     "#FFCE56",
                                     "#FF6384",
                                     "#36A2EB",
                                     "#FFCE56"
                                 ]
                             }]
                         }
              
                     });
             

  }

}
