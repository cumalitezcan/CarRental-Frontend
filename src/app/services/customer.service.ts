import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerResponseModel } from '../models/customerResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl = "https://localhost:44388/api/Customers/getall";

  constructor(private HttpClient:HttpClient) { }

  getCustomers():Observable<CustomerResponseModel>{
    return this.HttpClient.get<CustomerResponseModel>(this.apiUrl);
  }

}
