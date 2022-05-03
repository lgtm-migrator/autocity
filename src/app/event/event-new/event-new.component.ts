import { ToastrService } from 'ngx-toastr';
import { CitasService } from './../../services/citas.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-new',
  templateUrl: './event-new.component.html',
  styleUrls: ['./event-new.component.css']
})
export class EventNewComponent implements OnInit {
  model: any = {};

  constructor(private citaService: CitasService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

  }

  addEvent() {
    this.citaService.postCita(this.model).subscribe(response => {
      this.model = response;
      console.log(response);
      this.toastr.success('New Event added successfully');
      this.router.navigateByUrl('/Events');
    }, error => {
      console.log(error);
      this.toastr.error('Failed to add event');
    })

  }


}
