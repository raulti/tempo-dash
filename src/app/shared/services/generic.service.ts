import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { NotificationService } from '../notifications/notification.service';

@Injectable({
    providedIn: 'root'
})

export class GenericService {

    // Define API
    apiURL = 'http://localhost:8000/';

    constructor() { }

    // Http Options
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    // Error handling 
    handleError(error) {
        let errorMessage = '';
        if (error.error.error) {
            errorMessage = error.error.error;
        } else {
            errorMessage = `Erro Código: ${error.status}\n ${error.message}`;
        }

        let notificationService = new NotificationService();
        notificationService.danger(errorMessage);
        return throwError(errorMessage);
    }

    getUrl(relativeUrl){
        return this.apiURL + relativeUrl;
    }
}