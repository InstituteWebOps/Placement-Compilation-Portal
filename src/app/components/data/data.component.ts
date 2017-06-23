import { Component, Input } from '@angular/core';
import { IndexComponent } from '../index/index.component'

@Component({
  moduleId: module.id,
  selector: 'data',
  templateUrl: 'data.component.html',
})
export class DataComponent {
  @Input()
  company: Data;
  @Input()
  n: number;

  modalv: modalv;
  name = 'Angular'

  constructor() {
    console.log(this.company);
    this.modalv = {
      header: "",
      list: [],
      parentCol: "",
      points: "",
      curr: {
        box: 0,
        col: 0
      }
    }
  }

  newItem(col_i: number, newItemH: string) {
    var item: Item =
      {
        Header: newItemH,
        List: []
      }
    console.log("col_i:" + col_i);
    if (/\S/.test(newItemH))
      this.company.Cols[col_i].Items.push(item);
  }

  delItem(col_i: number, list_k: number) {
    if (confirm("Are you sure you want to delete the List: " + this.company.Cols[col_i].Items[list_k].Header))
      this.company.Cols[col_i].Items.splice(list_k, 1);
  }

  newPoint(col_i: number, list_k: number, newPointH: string) {
    console.log("col_i:" + col_i);
    console.log("list_k:" + list_k);
    if (/\S/.test(newPointH))
      this.company.Cols[col_i].Items[list_k].List.push(newPointH);
  }

  delPoint(col_i: number, list_k: number, point_p: number) {
    if (confirm("Are you sure you want to delete the point: " + this.company.Cols[col_i].Items[list_k].List[point_p]))
      this.company.Cols[col_i].Items[list_k].List.splice(point_p, 1);
  }

  editName() {
    var newName: string = prompt("Change name from " + this.company.Col0.Name + " to:", this.company.Col0.Name);
    if (/\S/.test(newName))
      this.company.Col0.Name = (newName ? newName : this.company.Col0.Name);
  }

  editHeader(i: number) {
    console.log(i);
    var newHeader: string = prompt("Change heading from " + this.company.Cols[i].ColHeader + " to:", this.company.Cols[i].ColHeader);
    if (/\S/.test(newHeader))
      this.company.Cols[i].ColHeader = (newHeader ? newHeader : this.company.Cols[i].ColHeader);
  }

  editBox(col_i: number, item_k: number) {
    this.modalv = {
      curr: {
        col: col_i,
        box: item_k
      },
      header: this.company.Cols[col_i].Items[item_k].Header,
      list: this.company.Cols[col_i].Items[item_k].List,
      parentCol: this.company.Cols[col_i].ColHeader,
      points: this.company.Cols[col_i].Items[item_k].List.toString().replace(/,/g, "\n")//.trim()
    }
    console.log(this.modalv.points);
  }

  acceptChanges(headerV: string, pointsV: string) {
    this.company.Cols[this.modalv.curr.col].Items[this.modalv.curr.box].Header = headerV;
    this.company.Cols[this.modalv.curr.col].Items[this.modalv.curr.box].List = pointsV.split("\n");
  }

  delCompany(n: number) {
    // delete this.company;
    
  }
}

interface modalv {
  header: string;
  list: string[];
  parentCol: string;
  points: string;
  curr:
  {
    col: number;
    box: number
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
