import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Response} from '@angular/http';
import { Observable, of } from 'rxjs';
import {Firm} from './firm';
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    
    };

@Injectable({
    providedIn: 'root'
})

export class FirmService {


    private firmsUrl ='http://localhost:5000/api';
    
    constructor(
        private messageService: MessageService,
        private http: HttpClient
    ) { }

    private log(message: string) {
        this.messageService.add(`FirmService: ${message}`);
    }
    
    getFirms():Observable< Firm[]> {
        
        return this.http.get<Firm[]>(`${this.firmsUrl}/firms`)
            .pipe(
                tap(firms => this.log('fetched firms')),
                catchError(
                    this.handleError('getFirms', []))
            );
    }
    deleteFirm (firm:Firm | number): Observable<any>{
        const id = typeof firm === 'number' ? firm : firm.fid;
        const url = `${this.firmsUrl}/firms/${id}`  ;
        return this.http.delete<any>(url,httpOptions)
            .pipe(
            tap(_ => this.log(`deleted firm id=${id}`)),
            catchError(this.handleError<any>('deleteFirm'))
        );
    }
    
    getFirm(id: number): Observable<Firm> {
        const url = `${this.firmsUrl}/firms/${id}`;
        return this.http.get<Firm>(url).pipe(
            tap(_ => this.log(`fetched firm fid=${id}`)),
            catchError(this.handleError<Firm>(`getFirm fid=${id}`))
        );

        //return this.http.get<Firm>(this.firmsUrl)
        //return of(Firms.find(firm => firm.fid === id));
    }


    updateFirm (firm: Firm): Observable<any> {
        return this.http.put(`${this.firmsUrl}/firms/${firm.fid}`, firm, httpOptions).pipe(
            tap(_ => this.log(`updated firm id=${firm.fid}`)),
            catchError(this.handleError<any>('updateFirm'))
        );
    }

    addFirm (firm): Observable<Firm> {
        //this.log((`${firm.firmName}${firm.fid} ${firm.timestamp}`));
        return this.http.post<Firm>(`${this.firmsUrl}/firms`,firm, httpOptions)
            .pipe(
                tap((firm: Firm) => this.log(`added firm w/ id=${firm.fid}`)),
                catchError(this.handleError<Firm>('addFirm'))
            );
    }
    
    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);            
            this.log(`${operation} failed: ${error.message}`);
            return of(result as T);
        };
    }

}

