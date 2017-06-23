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
    })
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
    }
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
