import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetailpage',
  templateUrl: './productdetailpage.component.html',
  styleUrls: ['./productdetailpage.component.css']
})
export class ProductdetailpageComponent implements OnInit {

  public product: any;
  public bookId: any;
  public catId: any;

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) {

    this.bookId = this.activatedRoute.snapshot.paramMap.get('bookId');
    this.catId = this.activatedRoute.snapshot.paramMap.get('catId');

    this.dataService.getBookByBookId(this.catId, this.bookId).subscribe((data: any) => {
      this.product = data;
      console.log(this.product);
    })
  }

  ngOnInit(): void {
  }

}
