import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car.model';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  carros: Car[];
  car: Car = {
    id: 6,
    nombre: '',
  }

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.showAllCars();
  }

  showAllCars(){
    this.carService.getAllCars().subscribe(response => {
      console.log(response);
      this.carros = response;
    }, error => {
      console.log(error);
    })
  }

  insertNewCar(){
    this.carService.postNewCar(this.car).subscribe(response => {
      console.log(response);
      this.car = response;
      this.showAllCars();
    }, error => {
      console.log(error);
    })
  }

}
