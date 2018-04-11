import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { User } from '../model/user';

@Component({
  selector: 'ana-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  
  displayedColumns = ['avatar', 'firstName', 'lastName', 'position', 'email', 'control'];
  dataSource;
  @Input() data;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<User>(this.data);
  }
}

