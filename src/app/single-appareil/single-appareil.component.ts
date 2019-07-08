import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.services';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {

  name: string = 'appareil';
  status:string = 'status';

  constructor(private appareilServiceComponent: AppareilService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
   this.name = this.appareilServiceComponent.getAppareilById(+id).name;
   this.status = this.appareilServiceComponent.getAppareilById(+id).status;
  }

}
