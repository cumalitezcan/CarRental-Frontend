import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDto } from 'src/app/models/carDto';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  carImages:CarImage[]=[];
  cars:CarDto;
  dataLoaded = false;
  apiUrl : string = "https://localhost:44388/";

  constructor(private carService:CarService,private carImageService:CarImageService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
   
    this.activatedRoute.params.subscribe(params => {
      if(params["carId"]){
        this.getCarDetailById(params["carId"])
        this.getCarImagesByCarId(params["carId"])
      }
    })
  }


  getCarDetailById(carId:number){
    this.carService.getCarDetailById(carId).subscribe(response => {
      this.cars=response.data[0];
      this.dataLoaded=true;

    })
  }

  getCarImagesByCarId(carId:number){
    this.carImageService.getCarImagesByCarId(carId).subscribe(response => {
      console.log(response.data);
      this.carImages=response.data;
      this.dataLoaded = true;
      
    })
  }

 
  getSliderClassName(index:number){
    if(index == 0){
     
      return "carousel-item active";
    } else {
     
      return "carousel-item";
    }
  }

}
