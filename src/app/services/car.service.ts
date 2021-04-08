import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { CarDto } from '../models/carDto';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44388/api/";

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<CarDto>>{
  let newPath = this.apiUrl+"cars/getcardetails";
   return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<CarDto>>{
    let newPath = this.apiUrl+`cars/getcarsdetailsbybrand?brandid=${brandId}`
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
    }

    getCarsByColor(colorId:number):Observable<ListResponseModel<CarDto>>{
      let newPath = this.apiUrl+`cars/getcarsdetailsbycolor?colorid=${colorId}`
      return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
      }

      getCarsByBrandAndColor(brandId:Number,colorId:Number):Observable<ListResponseModel<CarDto>>{
        let newPath = this.apiUrl +`cars/getbybrandandcolor?brandId=${brandId}&colorid=${colorId}`
        return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
      }

      getCarDetailById(carId:number): Observable<ListResponseModel<CarDto>> {
        let newPath = this.apiUrl+`cars/getcardetailsbycar?carId=${carId}`
        return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
      }

      getCarDetailById2(carId:number): Observable<SingleResponseModel<CarDto>> {
        let newPath = this.apiUrl+`cars/getcardetailsbycar?carId=${carId}`
        return this.httpClient.get<SingleResponseModel<CarDto>>(newPath);
      }  


      add(car:CarDto):Observable<ResponseModel>{
        let newPath = this.apiUrl+`cars/add`
         return this.httpClient.post<ResponseModel>(newPath,car)
       }

       getByCarId(carId:number):Observable<SingleResponseModel<Car>>{
        let newPath = this.apiUrl+`cars/getbyid?id=${carId}`
        return this.httpClient.get<SingleResponseModel<Car>>(newPath)
      }
    
      updateCar(newCar:Car):Observable<ResponseModel>{
        let newPath = this.apiUrl+`cars/update`
        return this.httpClient.post<ResponseModel>(newPath,newCar);
       }
      
}
