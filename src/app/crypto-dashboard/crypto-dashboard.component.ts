import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'; 

export interface CryptoValues {
  id: number;
  name: string;
  value: number;
  isGreen: boolean;
  isRed: boolean;
}

@Component({
  selector: 'app-crypto-dashboard',
  templateUrl: './crypto-dashboard.component.html',
  styleUrls: ['./crypto-dashboard.component.css']
})
export class CryptoDashboardComponent implements OnInit {


  constructor() { }

  public ngOnInit() {
  
  }

  cryptos: CryptoValues[] = [
    {id:1, name: 'Bitcoin', value: 400, isGreen: false, isRed: false},
    {id:2, name: 'Etherium', value: 550, isGreen: false, isRed: false},
    {id:3, name: 'Dogecoin', value: 1000, isGreen: false, isRed: false},
    {id:4, name: 'Polygon', value: 640, isGreen: false, isRed: false},
  ];

  inputValue: number = 0;
  isToggle: boolean = false;
  
  
  toggleModal() {
    this.isToggle = !this.isToggle;
  }

  sumValue(item: CryptoValues): void {
    let index = this.cryptos.indexOf(item);
    this.cryptos[index] = item;
    item.value += this.inputValue;  

    item.isGreen = true;
    item.isRed = false;

  }

  subtractValue(item: CryptoValues): void {
    let index = this.cryptos.indexOf(item);
    this.cryptos[index] = item;
    item.value -= this.inputValue;

    item.isGreen = false;
    item.isRed = true;
  }

}