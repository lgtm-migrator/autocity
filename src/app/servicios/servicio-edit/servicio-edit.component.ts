import { Servicio } from 'src/app/models/servicio.model';
import { ToastrService } from 'ngx-toastr';
import { ServiciosService } from 'src/app/services/servicios.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servicio-edit',
  templateUrl: './servicio-edit.component.html',
  styleUrls: ['./servicio-edit.component.css']
})
export class ServicioEditComponent implements OnInit {
  model: any = {};
  servicio: Servicio;

  constructor(private serviciosService:ServiciosService, private router:Router, private route: ActivatedRoute, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.showCurrentService();
  }

  showCurrentService(){
    this.serviciosService.getServiceByServiceId(this.route.snapshot.paramMap.get('id')).subscribe(response => {
      this.model = response;
      this.servicio = this.model;
      console.log('response', response);
      console.log('servicio', this.servicio);
    }, error => {
      this.toastr.error('An error occurred');
      console.log(error);
    })
  }

  updateService(servicio: Servicio){
    this.serviciosService.updateService(this.servicio).subscribe(response => {
      console.log(response);
      this.toastr.success('Service updated successfully');
      this.router.navigateByUrl('/Shops/' + servicio.shopId);
    }, error => {
      console.log(error);
      this.toastr.error('Service could not be updated');
    })
  }

}
