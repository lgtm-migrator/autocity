import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  model: any = {};

  constructor(private carService: CarService, private toastr: ToastrService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.showCustomer();
  }

  showCustomer() {
    this.carService.getOneCar(this.route.snapshot.paramMap.get('id')).subscribe(response => {
      console.log(response);
      this.model = response;
    }, error => {
      console.log(error);
      this.toastr.error('An error occurred');
    })
  }

  borrar(id: string) {
    this.carService.deleteCar(id).subscribe(response => {
      this.toastr.success('Customer deleted successfully');
      console.log(response);
      this.router.navigateByUrl('/Customers');
    }, error => {
      console.log(error);
      this.toastr.error('An error occurred');
    })
  }

}
