import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.services';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() index: number;
  @Input() id: number;

  constructor(private appareilService: AppareilService) {
    
  }

  ngOnInit() {
  }

getStatus() {
  return this.appareilStatus;
}
//permet de modifier la couleur des appreil en fonction de leur status(rouge eteind)(vert allumé)
getColor(){
  if(this.appareilStatus==="allumé"){
    return 'green';
  }else if(this.appareilStatus ==="éteint"){
    return 'red';
  }
}

//permet de modifier le boutton en fonction de son status
onSwitch(){
  if(this.appareilStatus ==='allumé'){
    this.appareilService.switchOffOne(this.index);
  }else if(this.appareilStatus === 'éteint'){
    this.appareilService.switchOnOne(this.index);
  }
}
}
