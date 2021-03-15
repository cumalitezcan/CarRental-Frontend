import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BrandResponseModel } from '../models/brandResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl = "https://localhost:44388/api/brands/getall";

  constructor(private HttpClient:HttpClient) { }

  getBrands():Observable<BrandResponseModel>{
    
      return this.HttpClient.get<BrandResponseModel>(this.apiUrl);
  }

}
