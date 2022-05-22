import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookdetailsService {
baseurl="https://bookcart.azurewebsites.net/api/shoppingcart/692"; 
carturl="https://bookcart.azurewebsites.net/api/CheckOut/692";
  constructor(private http: HttpClient) { }

inorderSummery(){
  return this.http.get(this.baseurl);
}

 checkoutdetails(details: any){
  return this.http.post(this.carturl,details);
} 
}

