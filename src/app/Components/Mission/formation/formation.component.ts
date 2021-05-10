import { Component, OnInit } from '@angular/core';
import {Mission} from '../../../model/mission';
import {MissionService} from '../../../Services/mission.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
  missions: Mission[];
  loaded = false;

  constructor(private msService: MissionService, private toastr: ToastrService) { }

  ngOnInit(): void {
     this.msService.AllFormation().subscribe(value => {
       this.missions = value;
       this.loaded = true;
     }, error => {
       this.toastr.error('Réessayer Ultérieurement', 'ERREUR');
       console.log('errreur: ', error.message);
     });
  }

}
