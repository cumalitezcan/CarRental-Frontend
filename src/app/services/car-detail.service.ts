import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { CarDto } from '../models/carDto';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {
  apiUrl = "https://localhost:44388/api/";
  constructor(private httpClient:HttpClient) { }


  getCarExtraDetails(carId:number):Observable<ListResponseModel<CarDto>>{
    let newPath=this.apiUrl+"cars/getcardetailsbycar?carId="+carId
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }

  //getcardetailsbycar

  

}
