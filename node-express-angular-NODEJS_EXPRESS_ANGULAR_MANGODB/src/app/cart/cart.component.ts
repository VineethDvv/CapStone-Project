import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StatusService } from '../shared/status.service';
import { IProduct } from '../entities/product/product.model';
import { isPromise } from '@angular/compiler/src/util';

@Component({
  selector: 'app-root',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  title = 'node-express-angular';
  status = 'DOWN';y
  createdProduct: IProduct = null;

  constructor(protected statusService: StatusService) { }

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

}
