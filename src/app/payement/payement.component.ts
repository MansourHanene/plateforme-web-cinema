import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
declare var paypal;

@Component({
  selector: 'app-payement',
  templateUrl: './payement.component.html',
  styleUrls: ['./payement.component.css']
})
export class PayementComponent implements OnInit {
  @ViewChild('paypal', { static: true }) paypalElement: ElementRef;
  
  product = {
    price: 30.77,
    description: 'used couch, decent condition',
    img: 'assets/img/film.jpg'
  };

  paidFor = false;

  constructor() { }

  ngOnInit() {
    paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: this.product.description,
                amount: {
                  currency_code: 'USD',
                  value: this.product.price
                }
              }
            ]
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          this.paidFor = true;
          console.log(order);
        },
        onError: err => {
          console.log(err);
        }
      })
      .render(this.paypalElement.nativeElement);
  }

}
