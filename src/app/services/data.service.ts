import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService{
    constructor( private http: Http){
        console.log("DataService Initialized");
    }
    getData() {
        return this.http.get('../../schema.json').map(res => res.json());
    }
}