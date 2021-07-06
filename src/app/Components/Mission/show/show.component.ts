import {Component, OnInit} from '@angular/core';
import {MissionService} from '../../../Services/mission.service';
import {ActivatedRoute} from '@angular/router';
import {Mission} from '../../../model/mission';
import {AuthService} from '../../../Services/auth.service';
import {TypeMission} from '../../../model/type-mission.enum';
import {Demande} from '../../../model/demande';
import {TypeDemende} from '../../../model/type-demende.enum';
import {StateCandidature} from '../../../model/state-candidature.enum';
import {DemandeService} from '../../../Services/demande.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  loaded = false;
  mission: Mission;
  mid: bigint;
  authenticated: boolean;
  demande = new Demande();
  userId: string;
  authorized = true;

  readonly TypeMission = TypeMission;

  constructor(private msService: MissionService, private route: ActivatedRoute,
              private auth: AuthService, private dmService: DemandeService,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(value => {
      this.mid = value.id;
    });
    this.userId = this.auth.getLoggedUser()?.sub;

    this.authenticated = this.auth.getAuthentificated();
    this.loadMission();

  }

  loadMission(): void
  {
    this.msService.getMission(this.mid).subscribe(mission => {
      this.mission = mission;
      this.loaded = true;
      if (this.authenticated){
        if (this.mission.typeMission === TypeMission.FORMATION)
        {
          this.dmService.GetNbrInscription(this.mission.id).subscribe(value => {

            if ( this.mission.nbrplace > value)
            {
              this.dmService.CheckDemandeByUser(this.userId, this.mission.id).subscribe(value1 => {
                this.authorized = !value1;
              });
            }
          });
        }
        else
        {
          this.dmService.CheckDemandeByUser(this.userId, this.mission.id).subscribe(value => {
            this.authorized = !value;
          });
        }
      }
      else
      {
        this.authorized = true;
      }
    }, error => {
      this.toastr.error('Réessayer Ultérieurement', 'ERREUR');
      console.log('errreur: ', error.message);
    });

  }

   envoyer(): void {
    if (!this.authenticated) {
      this.auth.login();
      return;
    }
    this.auth.getUserProfile().then(value => {
      this.demande.userName = `${value.firstName} ${value.lastName}`;
      this.demande.userId =  this.userId;
      this.demande.mission = this.mission;
      this.demande.date = new Date().toJSON();
      switch (this.mission.typeMission) {
        case TypeMission.FORMATION: {
          console.log('im in formation');
          this.demande.typeDemende = TypeDemende.INSCRIPTION;
          this.demande.isPayed = false;
          break;
        }
        default: {
          console.log('im in other type');
          this.demande.typeDemende = TypeDemende.CANDIDATURE;
          this.demande.stateCandidature = StateCandidature.PENDING;
          break;
        }
      }
      this.loaded = false;
      this.dmService.create(this.demande).subscribe(value => {
        console.log(value);
        this.loadMission();
        const msg = this.mission.typeMission === TypeMission.FORMATION ? 'Inscription' : 'Candidature';
        this.toastr.success( `${msg} envoyée avec succès` , 'SUCCÈS' );
      }, error => {
        this.toastr.error('Réessayer Ultérieurement', 'ERREUR');
        console.log('errreur: ', error.message);
      });
    });

  }
}
