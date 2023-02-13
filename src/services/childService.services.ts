import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { environment } from 'src/environments/environment';
import Child from 'src/models/Child';

@Injectable({
    providedIn: 'root'
})
export default class ChildService {

    constructor(public http: HttpClient) { }
    routeUrl = `${environment.baseUrl}/Child`;
    addChild(child: Child) {
        return this.http.post<Child>(`${this.routeUrl}`, child);
    }
}