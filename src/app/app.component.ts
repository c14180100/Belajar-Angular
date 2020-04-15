import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  name = 'Angular';

  item = [{
    name : 'Kelengkeng',
    harga : 10000
  },{
    name : 'Jeruk',
    harga : 5000
  }];

  itemArr = [1,2,3,4,5];

  show: boolean = false;

  Pesan = '';
  EventKlik(){
    this.Pesan = 'Tombol baru ditekan';
  }

  values = '';
  onKey(event: any){
    this.values += event.target.value + ' | ';
  }
}
