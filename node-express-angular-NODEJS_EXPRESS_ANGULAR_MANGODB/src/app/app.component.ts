import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StatusService } from './shared/status.service';
import { IProduct } from './entities/product/product.model';
import { isPromise } from '@angular/compiler/src/util';
import { Router } from '@angular/router'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'node-express-angular';
  status = 'DOWN';y
  createdProduct: IProduct = null;

  constructor(protected statusService: StatusService, private router: Router) { }

  // Get the server status when starting the view.
  ngOnInit() {
    this.statusService
      .getStatus()
      .then((result: any) => {
        this.status = result.status;
      });
  }

  // Get the new product created.
  onCreatedProduct(createdProduct: IProduct) {
    this.createdProduct = createdProduct;
  }

  navigateCart(){
    //console.log("In the Quiz")
    this.router.navigate([`cart`])
  }
  navigateAbout(){
    //console.log("In the About")
    this.router.navigate([`about`])
  }
  navigateInstructions(){
    console.log("In the Instructions")
    this.router.navigate([`Instructions`])
  }

}
