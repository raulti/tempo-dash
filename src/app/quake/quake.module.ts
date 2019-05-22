import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';
import { AngularFileUploaderModule } from "angular-file-uploader";


import { QuakeRoutes } from './quake.routing';
import { ListComponent } from './list/list.component';
import { QuakeService } from './quake.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(QuakeRoutes),
    FormsModule,
    ReactiveFormsModule,
    AngularFileUploaderModule
  ],
  declarations: [
    ListComponent
  ],
  providers: [
    QuakeService
  ]
})

export class QuakeModule {}
