import { Component, OnInit, OnDestroy } from '@angular/core'
import { Observable } from 'rxjs/Observable';
import { Routes, RouterModule } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { TodoService } from '../services/todo.services'


@Component({

    selector: "add-record",
    templateUrl: './addrecord.component.html',
    providers: [TodoService]
})

export class AddRecord implements OnInit {
	public firstname;
	public lastname;
   constructor(private todoService: TodoService) {
  
    }
	  public ngOnInit(): void {
 
	
	  }	
	  
	 onSubmit() {
		 
		//loginForm=new FormGroup();
		  let firstname = this.firstname;
		  let lastname = this.lastname;
		 //return JSON.stringify(this.model)
		
  this.todoService.addrecord(firstname,lastname);
  // this.router.navigate(['showtable']);
   document.location.href='/#/showtable';
  // debugger;
  }
	
}