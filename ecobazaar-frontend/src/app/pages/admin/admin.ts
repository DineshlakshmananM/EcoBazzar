import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';


@Component({

selector: 'app-admin',

standalone: true,

imports: [CommonModule],

templateUrl: './admin.html'

})

export class Admin {
  name = localStorage.getItem('name');
}