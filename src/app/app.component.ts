import { Component } from '@angular/core';
import {SelectItem} from 'primeng/api';
import { AppService } from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cities1: SelectItem[];
  alldetails: any
  sortOptions: SelectItem[];

  sortKey: string;

  sortField: string;

  sortOrder: number;
  constructor(private carService: AppService) {
    //SelectItem API with label-value pairs
    this.cities1 = [
        {label:'Select City', value:null},
        {label:'New York', value:{id:1, name: 'New York', code: 'NY'}},
        {label:'Rome', value:{id:2, name: 'Rome', code: 'RM'}},
        {label:'London', value:{id:3, name: 'London', code: 'LDN'}},
        {label:'Istanbul', value:{id:4, name: 'Istanbul', code: 'IST'}},
        {label:'Paris', value:{id:5, name: 'Paris', code: 'PRS'}}
    ];
  }
  

 

  ngOnInit() {
    // this.carService.getDetails()
    this.getDetails()
    this.sortOptions = [
      {label: 'Newest First', value: '!id'},
      {label: 'Oldest First', value: 'id'},
      {label: 'Email', value: 'email'}
  ];
  }
  getDetails() {

    this.carService._getDetails().subscribe(res => {

      this.alldetails = res["data"];
      console.log("alldetails",this.alldetails);
      
    })


  }
  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    }
    else {
        this.sortOrder = 1;
        this.sortField = value;
    }
}
}


