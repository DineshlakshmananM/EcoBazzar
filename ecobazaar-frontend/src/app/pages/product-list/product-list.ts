import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { CurrencyPipe } from '@angular/common';

import { ProductService } from '../../services/product';

import { Product } from '../../models/product';


@Component({

selector: 'app-product-list',

standalone: true,

imports: [CommonModule, FormsModule, CurrencyPipe],

templateUrl: './product-list.html'

})

export class ProductList implements OnInit {


products: Product[] = [];

filtered: Product[] = [];

searchText = '';

ecoOnly = false;

loading = false;

error: string | null = null;


constructor(private productService: ProductService) {}


ngOnInit(): void {

this.loadProducts();

}


loadProducts(): void {

this.loading = true;

this.productService.getAll().subscribe({

next: (data) => {

this.products = data;

this.filtered = data;

this.loading = false;

},

error: () => {

this.error = '❎Could not load products.';

this.loading = false;

}

});

}


applyFilters(): void {

const text = this.searchText.toLowerCase().trim();

this.filtered = this.products.filter(p => {

const matchSearch = !text || p.name?.toLowerCase().includes(text);

const matchEco = !this.ecoOnly || p.ecoCertified;

return matchSearch && matchEco;

});

}
onSearchChange(): void { this.applyFilters(); }

onEcoToggle(): void { this.applyFilters(); }
}