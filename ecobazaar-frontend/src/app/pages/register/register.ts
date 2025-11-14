import { Component } from '@angular/core';

import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

import { AuthService } from '../../services/auth.service';

import { Router } from '@angular/router';


@Component({

selector: 'app-register',

standalone: true,

imports: [ReactiveFormsModule, CommonModule],

templateUrl: './register.html',

styleUrl: './register.scss'

})

export class Register {


regForm: any; // define variable first


constructor(

private fb: FormBuilder,

private auth: AuthService,

private router: Router

) {
  // initialize here (fb is now available)

this.regForm = this.fb.group({

name: ['', Validators.required],

email: ['', [Validators.required, Validators.email]],

password: ['', Validators.required]

});

}


submit() {

if (this.regForm.invalid) return;


this.auth.register(this.regForm.value).subscribe({

next: () => {

alert('Registered ');

this.router.navigate(['/login']);

},

error: err => alert(err.error || 'Registration failed ')

});

}

}