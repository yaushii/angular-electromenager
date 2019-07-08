import { Subject } from 'rxjs/Subject';

export class AppareilService{

  appareilsSubject = new Subject<any[]>();

    private appareils=[
        {
          id: 1,
          name:'Machine à laver',
          status:'éteint',
        },
        {
          id: 2,
         name:'ordinateur',
         status:'allumé',
        },
        {
          id: 3,
         name: 'frigo',
         status: 'éteint',
        },
      ];

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
    
}