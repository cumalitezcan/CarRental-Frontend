import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Color } from '../models/color';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl = "https://localhost:44388/api/";

  constructor(private httpClient:HttpClient) { }

  getColors():Observable<ListResponseModel<Color>>{
    let newPath = this.apiUrl+`colors/getall`
      return this.httpClient.get<ListResponseModel<Color>>(newPath);
  }

  add(color:Color):Observable<ResponseModel>{
    let newPath = this.apiUrl+`colors/add`
     return this.httpClient.post<ResponseModel>(newPath,color)
   }

   getByColorId(colorId:number):Observable<SingleResponseModel<Color>>{
     let newPath = this.apiUrl+`colors/getbyid?id=${colorId}`
     return this.httpClient.get<SingleResponseModel<Color>>(newPath)
   }

   updateColor(newColor:Color):Observable<ResponseModel>{
    let newPath = this.apiUrl+`colors/update`
    return this.httpClient.post<ResponseModel>(newPath,newColor);
   }
  

}
