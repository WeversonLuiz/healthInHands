import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DashBoardPage } from './dash-board';

import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    DashBoardPage,
  ],
  imports: [
    IonicPageModule.forChild(DashBoardPage),
    ChartsModule
  ],
})
export class DashBoardPageModule {}
