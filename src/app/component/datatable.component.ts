import { Component, OnInit, OnDestroy } from '@angular/core'
import { Observable } from 'rxjs/Observable';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { Routes, RouterModule , Router} from '@angular/router';
import { TodoService } from '../services/todo.services'
import { NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective } from 'ng2-table/ng2-table';


@Component({
  selector: 'basic-example-data',
  styles: [],
  template: '<ng2-smart-table [settings]="settings" [source]="data" (edit)=editrecord($event) (delete)="deleterecord($event)"  (create)="createrecord($event)" (userRowSelect)="userRowSelect_Record()"></ng2-smart-table>',
  providers: [TodoService]
      
}) 



/*
@Component({

    selector: "data-table",
    templateUrl: './datatable.component.html',
    providers: [TodoService]
})
*/
export class DataTable {
 settings = {
    columns: {
		id: {
        title: 'id'
      },
      firstname: {
        title: 'Firstname'
      },
      lastname: {
        title: 'Last Name'
      }
      
    }
	
  };
  
 
    private Todo: Observable<any[]>
    public rows: Array<any> = [];
    public columns: Array<any> = [
        { title: 'firstname', name: 'firstname', filtering: { filterString: '', placeholder: 'Filter by name' } },
        {title: 'lastname',name: 'lastname',sort: false,filtering: { filterString: '', placeholder: 'Filter by position' }},
        {title: 'Register date',name: 'reg_date',sort: false,filtering: { filterString: '', placeholder: 'Filter by position' }}  
        
    ];
    public page: number = 1;
    public itemsPerPage: number = 10;
    public maxSize: number = 5;
    public numPages: number = 1;
    public length: number = 0;
    
    public config: any = {
        paging: true,
        sorting: { columns: this.columns },
        filtering: { filterString: '' },
        className: ['table-striped', 'table-bordered']
    };

    private data: Array<any> = [];

   constructor(private todoService: TodoService,private router: Router) {
  
    }


    public ngOnInit(): void {

     this.todoService.GetTodoList().subscribe((data) => {
         debugger;
            this.data=this.Todo = data.data;
           this.length = data.data.length;
             this.onChangeTable(this.config);
        })

       
    }
	
	userRowSelect_Record(data,source){
		
		debugger
	}
	
	
	createrecord(event){
		 this.router.navigate(['/add']);
		
		debugger;
	}
	
	
	deleterecord(event){
		let id=event.data.id;
		this.todoService.deleterecord(id);
		 this.router.navigate(['/#/showtable');
 
		debugger;
	}

	editrecord(event){
		  
		 this.router.navigate(['/edit',event.data.id]);
		
		debugger;

	}
	
    public changePage(page: any, data: Array<any> = this.data): Array<any> {
        let start = (page.page - 1) * page.itemsPerPage;
        let end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
        return data.slice(start, end);
    }

    public changeSort(data: any, config: any): any {
        if (!config.sorting) {
            return data;
        }

        let columns = this.config.sorting.columns || [];
        let columnName: string = void 0;
        let sort: string = void 0;

        for (let i = 0; i < columns.length; i++) {
            if (columns[i].sort !== '' && columns[i].sort !== false) {
                columnName = columns[i].name;
                sort = columns[i].sort;
            }
        }

        if (!columnName) {
            return data;
        }

        // simple sorting
        return data.sort((previous: any, current: any) => {
            if (previous[columnName] > current[columnName]) {
                return sort === 'desc' ? -1 : 1;
            } else if (previous[columnName] < current[columnName]) {
                return sort === 'asc' ? -1 : 1;
            }
            return 0;
        });
    }

    public changeFilter(data: any, config: any): any {
        let filteredData: Array<any> = data;
        this.columns.forEach((column: any) => {
            if (column.filtering) {
                filteredData = filteredData.filter((item: any) => {
                    return item[column.name].match(column.filtering.filterString);
                });
            }
        });

        if (!config.filtering) {
            return filteredData;
        }

        if (config.filtering.columnName) {
            return filteredData.filter((item: any) =>
                item[config.filtering.columnName].match(this.config.filtering.filterString));
        }

        let tempArray: Array<any> = [];
        filteredData.forEach((item: any) => {
            let flag = false;
            this.columns.forEach((column: any) => {
                if (item[column.name].toString().match(this.config.filtering.filterString)) {
                    flag = true;
                }
            });
            if (flag) {
                tempArray.push(item);
            }
        });
        filteredData = tempArray;

        return filteredData;
    }

    public onChangeTable(config: any, page: any = { page: this.page, itemsPerPage: this.itemsPerPage }): any {
        debugger;
        if (config.filtering) {
            Object.assign(this.config.filtering, config.filtering);
        }

        if (config.sorting) {
            Object.assign(this.config.sorting, config.sorting);
        }

        let filteredData = this.changeFilter(this.data, this.config);
        let sortedData = this.changeSort(filteredData, this.config);
        this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
        this.length = sortedData.length;
    }

    public onCellClick(data: any): any {
        console.log(data);
    }
}

