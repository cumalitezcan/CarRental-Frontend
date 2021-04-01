import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { RentalDto } from '../models/rentalDto';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = "https://localhost:44388/api/";

  constructor(private httpClient:HttpClient) { }


  getRentals():Observable<ListResponseModel<RentalDto>>{
   return this.httpClient.get<ListResponseModel<RentalDto>>(this.apiUrl+"rentals/getrentaldetails");
  }

  addRental(rental:RentalDto){
    let newPath = this.apiUrl + "rentals/add"
    this.httpClient.post(newPath,rental).subscribe()
  }


  getRentalByCarId(carId: number): Observable<ListResponseModel<RentalDto>> {
    let newPath = this.apiUrl + 'rentals/getrentaldetailbycarid?carId=' + carId;
    return this.httpClient.get<ListResponseModel<RentalDto>>(newPath);
  }

  payRental(rental: RentalDto, amount: number) {
    let newPath = this.apiUrl + 'rentals/add';
    console.log({payment:{amount,rental}})
    return this.httpClient.post<ResponseModel>(newPath,{payment:{amount:amount},rental:{rental}});
  }


}
