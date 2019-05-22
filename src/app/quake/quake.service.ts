import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';

import { GenericService } from '../shared/services/generic.service';

@Injectable()
export class QuakeService extends GenericService {

    constructor(private http: HttpClient) {
        super();
    }

    getRelativeUrl(){
        console.log(this.getUrl('parse'));
        return this.getUrl('parse');
    }
}