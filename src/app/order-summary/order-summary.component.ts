import { Component, Input,  OnChanges,  OnInit, SimpleChanges } from '@angular/core';
import { BookdetailsService } from '../bookdetails.service';
import { CommonModule } from '@angular/common';

/* export interface book {
  bookId: Number;
  title: string;
  author: string;
  category: string;
  price:Number;
  coverFileName : string;
}

export interface bookList {
  book : book;
  quantity : Number;
}
 */
// "book":{"bookId":2,"title":"HP2","author":"JKR","category":"Mystery",
// "price":234.00,"coverFileName":"9d8f4978-0ef8-42d0-873a-4eb583439237HP2.jpg"},"quantity":1
  /* {title: 'bookname', qty: 'Hydrogen', mrp: 'test', total: 'H'}, */

@Component({
  selector: 'app-order-summary',
   templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit,OnChanges {
@Input() 
orderdata:any;
@Input() 
ordertotal:number | undefined;

 //  ELEMENT_DATA: Array<structure> = new Array<structure>();
   orderData:any;
   displayedColumns: string[] = ['title', 'qty', 'mrp', 'total',];
   
   dataSource :any;
   totally:any = 0;
constructor(private bookdetails:BookdetailsService ) {  this.dataSource=this.orderdata;this.totally=this.ordertotal; console.log("entering constructor")   }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("entering onchanges")
    console.log(changes)
    this.dataSource=this.orderdata;
    this.totally=this.ordertotal;

    throw new Error('Method not implemented.');
  }
  /* ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  } */

  ngOnInit(): void {                                            //copid to shipping address
      /*  this.bookdetails.inorderSummery().subscribe(data=> {
      console.log(data);
      this.dataSource=data;
      let sum: number = 0;
      this.dataSource.forEach(a => sum += a.quantity * a.book.price);
      this.totally = sum;
    });    */
 
  
  }

   /* ngonChanges(data:any)  : void{
    console.log("entering onchanges")
    console.log(data)
    this.dataSource=this.orderdata;
    this.totally=this.ordertotal;
  }  */

  

  
}
