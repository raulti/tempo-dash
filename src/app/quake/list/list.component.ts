// IMPORTANT: this is a plugin which requires jQuery for initialisation and data manipulation

import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/notifications/notification.service';
import { QuakeService } from '../quake.service';
import { ValidationFormsComponent } from 'src/app/shared/validationforms/validationforms.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

declare interface DataTable {
  headerRow: string[];
  dataRows: string[][];
}

declare const $: any;

@Component({
    selector: 'app-quake-list',
    templateUrl: 'list.component.html'
})

export class ListComponent extends ValidationFormsComponent implements OnInit {
    private afuConfig: {};
    public jogos = [];

    constructor(private router: Router, private _notificationService: NotificationService, private _quakeService: QuakeService) {
      super();
    }

    ngOnInit() {

      this.afuConfig = {
        multiple: false,
        formatsAllowed: ".log",
        maxSize: "1",
        uploadAPI:  {
          url: this._quakeService.getRelativeUrl()
        },
        hideProgressBar: false,
        hideResetBtn: false,
        hideSelectBtn: false,
        replaceTexts: {
          selectFileBtn: 'Selecionar Log',
          resetBtn: 'Limpar',
          uploadBtn: 'Subir arquivo',
          dragNDropBox: 'Drag N Drop',
          attachPinBtn: 'Subir arquivo...',
          afterUploadMsg_success: 'Arquivo upado!',
          afterUploadMsg_error: 'Falha ao subir o arquivo!'
        }
      };         
    }

    returnRequest(data){
      this.jogos = JSON.parse(data.response).splice(1,21);
    }
}
