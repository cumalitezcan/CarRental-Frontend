import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';


@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css']
})
export class BrandUpdateComponent implements OnInit {

  brandUpdateForm:FormGroup;
  currentBrand:Brand;
  

  constructor(private activatedRoute:ActivatedRoute,private toastrService:ToastrService,
    private formBuilder:FormBuilder,private brandService:BrandService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getBrandById(params["brandId"])
        this.createBrandUpdateForm();
      }
    })
  }

  createBrandUpdateForm(){
    console.log("createBrandform")
    this.brandUpdateForm = this.formBuilder.group({
      brandName:["",Validators.required]
    })
  }

  getBrandById(brandId:number){
    this.brandService.getByBrandId(brandId).subscribe(response=>{
      console.log(response.data)
      this.currentBrand = response.data
      this.brandUpdateForm.setValue({
        brandName:this.currentBrand.brandName
      })
    })
  }

  updateBrand(){
    
    let formModel = Object.assign({},this.brandUpdateForm.value)
    let newBrand:Brand = {brandId:this.currentBrand.brandId,brandName:formModel.brandName}
    if(this.brandUpdateForm.valid){
      this.brandService.updateBrand(newBrand).subscribe(response=>{
        this.toastrService.success(response.message,"Başarılı")
      })
    }
  }
}
