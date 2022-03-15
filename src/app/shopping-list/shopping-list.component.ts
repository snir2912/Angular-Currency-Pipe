import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  products = [
    {product: 'bamba',
     price: 5
    },
    {product: 'coca-cola',
     price: 11
    },
    {product: 'television',
     price: 5300
    },

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
