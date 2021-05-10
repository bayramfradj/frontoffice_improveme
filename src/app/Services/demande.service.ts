import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Demande} from '../model/demande';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  constructor(private http: HttpClient) { }

  public create(demande: Demande): Observable<Demande>
  {
    return this.http.post<Demande>(`${environment.hostUri}:8083/demandes/`, demande);
  }

  public GetNbrInscription(missionId: bigint): Observable<number>
  {
    return this.http.get<number>(`${environment.hostUri}:8083/demandes/Inscription/Nombre/${missionId}`);
  }

  public CheckDemandeByUser(userId: string, missionId: bigint): Observable<boolean>
  {
    return this.http.get<boolean>(`${environment.hostUri}:8083/demandes/Check/${userId}/${missionId}`);
  }
}
