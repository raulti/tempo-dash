// IMPORTANT: this is a plugin which requires jQuery for initialisation and data manipulation

import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
    selector: 'app-notifications-cmp'
})
export class NotificationsComponent implements OnInit {
    showNotification(msg, type) {

        $.notify({
            icon: 'notifications',
            message: msg != undefined ? msg : 'Algo deu errado, tente novamente ou contacte o administrador do sistema!'
        }, {
            type: type,
            timer: 30000,
            placement: {
                from: 'top',
                align: 'right'
            },
            template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0} alert-with-icon" role="alert">' +
          		'<button mat-raised-button type="button" aria-hidden="true" class="close" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
          		'<i class="material-icons" data-notify="icon">notifications</i> ' +
          		'<span data-notify="title">{1}</span> ' +
          		'<span data-notify="message">{2}</span>' +
          		'<div class="progress" data-notify="progressbar">' +
          			'<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
          		'</div>' +
          		'<a href="{3}" target="{4}" data-notify="url"></a>' +
          	'</div>'
        });
    }
    ngOnInit(){
        var mainPanel = document.getElementsByClassName('main-panel')[0];
        $('.modal').on('shown.bs.modal', function () {
          mainPanel.classList.add('no-scroll');
        })
        $('.modal').on('hidden.bs.modal', function () {
          mainPanel.classList.remove('no-scroll');
        })
    }
}
