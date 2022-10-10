import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css']
})
export class ProductpageComponent implements OnInit {

  public products: any[] = [];
  catId = 1;

  constructor(private dataService: DataService, private router: Router) {
    this.dataService.getBookByCatId(this.catId).subscribe((data: any) => {
      this.products = data;
      console.log(data);
    })
  }

  ngOnInit(): void {

  }
  OnClickHandler(bookId: any) {
    this.router.navigate(['product-detail', bookId])
  }

}
