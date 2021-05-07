import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  marksData: any;
  columns: string[];
  dataSource;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpClient, private cdref: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getMarksData();
  }

  getMarksData() {
    this.http.get('assets/marks.json').subscribe((resp: any) => {
      console.log(resp);
      if (resp.length > 0) {
        this.marksData = resp;
        this.columns = Object.keys(this.marksData[0]);
        console.log(this.columns)
        this.dataSource = new MatTableDataSource(this.marksData);

        this.dataSource.sort = this.sort;
      }
    });


    this.cdref.detectChanges();
  }

}
