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

    listPessoas(): Observable<any> {
        return this.http.get<any>(this.getUrl('parse'), this.httpOptions)
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
    }
}