import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators ,FormArray} from '@angular/forms';
import { BookdetailsService } from '../bookdetails.service';

@Component({
  selector: 'app-shipping-address',
  templateUrl: './shipping-address.component.html',
  styleUrls: ['./shipping-address.component.scss']
})

export class ShippingAddressComponent implements OnInit {

  namealert :string= "Name is required" ;
  addressalert:string="Address is required";
  statealert:string="State is required";
   shippingaddress!: FormGroup;
  // test:boolean=false;
  //details gor order summary
  dataSource :any;
  total:any = 0; 
  
  constructor(private formbuilder : FormBuilder,private bookdetails:BookdetailsService) { }
  
  ngOnInit() {
   /* this.shippingaddress=new FormGroup({
       'myname': new FormControl('',[Validators.required]), */
       this.shippingaddress=this.formbuilder.group({
        name : ['', Validators.required],
        addresslinea : ['', Validators.required],
        addresslineb : ['', Validators.required],
        pincode : ['', [Validators.required,Validators.pattern('^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$')]],
        state : ['', Validators.required],


       });     //code as in order summary (only to get value )
        this.bookdetails.inorderSummery().subscribe(data=> {
        console.log(data);
        this.dataSource=data;
        let sum: number = 0;
        this.dataSource.forEach((a: { quantity: number; book: { price: number; }; }) => sum += a.quantity * a.book.price);
        this.total = sum;
      }); 
     }
orderData:any;
displayedColumns: string[] = ['title', 'qty', 'mrp', 'total'];


onSubmit() {
  const details={
    orderDetails:this.dataSource,
    cartTotal:this.total,
  }  
  if(this.shippingaddress.status==="VALID")
  this.bookdetails.checkoutdetails(details).subscribe(data=>{
console.log(data);
  })
}


}
