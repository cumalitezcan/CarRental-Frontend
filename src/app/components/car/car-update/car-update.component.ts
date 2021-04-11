import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';


@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {

  carUpdateForm:FormGroup;
  currentCar:Car;
 

  constructor(private activatedRoute:ActivatedRoute,private toastrService:ToastrService,
    private formBuilder:FormBuilder,private carService:CarService,
    private brandService:BrandService,private colorService:ColorService) { }

  ngOnInit(): void {
 
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        console.log((params["carId"]))
        this.getCarById(params["carId"])
        this.createCarUpdateForm();
      }
    })
  }

  createCarUpdateForm(){
    this.carUpdateForm = this.formBuilder.group({
      name:["",Validators.required],
      modelYear:["",Validators.required],
      dailyPrice:["",Validators.required],
      descriptions:["",Validators.required]
     
    })
  }
  
  getCarById(carId:number){
    console.log(carId)
    this.carService.getByCarId(carId).subscribe(response=>{
      console.log(response.data)
      this.currentCar = response.data
      this.carUpdateForm.setValue({
        name:this.currentCar.name,
        modelYear:this.currentCar.modelYear,
        dailyPrice:this.currentCar.dailyPrice,
        descriptions:this.currentCar.descriptions
      })
    })
  }

  updateCar(){
    console.log("updateform")
    let formModel:Car = Object.assign({},this.carUpdateForm.value)
    let newCar:Car = {id:this.currentCar.id,name:formModel.name,brandId:this.currentCar.brandId,colorId:this.currentCar.colorId,
    modelYear:formModel.modelYear,dailyPrice:formModel.dailyPrice,descriptions:formModel.descriptions,findeksScore:this.currentCar.findeksScore}
    if(this.carUpdateForm.valid){
      this.carService.updateCar(newCar).subscribe(response=>{
        this.toastrService.success(response.message,"Başarılı")
      })
    }
  }




}
