import { Component, input } from '@angular/core';

@Component({
  selector: 'app-item',
  imports: [],
  templateUrl: './item.html',
  styleUrl: './item.css'
})
export class Item {
  id=input.required<number>();
  name=input.required<string>();
  salary=input.required<number>();
}
