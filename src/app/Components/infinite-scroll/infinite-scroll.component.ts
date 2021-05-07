import { Component, OnInit } from '@angular/core';
const nisPackage = require("../../../../../case-study/package.json");

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.scss']
})
export class InfiniteScrollComponent implements OnInit {
  array = [];
  totalElements = 40;
  throttle = 10;
  scrollDistance = 1;
  scrollUpDistance = 2;
  direction = "";
  // modalOpen = false;

  nisVersion = nisPackage.dependencies["ngx-infinite-scroll"];

  constructor() {
    this.appendItems(0, this.totalElements);
  }

  ngOnInit(): void {
  }

  addItems(startIndex, endIndex, _method) {
    for (let i = 0; i < this.totalElements; ++i) {
      this.array[_method]([i]);
    }
  }

  appendItems(startIndex, endIndex) {
    this.addItems(startIndex, endIndex, "push");
  }

  onButtonClick(i) {
    alert(`Button in ${i}th div clicked`);
  }

  // prependItems(startIndex, endIndex) {
  //   this.addItems(startIndex, endIndex, "unshift");
  // }

  onScrollDown(ev) {
    console.log("scrolled down!!", ev);

    // add another 20 items
    const start = this.totalElements;
    this.totalElements += 5;
    this.appendItems(start, this.totalElements);

    this.direction = "down";
  }

}
