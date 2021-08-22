import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  id: string | null = null;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => (this.id = params['id']));
  }

  ngOnInit(): void {}
}
