import { Component, OnInit } from '@angular/core';
import { ListDataService } from 'src/app/services/list-data.service';
import { ItemInterface } from 'src/model/item.interface';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  list: ItemInterface[] = [];

  constructor(private readonly listDataService: ListDataService) { }

  ngOnInit() {
    this.list = this.listDataService.getListData();
  }

}
