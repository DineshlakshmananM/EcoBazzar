import { Component, OnInit, inject } from '@angular/core';

import { CommonModule } from '@angular/common';

import { CurrencyPipe } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';

import { ProductService } from '../../services/product';

import { CartService } from '../../services/cart';

import { Product } from '../../models/product';


@Component({

selector: 'app-product-detail',

standalone: true,

imports: [CommonModule, FormsModule, CurrencyPipe],

templateUrl: './product-detail.html'

})

export class ProductDetail implements OnInit {

private route = inject(ActivatedRoute);

private router = inject(Router);

private productService = inject(ProductService);

private cartService = inject(CartService);
product?: Product;

loading = true;

error: string | null = null;

added = false;

qty = 1;


ngOnInit(): void {

const idParam = this.route.snapshot.paramMap.get('id');

const id = idParam ? Number(idParam) : NaN;

if (!id || isNaN(id)) {

this.error = 'Invalid product id';

this.loading = false;

return;

}

this.loadProduct(id);

}


private loadProduct(id: number): void {

this.loading = true;

this.productService.getById(id).subscribe({

next: (p) => {

this.product = p;

this.loading = false;

},

error: (err) => {
 console.error(err);

this.error = ' Could not load product.';

this.loading = false;

}

});

}


addToCart(): void {

if (!this.product?.id) return;

if (this.qty < 1) {

alert('Quantity must be at least 1');

return;

}


this.cartService.add(this.product.id, this.qty).subscribe({

next: () => { this.added = true; },

error: (err) => {

console.error(err);

alert(' Failed to add to cart. Make sure you are logged in.');

}

});

}


goBack(): void {

this.router.navigate(['/products']);

}

}
