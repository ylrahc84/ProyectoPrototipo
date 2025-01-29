import { Component, OnDestroy } from '@angular/core';
import { Observable, retry, interval, take, map, filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: ``
})
export class RxjsComponent implements OnDestroy {
 
 // public intervaloSubs:Subscription;

  constructor() {
    
    /*
      this.retornaObservable()
      .pipe(
        retry()
      )
      .subscribe( 
        valor=> console.log('Sub', valor),
        error => console.log('Sucedio un error', error),
        ()=> console.log('Se completo conteo')
      );
   

      this.intervaloSubs = this.retornaIntervalo()
      .subscribe(
        valor=>console.log(valor)
      );
    */
  }

  ngOnDestroy(): void {
   // this.intervaloSubs.unsubscribe();
  }

  retornaIntervalo():Observable<number>{

    const interval$ = interval(500)
    .pipe(
      map( valor =>{
        return valor + 1;
      } ),
      filter(valor => (valor % 2 === 0)?true: false),
      //take(10),
    );

    return interval$;
  }

  retornaObservable():Observable<number>{
    let i = -1;

    const obs$ = new Observable<number>( observer =>{

      setInterval( ()=>{

        //console.log('tick');
        i++;

        observer.next(i);

        if(i === 4){

          observer.complete();
        }

        if(i === 2){

          observer.error();
        }

      },1000 )

    } );

    return obs$;
  }

}
