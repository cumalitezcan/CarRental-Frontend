import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {
  apiUrl = "https://localhost:44388/api/";
  constructor(private httpClient:HttpClient) { }


  getCarExtraDetails(carId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getcardetailsbycar?carId="+carId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

}
