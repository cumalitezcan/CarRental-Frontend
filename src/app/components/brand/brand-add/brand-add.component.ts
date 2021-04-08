import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BrandService } from 'src/app/services/brand.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css']
})
export class BrandAddComponent implements OnInit {

 brandAddForm:FormGroup;


  constructor(private formBuilder:FormBuilder,private toastrService:ToastrService,private brandService:BrandService ) { }

  ngOnInit(): void {
    this.createBrandAddForm();
  }


  createBrandAddForm() {
    this.brandAddForm = this.formBuilder.group({
      brandName:["",Validators.required],
    })
  }


  add(){
    if(this.brandAddForm.valid){
      
      let brandModel = Object.assign({},this.brandAddForm.value)
    this.brandService.add(brandModel).subscribe(response=>{
      this.toastrService.success(response.message,"Başarılı")
    },responseError=>{
      if(responseError.error.Errors.length>0){
        for (let i = 0; i < responseError.error.Errors.length; i++) {
          this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Doğrulama hatası")
        }
      }
    })
  }else {
    console.log("başarısız")
    this.toastrService.error("Formunuz eksik","Dikkat")
  }
  }
}
