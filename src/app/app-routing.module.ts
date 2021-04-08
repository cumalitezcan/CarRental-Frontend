import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand/brand-add/brand-add.component';
import { BrandListComponent } from './components/brand/brand-list/brand-list.component';
import { BrandUpdateComponent } from './components/brand/brand-update/brand-update.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarAddComponent } from './components/car/car-add/car-add.component';
import { CarListComponent } from './components/car/car-list/car-list.component';
import { CarUpdateComponent } from './components/car/car-update/car-update.component';
import { CarComponent } from './components/car/car.component';
import { ColorAddComponent } from './components/color/color-add/color-add.component';
import { ColorListComponent } from './components/color/color-list/color-list.component';
import { ColorUpdateComponent } from './components/color/color-update/color-update.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RentalComponent } from './components/rental/rental.component';

const routes: Routes = [
  {path:"",pathMatch:"full", component:CarComponent},
  {path:"cars",component:CarComponent},
  {path:"cars/add",component:CarAddComponent},
  {path:"brands/add",component:BrandAddComponent},
  {path:"colors/add",component:ColorAddComponent},
  {path:"cars/update/:carId",component:CarUpdateComponent},
  {path:"brands/update/:brandId",component:BrandUpdateComponent},
  {path:"cars/list",component:CarListComponent},
  {path:"brands/list",component:BrandListComponent},
  {path:"colors/list",component:ColorListComponent},
  {path:"colors/update/:colorId",component:ColorUpdateComponent},
  {path:"cars/brands/:brandId",component:CarComponent},
  {path:"cars/colors/:colorId",component:CarComponent},
  {path:"cars/details/:carId", component: CarDetailComponent},
  {path:"cars/filter/:brandId/:colorId",component:CarComponent},
  {path:"rental/:carId", component:RentalComponent},
  {path:"payment/:rental", component:PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
