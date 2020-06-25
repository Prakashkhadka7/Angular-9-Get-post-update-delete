import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Army } from './army';

@Injectable({
  providedIn: 'root'
})
export class ArmyService {
 base_Url = 'http://localhost:3000';
  constructor( private http: HttpClient) {

   }
httpOptions =  {
 headers : new HttpHeaders({
   'Content-Type': 'application/json'
  })
}

//POST  New ARMY IN ARMY LIST
createArmy(data): Observable<Army>{
  return this.http.post<Army>(this.base_Url + '/Armies/' ,JSON.stringify(data), this.httpOptions)
  .pipe(
    retry(2),
    catchError(this.errorHandlerss)
  )
}
// GET METHOD FOR GAINING ARMY FROM BaCKEND
getArmy(id): Observable<Army>{
  return this.http.get<Army>(this.base_Url + '/Armies/' + id)
  .pipe(
    retry(1),
    catchError(this.errorHandlerss)
  )
}
getArmies(): Observable<Army>{
  return this.http.get<Army>(this.base_Url+ '/Armies/')
  .pipe(
    retry(1),
    catchError(this.errorHandlerss)
  )
  }
  // PUT  UPDATE METHOD FOR UPDATING ID AND DATA
 updateArmy( id,data): Observable<Army>{
    return this.http.put<Army>(this.base_Url + '/Armies/' + id, JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandlerss)
    )
 }

 // DELETE ARMIES
deleteArmy(id) {
  return this.http.delete<Army>(this.base_Url + '/Armies/' + id, this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.errorHandlerss)
  )
}

errorHandlerss(error){
let errorMessage = '';
if (error.error instanceof ErrorEvent){
  errorMessage = error.error.message;   // This is  client-Side Error
}
else {
  errorMessage = `Error Code:${error.status}\nMessage: ${error.message}`;
}
console.log(errorMessage);
return throwError(errorMessage);
}

}
