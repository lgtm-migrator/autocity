import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-customer-new',
  templateUrl: './customer-new.component.html',
  styleUrls: ['./customer-new.component.css']
})
export class CustomerNewComponent implements OnInit {
  model: any = {};

  constructor(private toastr: ToastrService, private router: Router, private carService: CarService) { }

  ngOnInit(): void {
  }

  addCustomer() {
    this.carService.postNewCar(this.model).subscribe(response => {
      console.log(response);
      this.toastr.success('Customer added successfully!');
      this.router.navigateByUrl('/Customers');
    }, error => {
      this.toastr.error('Customer could not be added');
    })
  }
}
