import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  id: string | null = null;
  constructor(private route: ActivatedRoute, private router: Router) {
    route.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  goToProduct(id: string): void {
    this.router.navigate(['./', id], { relativeTo: this.route });
  }
  ngOnInit(): void {}
}
