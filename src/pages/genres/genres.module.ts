import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GenresPage } from './genres';
import { BookdetailsPage} from '../../pages/bookdetails/bookdetails';
import { HomePage } from '../../pages/home/home';

@NgModule({
  declarations: [
    GenresPage,
    BookdetailsPage,
    HomePage
  ],
  imports: [
    IonicPageModule.forChild(GenresPage),
  ],
})
export class GenresPageModule {}
