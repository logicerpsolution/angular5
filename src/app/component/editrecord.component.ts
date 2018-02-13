import { Component, OnInit, OnDestroy } from '@angular/core'
import { Observable } from 'rxjs/Observable';
import { Routes, RouterModule ,ActivatedRoute ,Params , Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { TodoService } from '../services/todo.services'


@Component({

    selector: "add-record",
    templateUrl: './editrecord.component.html',
    providers: [TodoService]
})

export class EditRecord implements OnInit {
	public firstname;
	public lastname;
	public id;
   constructor(private todoService: TodoService, private route: ActivatedRoute,
                private router: Router) {
  
    }
	   

 
    ngOnInit(): void {
        this.route.params
            .subscribe((params: Params) => 
                   this.todoService.getById(params['id']).subscribe((contact :any) => {
					   this.contact = contact.data[0];
					   this.id=this.contact.id;
					    this.firstname=this.contact.firstname;
						 this.lastname=this.contact.lastname;
					    console.log(this.contact.firstname);
				   });
				  
			debugger;
    }
     

       
   
	  
	 onSubmit() {
		 this.updaterecord(this.card);
	 }
		//loginForm=new FormGroup();
		updaterecord(){
			let firstname = this.firstname;
		  let lastname = this.lastname;
		   let id = this.id;
		 //return JSON.stringify(this.model)
debugger;
	 this.todoService.updaterecord(id,firstname,lastname)
            
  }
	
}