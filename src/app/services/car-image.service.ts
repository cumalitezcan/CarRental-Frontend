import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { CarImage } from '../models/carImage';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {


  apiUrl:string ="https://localhost:44388/api/";

  constructor(private httpClient:HttpClient) { }

  getCarImagesByCarId(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPath = this.apiUrl + `carimages/getimagesbycarid?carid=${carId}`;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }

  getCarImages():Observable<ListResponseModel<CarImage>>{
    let newPath = this.apiUrl + `carimages/getall`;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }

}


