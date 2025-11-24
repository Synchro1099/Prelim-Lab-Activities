import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
 message = "Data Binding Demo";
 title = "My first App!";
 description = "This is my new Angular Application";

 // this is property binding //
 imageUrl = 'https://cdn.shopify.com/s/files/1/0424/4606/1723/files/Syrian-Hamster_grande.jpg?v=1594383125'
w =  1300;
h = 1300;
textColor = 'blue';
isHighlighted = true;
yourName = '';

count = 0;
increment() {
  this.count++;
}

decrement (){
  this.count--;
}

}
