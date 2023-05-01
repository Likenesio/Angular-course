import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { __values } from 'tslib';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstComponent } from './my-first/my-first.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

constructor(){

this.getRest(1,2,3, "hola")

const person= {
  nombre: "Nicolas",
  edad:17,
  country: {
     idCountry: 1,
     cod: "LP"
  }
}
const {country} = person;
console.log("country:", country)

const animals = {
  0:{
    nombre: "perro",
    edad: 23
  },
  1 :{
    nombre: "gato",
    edad: 17
  }
}
const result = Object.values(animals).reduce((prev, value)=> prev + value.edad, 0)
console.log("Resultado:", result);

const tarea = Object.values(animals).filter(a => a.edad>20).map(i => i.edad)
console.log("Result:", tarea);

    
}

getRest(...params: any[]) {
  console.log('REST:', params);
}

 }
