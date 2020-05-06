import { Component, OnInit } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  faqs: any = [
    { title: 'How To Add Products?', content: '<p> <meta charset="utf-8">Go to &lsquo;Products&rsquo;, ● Tap on the menu icon at the top right corner, ● Choose &lsquo;Add Product&rsquo; or use Barcode scanner, ● Enter the product name, product price, and minimum stock, ● Tap &lsquo;Add&rsquo;, ● Go to &lsquo;Sell&rsquo; to check inventory. *Minimum stock is the minimum number of items that should be on the shelf before depletion of stock. It notifies you when stocks are finishing. Eg, a minimum stock of 10 items was set for Peak Milk Sachet, you are notified when the number of Peak Milk sachets are 10 in number</p>' },
    { title: 'How to make sales', content: '<p><meta charset="utf-8">To make sales; ● Tap on the item selected, ● Enter quantity of items selected, ● Tap on &lsquo;Discount&rsquo; if you want to give a discount (tap either % or the Naira sign to input the discount amount). ● Tap &lsquo;Add&rsquo; to conclude purchase of the item selected, ● Do this for other items selected by the customer, ● Tap the Cart Icon at the bottom of the page, ● Tap &lsquo;Add Customer&rsquo; to add customer details, ● Tap &lsquo;Charge&rsquo; to go to payment method, ● Select &lsquo;Cash&rsquo; for cash payment, ● Select &lsquo;Card&rsquo; for card payment, ● For payment with both Cash and Card, edit in &lsquo;Amount Tendered&rsquo;, ● Input the amount to be paid partly, tap on &lsquo;Cash&rsquo;, then for the remainder, tap on &lsquo;Card&rsquo;, ● Tap &lsquo;Complete&rsquo; at the bottom of the page to complete and save the sale. ● Tap on &lsquo;Make Another Sale&rsquo; to go to inventory. *Order discounts are for bulk purchases, it is distinct from the single discounts given on each item of stock to be purchased.</p>' },
    { title: 'How do I view all sales made', content: '<p><meta charset="utf-8"> ● Go to &lsquo;Sales&rsquo; in the Menu ● Tap on the Calendar Icon at the top right corner of the page ● Select the date you want to view previous sales *The &lsquo;Sales&rsquo; page shows the total number of sales made in a day and the revenue</p>' },
    { title: 'How do I restock', content: '<p><meta charset="utf-8">● Tap on the menu icon at the top right corner of the page, ● Select &lsquo;Restock&rsquo;, ● Tap &lsquo;Add New&rsquo;, ● Select the items to restock, ● Input the number of items to restock, ● Tap &lsquo;Restock Now&rsquo; to complete activit</p>' },
    { title: 'How do I remove Products', content: '<p><meta charset="utf-8">● To remove Products, tap &lsquo;Tap To View All&rsquo;, ● Tap the red icon to select the item, ● Close after completing activity.</p>' },
    { title: 'How do I enable Tax Imputation', content: '<p><meta charset="utf-8">● Go to &lsquo;Account&rsquo;, ● Tap on Tax to push tax imputation.</p>' },
    { title: 'How To Open A New Branch?', content: ' <p> <meta charset="utf-8">● Go to the Menu, ● Tap &lsquo;Close Register&rsquo; ● Tap &lsquo;Add New Branch&rsquo; to create a new branch</p>' },
  ]
  constructor() {
    $(".accordion-item__line").click(function () {
      console.log('ss');

      var container = $(this).parents(".accordion-list__item");
      var answer = container.find(".accordion-item");
      answer.toggleClass("accordion-item--opened");
    });
  }

  ngOnInit() {


  }

}
