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

export class ListComponent extends ValidationFormsComponent implements OnInit, AfterViewInit {
    public dataTable: DataTable;
    private table = $('#datatables').DataTable();
    private formGroup: FormGroup;
    private afuConfig: {};

    constructor(private router: Router, private formBuilder: FormBuilder, private _notificationService: NotificationService, private _quakeService: QuakeService) {
      super();
    }

    ngOnInit() {

      this.afuConfig = {
        multiple: false,
        formatsAllowed: ".txt",
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
          afterUploadMsg_success: 'Upload Complete!',
          afterUploadMsg_error: 'Falha ao subir o arquivo!'
      }
    };         
       
    }

    ngAfterViewInit() {
      // this.creatDataTable();
      // this.addClassFormGroup();
    }

    returnRequest(data){
      console.log(data);
    }

    addClassFormGroup(){
      $('.card .material-datatables label').addClass('form-group');
    }

    creatDataTable(){
      $('#datatables').DataTable({
        "pagingType": "full_numbers",
        "lengthMenu": [
          [10, 25, 50, -1],
          [10, 25, 50, "Todos"]
        ],
        responsive: true,
        language: {
          url: './assets/data-table-pt-br.json'
        }
      });
    }

    dataTableConfig(rows){
      this.dataTable = {
        headerRow: [ 'Nome', 'cpf', 'e-mail', 'Ações' ],
        dataRows: rows
      };
    }

    makeDataTableRowns(data){
      let newArray = [];
      data.forEach(obj => {
        newArray.push([obj.nome, obj.cpf, obj.email, '']);
      });
      return newArray;
    }
}
