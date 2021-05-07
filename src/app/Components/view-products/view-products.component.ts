import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Services/common.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.scss']
})
export class ViewProductsComponent implements OnInit {
  products: any;
  displayMode: any;

  constructor(private service: CommonService, private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.service.getProducts().subscribe((resp) => {
      // console.log(resp)
      this.products = resp;
      this.products = this.products.sort((low, high) => low.price - high.price);
    }, error => {
      console.log(error)
    })
    
    this.ref.detectChanges();
  }

  updateDisplay(mode) {
    this.displayMode = mode;

    let container = document.getElementById("btnContainer");
    let btns = container.getElementsByClassName("btn");

    if (mode == 1) {
      btns[0].className += ' active';
      btns[1].className = btns[1].className.replace(' active', '');
    }
    else {
      btns[1].className += ' active';
      btns[0].className = btns[0].className.replace(' active', '');
    }
  }

  customSort(event: any) {
    switch (event.target.value) {
      case "Low":
        {
          this.products = this.products.sort((low, high) => low.price - high.price);
          break;
        }

      case "High":
        {
          this.products = this.products.sort((low, high) => high.price - low.price);
          break;
        }

      default: {
        this.products = this.products.sort((low, high) => low.price - high.price);
        break;
      }
    }

    return this.products;

  }

}
