import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products: any[] = [];
  catId: any;
  bookId: any;

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute, private router: Router) {

    this.catId = this.activatedRoute.snapshot.paramMap.get('CategoryId');
    this.bookId = this.activatedRoute.snapshot.paramMap.get('BookId');

    this.dataService.getBookByBookId(this.catId, this.bookId).subscribe((data: any) => {
      this.products = data.data
      console.log(this.products);
    })

  }

  ngOnInit(): void {
    this.dataService.getBooks().subscribe((response: any) => {
      this.products = response;
    })
  }

  onButtonClicked(bookId: string) {
    this.router.navigate(['product-detail', bookId])
  }
}
