import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car.model';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  carros: Car[];
  model: any = {};

  constructor(private carService: CarService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.showAllCustomers();
  }

  showAllCustomers(){
    this.carService.getAllCars().subscribe(response => {
      console.log(response);
      this.carros = response;
    }, error => {
      console.log(error);
    })
  }


}
