import { Component, OnDestroy, OnInit} from '@angular/core';
import { AppareilService } from '../services/appareil.services';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit, OnDestroy {

  appareils:any[];
  appareilSubscription: Subscription;

// 'private appareilService: AppareilService' permet d'integrer appareilService dans AppComponent
  constructor(private appareilService: AppareilService){  }

  ngOnInit(){
    // permet de recupere la liste du tableau appareils qui se trouve dans la page services.
this.appareilSubscription = this.appareilService.appareilsSubject.subscribe(
  (appareils:any[]) => {
    this.appareils = appareils;
  }
);
this.appareilService.EmitAppareilSubject();
  }

  onAllumer(){
    // affiche 'on allumer tout!' lorsque l'on clique sur le bouton allumer
    this.appareilService.switchOnAll();
    console.log('On allume tout !');

  }
  onEteindre(){
    if(confirm('Étes vous sur de vouloir tout éteindre ?')){
      this.appareilService.switchOffAll();
      console.log('on éteint tout !');
    }else{ return null;
    }
    
    
  }
  
  onSave() {
    this.appareilService.saveAppareilsToServer();
}

onFetch() {
  this.appareilService.getAppareilsFromServer();
}


  ngOnDestroy() {
    this.appareilSubscription.unsubscribe();
  }

}
