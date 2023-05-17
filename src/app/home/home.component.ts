import { Component } from '@angular/core';
import { Product } from '../common/product';
import products from '../datas/products';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
 
  products = products
   
    // selectedProduct?: Product;
    onSelection(product:any){
      // this.selectedProduct = product
      // console.log("Hệ thống phanh ABS 2 kênh, chuẩn chống nước IP67");
      product.isDescriptionVisible = !product.isDescriptionVisible;
 
    }
}
