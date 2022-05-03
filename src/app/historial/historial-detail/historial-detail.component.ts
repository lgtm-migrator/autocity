import { ToastrService } from 'ngx-toastr';
import { HistorialService } from './../../services/historial.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { History } from 'src/app/models/history.model';
import { Car } from 'src/app/models/car.model';

@Component({
  selector: 'app-historial-detail',
  templateUrl: './historial-detail.component.html',
  styleUrls: ['./historial-detail.component.css']
})
export class HistorialDetailComponent implements OnInit {
  model: any;

  constructor(private historialService:HistorialService, private toastr: ToastrService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.mostrarHistoriales();
  }

  mostrarHistoriales(){
    this.historialService.getCarHistory(this.route.snapshot.paramMap.get('id')).subscribe(response => {
      console.log(response);
      this.model = response;
    })
  }



}
