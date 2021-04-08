import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Brand } from '../models/brand';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl = "https://localhost:44388/api/";

  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<ListResponseModel<Brand>>{
      let newPath = this.apiUrl+`brands/getall`
      return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }

  add(brand:Brand):Observable<ResponseModel>{
    let newPath = this.apiUrl+`brands/add`
    return this.httpClient.post<ResponseModel>(newPath,brand);
  }
  
  getByBrandId(brandId:number):Observable<SingleResponseModel<Brand>>{
    let newPath = this.apiUrl+`brands/getbyid?id=${brandId}`
    return this.httpClient.get<SingleResponseModel<Brand>>(newPath)
  }


  updateBrand(newBrand:Brand):Observable<ResponseModel>{
    let newPath = this.apiUrl+`brands/update`
    return this.httpClient.post<ResponseModel>(newPath,newBrand);
   }

   delete(brand:Brand):Observable<ResponseModel>{
    let newPath = this.apiUrl+`brands/delete`
    return this.httpClient.post<ResponseModel>(newPath,brand);
  }
}
