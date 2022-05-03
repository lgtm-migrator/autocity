import { ShopService } from './../../services/shop.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Shop } from 'src/app/models/shop.model';

@Component({
  selector: 'app-shop-edit',
  templateUrl: './shop-edit.component.html',
  styleUrls: ['./shop-edit.component.css']
})
export class ShopEditComponent implements OnInit {

  model: any = {};
  shop: Shop = {
    id: 0,
    name: '',
    address: '',
    rating: 0,
    longitude: 0,
    latitude: 0
  };

  constructor(private shopService: ShopService, private route: ActivatedRoute, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.showShop();
  }

  showShop() {
    this.shopService.getSelectedShop(this.route.snapshot.paramMap.get('id')).subscribe(response => {
      this.model = response;

      this.shop.id = response.id;
      this.shop.name = response.name;
      this.shop.address = response.address;
      this.shop.rating = response.rating;
      this.shop.longitude = response.longitude;
      this.shop.latitude = response.latitude;

    }, error => {
      console.log(error);
      this.toastr.error('An error occurred');
    })
  }

  updateShop(shop: Shop) {
    this.shopService.updateShop(this.shop).subscribe(response => {
      console.log(response);
      this.toastr.success('Shop information updated');
      this.router.navigateByUrl('/Shops/' + shop.id);
    }, error => {
      console.log(error);
      this.toastr.error('An error occurred');
    })
  }

}
