import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDto } from 'src/app/models/carDto';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:CarDto[]=[];
  carImages:CarImage;
  dataLoaded=false;
  apiUrl = "https://localhost:44388/";
  carImageDefault="https://localhost:44388/uploads/defaultLogo.png"
  currentCarImage:CarImage;



  constructor(private carService:CarService,private carImageService:CarImageService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params["colorId"] && params["brandId"]){
        this.getCarsByFilter(params["brandId"],params["colorId"]);
      }
      else if(params["brandId"]){
        this.getCarsByBrand(params["brandId"]);
      }
      else if(params["colorId"]){
        this.getCarsByColor(params["colorId"]);
      }
      else {
        this.getCars();
      }
    });
  }

  getCarsByFilter(brandId:Number, colorId: Number) {
    this.carService.getCarsByBrandAndColor(brandId,colorId).subscribe(response => {
      this.cars = response.data,
      this.dataLoaded = true
      // if(this.cars.length == 0){
      //   this.toastr.info('Arama sonuçunuza ait bir araç bulunmamaktadır.', 'Arama Sonucu');
      // }
    })
    
  }

  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.cars = response.data;
      this.dataLoaded=true;
    })
  }

  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(response=>{
      this.cars = response.data;
      this.dataLoaded=true;
    })
  }

  getCarsByColor(colorId:number){
    this.carService.getCarsByColor(colorId).subscribe(response=>{
      this.cars = response.data;
      this.dataLoaded=true;
      
    })
  }

  
  getCarsImages(){
    this.carImageService.getCarImages()
   }

}
