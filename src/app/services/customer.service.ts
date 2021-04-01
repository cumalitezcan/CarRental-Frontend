import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { CustomerDto } from '../models/customerDto';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl = "https://localhost:44388/api/";

  constructor(private httpClient:HttpClient) { }

  getCustomers():Observable<ListResponseModel<CustomerDto>>{
    return this.httpClient.get<ListResponseModel<CustomerDto>>(this.apiUrl+'customers/getcustomerdetails');
  }

  getCustomerById(customerId: number): Observable<ListResponseModel<CustomerDto>> {
    let newPath = this.apiUrl + 'customers/getcustomerdetailbycustomerid?customerId=' + customerId;
    return this.httpClient.get<ListResponseModel<CustomerDto>>(newPath);
  }

}
