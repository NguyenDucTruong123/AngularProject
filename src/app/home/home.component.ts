import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/datas/datas';
import { User } from '../common/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: any[] | undefined;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  user: User = {
    name: 'Hoang Teo',
    age: 33,
    address: 'Vietnam',
  };
  
  //  selectedProduct?: Product;
   onSelection(product:any){
    console.log(product.id);
    product.isDescriptionVisible = !product.isDescriptionVisible;
     
   }
}
