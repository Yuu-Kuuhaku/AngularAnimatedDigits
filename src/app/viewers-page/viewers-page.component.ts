import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-viewers-page',
  templateUrl: './viewers-page.component.html',
  styleUrls: ['./viewers-page.component.scss']
})
export class ViewersPageComponent implements OnInit {

  value: number = 0;
  currency: FormControl = new FormControl();
  constructor() { }

  ngOnInit(): void {
    this.currency.valueChanges.subscribe({
      next: (data) => {
       let number = Number(data)
        if(! Number.isNaN(number) ){
          this.value = number;
        } else {
          window.alert(data + " não é um numero. Digite um número")
        }
      }
    })
  }

}
