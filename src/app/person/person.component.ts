import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPerson, Person } from './person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input() name: string= '';
  @Input() lastName: string='';
  @Input() age: number= Number("0");

  @Output() print= new EventEmitter<Person>();
  
  constructor() { }

  ngOnInit() {
  }
 
  public onPrint(event: any){
    this.print.emit({
      name: this.name,
      lastName: this.lastName,
      age: this.age
    })
  }
}