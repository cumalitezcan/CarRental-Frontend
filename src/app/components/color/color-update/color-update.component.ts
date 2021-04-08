


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';


@Component({
  selector: 'app-color-update',
  templateUrl: './color-update.component.html',
  styleUrls: ['./color-update.component.css']
})
export class ColorUpdateComponent implements OnInit {

  colorUpdateForm:FormGroup;
  currentColor:Color;
  

  constructor(private activatedRoute:ActivatedRoute,private toastrService:ToastrService,
    private formBuilder:FormBuilder,private colorService:ColorService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
     
      if(params["colorId"]){
        this.getColorById(params["colorId"])
        this.createColorUpdateForm();
      }
    })
  }

  createColorUpdateForm(){
    console.log("createcolorform")
    this.colorUpdateForm = this.formBuilder.group({
      colorName:["",Validators.required]
    })
  }

  getColorById(colorId:number){
    this.colorService.getByColorId(colorId).subscribe(response=>{
      console.log(response.data)
      this.currentColor = response.data
      this.colorUpdateForm.setValue({
        colorName:this.currentColor.colorName
      })
    })
  }

  updateColor(){
    
    let formModel = Object.assign({},this.colorUpdateForm.value)
    let newColor:Color = {colorId:this.currentColor.colorId,colorName:formModel.colorName}
    if(this.colorUpdateForm.valid){
      this.colorService.updateColor(newColor).subscribe(response=>{
        this.toastrService.success(response.message,"Başarılı")
      })
    }else {

    }
  }
}
