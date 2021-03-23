import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44388/api/";

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
  let newPath = this.apiUrl+"cars/getcardetails";
   return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
    console.log(brandId);
    let newPath = this.apiUrl+`cars/getcarsdetailsbybrand?brandid=${brandId}`
    
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
    }

    getCarsByColor(colorId:number):Observable<ListResponseModel<Car>>{
      
      let newPath = this.apiUrl+`cars/getcarsdetailsbycolor?colorid=${colorId}`
     
      return this.httpClient.get<ListResponseModel<Car>>(newPath);
      }

      getCarsByBrandAndColor(brandId:Number,colorId:Number):Observable<ListResponseModel<Car>>{
        let newPath = this.apiUrl +`cars/getbybrandandcolor?brandId=${brandId}&colorid=${colorId}`
        return this.httpClient.get<ListResponseModel<Car>>(newPath);
      }

      getCarDetailById(carId:number): Observable<ListResponseModel<Car>> {
        let newPath = this.apiUrl+`cars/getcardetailsbycar?carId=${carId}`
        return this.httpClient.get<ListResponseModel<Car>>(newPath);
      }

      
}
