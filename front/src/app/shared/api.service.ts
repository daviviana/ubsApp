import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { environment } from '../../environments/environment'
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    createAuthorizationHeader(headers: HttpHeaders) {
        headers.append('Authorization', 'Bearer ' + sessionStorage.getItem('token'));
    }

    getAll(path: string, params: HttpParams = new HttpParams()): Observable<any> {
        let headers = new HttpHeaders();
        this.createAuthorizationHeader(headers);
        return this.http.get(`${environment.apiUrl}${path}`, { headers, params });
    }

    getOne(path: string, params: HttpParams = new HttpParams()): Observable<any> {
        let headers = new HttpHeaders();
        this.createAuthorizationHeader(headers);
        return this.http.get(`${environment.apiUrl}${path}`, { headers, params });
    }

    put(path: string, body: Object = {}): Observable<any> {
        let headers = new HttpHeaders();
        this.createAuthorizationHeader(headers);
        return this.http.put(`${environment.apiUrl}${path}`, body, { headers, responseType: 'text' });
    }

    post(path: string, body: Object = {}): Observable<any> {
        let headers = new HttpHeaders();
        this.createAuthorizationHeader(headers);
        return this.http.post(`${environment.apiUrl}${path}`, body, { headers });
    }

    delete(path: string): Observable<any> {
        let headers = new HttpHeaders();
        this.createAuthorizationHeader(headers);
        return this.http.delete(`${environment.apiUrl}${path}`, { headers });
    }
}
