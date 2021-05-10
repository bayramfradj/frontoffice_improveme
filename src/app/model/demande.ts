import {TypeDemende} from './type-demende.enum';
import {StateCandidature} from './state-candidature.enum';
import {Mission} from './mission';

export class Demande {
  id: bigint;
  userId: string | undefined;
  date: string;
  typeDemende: TypeDemende;
  stateCandidature: StateCandidature;
  isPayed: boolean;
  mission: Mission;
}
