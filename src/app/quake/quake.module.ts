import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';

import { QuakeRoutes } from './quake.routing';
import { ListComponent } from './list/list.component';
import { QuakeService } from './quake.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(QuakeRoutes),
    FormsModule,
    MaterialModule
  ],
  declarations: [
    ListComponent
  ],
  providers: [
    QuakeService
  ]
})

export class QuakeModule {}
