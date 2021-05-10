import { Component, OnInit } from '@angular/core';
import {Mission} from '../../../model/mission';
import {MissionService} from '../../../Services/mission.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-recrutement',
  templateUrl: './recrutement.component.html',
  styleUrls: ['./recrutement.component.css']
})
export class RecrutementComponent implements OnInit {
  missions: Mission[];
  loaded = false;

  constructor(private msService: MissionService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.msService.AllRecrutement().subscribe(value => {
      this.missions = value;
      this.loaded = true;
    }, error => {
      this.toastr.error('Réessayer Ultérieurement', 'ERREUR');
      console.log('errreur: ', error.message);
    });
  }

}
