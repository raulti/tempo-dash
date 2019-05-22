// IMPORTANT: this is a plugin which requires jQuery for initialisation and data manipulation

import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/notifications/notification.service';
import { QuakeService } from '../quake.service';

declare interface DataTable {
  headerRow: string[];
  dataRows: string[][];
}

declare const $: any;

@Component({
    selector: 'app-quake-list',
    templateUrl: 'list.component.html'
})

export class ListComponent implements OnInit, AfterViewInit {
    public dataTable: DataTable;
    private table = $('#datatables').DataTable();

    constructor(private router: Router, private _notificationService: NotificationService, private _quakeService: QuakeService) {
    }

    ngOnInit() {
        this.list();
    }

    ngAfterViewInit() {
      this.creatDataTable();
      this.addClassFormGroup();
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

    list(){
      this._quakeService.listPessoas().subscribe((data) => {
        this.dataTableConfig(this.makeDataTableRowns(data));
      })
    }

    makeDataTableRowns(data){
      let newArray = [];
      data.forEach(obj => {
        newArray.push([obj.nome, obj.cpf, obj.email, '']);
      });
      return newArray;
    }
}
