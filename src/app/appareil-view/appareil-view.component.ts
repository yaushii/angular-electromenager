import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.services';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  appareils:any[];

// 'private appareilService: AppareilService' permet d'integrer appareilService dans AppComponent
  constructor(private appareilService: AppareilService){
    // setTimeout(
    //   () => {
    //     this.isAuth = true;
    //   }, 4000
    // );

  }

  ngOnInit(){
    // permet de recupere la liste du tableau appareils qui se trouve dans la page services.
this.appareils = this.appareilService.appareils;
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

}
