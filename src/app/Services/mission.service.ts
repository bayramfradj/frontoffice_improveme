import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Mission} from '../model/mission';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MissionService {

  constructor(private http: HttpClient) { }

  public getMission(id: bigint): Observable<Mission>
  {
    return this.http.get<Mission>(`${environment.hostUri}:8083/missions/${id}`);
  }

  public AllFormation(): Observable<Mission[]>
  {
    return this.http.get<Mission[]>(`${environment.hostUri}:8083/missions/Formation/`);
  }

  public AllPayante(): Observable<Mission[]>
  {
    return this.http.get<Mission[]>(`${environment.hostUri}:8083/missions/Payante/`);
  }

  public AllRecrutement(): Observable<Mission[]>
  {
    return this.http.get<Mission[]>(`${environment.hostUri}:8083/missions/Recrutement/`);
  }


}
