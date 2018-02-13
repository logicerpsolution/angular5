import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Injectable} from '@angular/core'
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
 @Injectable()
 export class  TodoService{
		
		private baseUrl:string="http://localhost/api/api.php?getrecords=all";
		private postUrl:string="http://localhost/api/add.php";
		private deleteUrl:string="http://localhost/api/delete.php";
		private getbyidUrl:string="http://localhost/api/getbyid.php";
		private updateUrl:string="http://localhost/api/update.php";
      constructor(private http:Http){


      }
	public payload;
	public headers;
	public options;
	public res;
	public Response;
	public responseData;

     GetTodoList():Observable<any>{
            return this.http.get(this.baseUrl)
            .map((res:Response) =><any[]> res.json())
            .catch((error:any)=>Observable.throw(error.json().error || 'Server error'))
	 }

			addrecord(firstname,lastname):Observable<any>{

					debugger;
					let payload={'firstname':firstname,'lastname': lastname};




					let headers=new Headers({'Content-Type': 'application/json; charset=UTF-8'});
					let options=new RequestOptions({ headers: headers });
					//var response=this.http.post(this.postUrl, payload, options);
					this.http.post(this.postUrl, payload, options).subscribe(() => console.log("request done with success"));


					// return this.http.post(this.postUrl,(params))
					// .map((res:Response) =><any[]> res.json())
					// .catch((error:any)=>Observable.throw(error.json().error || 'Server error'))
			}	
  

			updaterecord(id,firstname,lastname):Observable<any>{
				debugger;
					let payloadu={'id':id,'firstname':firstname,'lastname': lastname};




					let headers=new Headers({'Content-Type': 'application/json; charset=UTF-8'});
					let options=new RequestOptions({ headers: headers });
					//var response=this.http.post(this.postUrl, payload, options);
					this.http.post(this.updateUrl, payloadu, options).subscribe(() => console.log('Updated with success'));
			}
			
			
			
			
				 deleterecord(id):Observable<any>{
					 let pid=id;		
					   let headers=new Headers({'Content-Type': 'application/json; charset=UTF-8'});
					   let options=new RequestOptions({ headers: headers });
				//var response=this.http.post(this.postUrl, payload, options);
				   this.http.post(this.deleteUrl, pid, options).subscribe(() => console.log('deleted with success'));
				  debugger;
				}




				getById(id: string): Observable<any> {
				return this.http.get(this.getbyidUrl +'?id='+ id).map((res:Response) =><any> res.json())
            .catch((error:any)=>Observable.throw(error.json().error || 'Server error'));
				
				debugger;
				}

  }

