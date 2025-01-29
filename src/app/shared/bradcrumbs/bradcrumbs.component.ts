import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router, Event } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-bradcrumbs',
  templateUrl: './bradcrumbs.component.html',
  styles: ``
})
export class BradcrumbsComponent implements OnDestroy {
 
  public titulo:string | undefined;
  public tituloSubs$: Subscription;

  constructor( private router:Router ) {

     this.tituloSubs$ = this.getArgumentoRuta()    
                        .subscribe( ({titulo})=>{
                          this.titulo = titulo;
                          document.title = `AdminPro-${titulo}`;
                        } );

  }

  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }

  getArgumentoRuta(){
    return this.router.events
    .pipe(
      filter( (event:Event):event is ActivationEnd => event instanceof ActivationEnd ),
      filter( (event:ActivationEnd) => event.snapshot.firstChild === null ),
      map( (event:ActivationEnd) => event.snapshot.data ),
    )


  }

}
