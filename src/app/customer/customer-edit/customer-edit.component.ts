import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car.model';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  model: any ={};
  car: Car = {
    id: 0,
    brand: '',
    model: '',
    year: 0,
    customerId: 0,
    niv: '',
    color: '',
    imageUrl: ''
  };

  constructor(private carService: CarService, private route: ActivatedRoute, private toastr: ToastrService, private router:Router) { }

  ngOnInit(): void {
    this.showCustomer();
  }

  showCustomer() {
    this.carService.getOneCar(this.route.snapshot.paramMap.get('id')).subscribe(response => {
      this.model = response;
      this.car.id = response.id;
      this.car.brand = response.brand;
      this.car.model = response.model;
      this.car.year = response.year;
      this.car.customerId = this.model.customer.id;
      this.car.niv = this.model.niv;
      this.car.color = this.model.color;
      this.car.imageUrl = this.model.imageUrl;
    }, error => {
      console.log(error);
      this.toastr.error('An error occurred');
    })
  }

  updateCustomer(car: Car) {
    this.carService.updateCar(this.car).subscribe(response => {
      console.log(response);
      this.toastr.success('Customer updated');
      this.router.navigateByUrl('/Customers/' + car.id);
    }, error=>{
      console.log(error);
      this.toastr.error('An error occurred');
    })
  }

}
