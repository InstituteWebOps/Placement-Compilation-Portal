import { Component, Input, EventEmitter } from '@angular/core';
import { DataComponent } from '../data/data.component';
import { DataService } from '../../services/data.service';
// import { Interface } from '../interface';

@Component({
  moduleId: module.id,
  selector: 'index',
  // directives: [DataComponent],
  templateUrl: 'index.component.html',
  providers: [DataService]
})
export class IndexComponent {

  data: Data[];
  tips: string[];
  names: list[] = [];
  company: string;



  constructor(private dataService: DataService) {
    this.tips = [
      "Double Click on a company name to edit.",
      "Click x to delete any item.",
      "Type an item in an empty text box and either press enter, or click the (+) button",
      "You cannot add an empty string, or one made only of blank spaces."
    ]
    this.dataService.getData().subscribe(data => {
      console.log(data);
      this.data = data;
      for(var i=0;i<data.length;i++){
        this.names.push({name: data[i].Col0.Name, show: false});
      }
    })

  }

  search(data: any) {
    if(this.company === '')
    {
      for(var i=0;i<this.names.length;i++){
          this.names[i].show = false;
      }
    }
    for (var i = 0; i < this.names.length; i++) {
      for(var j=0; j<this.company.length; j++)
      {
        if(this.company[j].toUpperCase() === this.names[i].name[j].toUpperCase()){
          this.names[i].show = false;
        }
        else{
          this.names[i].show = true;
          break;
      }
      }
    }
  }

  addCompany(companyName: string) {
    if ((/\S/.test(companyName))) {
      var newCompany: Data =
        {
          Col0: {
            Name: companyName,
            Tags: ""
          },
          Cols: [
            {
              ColHeader: this.data[0].Cols[0].ColHeader,
              Items: []
            },
            {
              ColHeader: this.data[0].Cols[1].ColHeader,
              Items: []
            },
            {
              ColHeader: this.data[0].Cols[2].ColHeader,
              Items: []
            },
            {
              ColHeader: this.data[0].Cols[3].ColHeader,
              Items: []
            }
          ]
        }
      this.data.push(newCompany);
      this.names.push({name: companyName, show: false});
    }
  }
}
class list {
  name: string;
  show: boolean;

   constructor(){
     this.name = '';
     this.show = false;
   }
}
interface Data {
  Col0: Col0,
  Cols: Col[]
}
interface Col0 {
  Name: string,
  Tags: string
}
interface Col {
  ColHeader: string,
  Items: Item[],
}
interface Item {
  Header: string,
  List: string[]
}
