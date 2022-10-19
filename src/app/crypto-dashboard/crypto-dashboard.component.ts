import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'; 

export interface CryptoValues {
  id: number;
  name: string;
  value: number;
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
    {id:1, name: 'Bitcoin', value: 400},
    {id:2, name: 'Etherium', value: 550},
    {id:3, name: 'Dogecoin', value: 1000},
    {id:4, name: 'Polygon', value: 640},
  ];

  inputValue: number = 0;
  isToggle: boolean = false;
  isGreen: boolean = false;
  isRed: boolean = false;
  
  toggleModal() {
    this.isToggle = !this.isToggle;
  }

  sumValue(item: CryptoValues): void {
    let index = this.cryptos.indexOf(item);
    this.cryptos[index] = item;
    item.value += this.inputValue;  

    this.isRed = false;
    this.isGreen = true;

  }

  subtractValue(item: CryptoValues): void {
    let index = this.cryptos.indexOf(item);
    this.cryptos[index] = item;
    item.value -= this.inputValue;

    this.isRed = true;
    this.isGreen = false;
  }

}