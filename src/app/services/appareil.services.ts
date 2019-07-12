import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppareilService{

  appareilsSubject = new Subject<any[]>();

    private appareils=[
        
      ];
      constructor(private httpClient: HttpClient){ }

      getAppareilById(id: number){
        const appareil = this.appareils.find(
          (s) => {
            return s.id === id;
          }
        );
        return appareil;

      }
    EmitAppareilSubject(){
      this.appareilsSubject.next(this.appareils.slice());
    }


    switchOnAll(){
          for(let appareil of this.appareils){
            appareil.status ='allumé';
          }
          this.EmitAppareilSubject();
      }
    switchOffAll(){
        for(let appareil of this.appareils){
            appareil.status ='éteint';
        }
        this.EmitAppareilSubject();
    }
    switchOnOne(i: number){
        this.appareils[i].status='allumé';
        this.EmitAppareilSubject();
    }

    switchOffOne(i:number){
        this.appareils[i].status='éteint';
        this.EmitAppareilSubject();
    }

//permet d'ajouter un nouvelle appareil
    addAppareil(name: string, status: string){
const appareilObject = {
  id:0,
  name: '',
  status: '',

};
appareilObject.name= name;
appareilObject.status = status;
appareilObject.id =this.appareils[(this.appareils.length -1)].id +1;
this.appareils.push(appareilObject);
this.EmitAppareilSubject();

    }
    saveAppareilsToServer(){
      this.httpClient
      .put('https://angular-25433.firebaseio.com/appareils.json', this.appareils)
      .subscribe(
        ()=>{
          console.log('enregistrement terminé !');
        },
        (error)=> {
          console.log("erreur ! :" + error);
        }
      );
    }
    getAppareilsFromServer(){
      this.httpClient
      .get<any[]>('https://angular-25433.firebaseio.com/appareils.json')
      .subscribe(
        (response) => {
          this.appareils = response;
          this.EmitAppareilSubject();
        },
        (error) => {
          console.log('erreur ! :' + error);
        }
      );
    }
    
}