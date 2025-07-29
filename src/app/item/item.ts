import { CurrencyPipe } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-item',
  imports: [CurrencyPipe],
  templateUrl: './item.html',
  styleUrl: './item.css'
  
})
export class Item {
  id=input.required<number>();
  name=input.required<string>();
  salary=input.required<number>();
  onDelete = output<number>();

  deleteItem(){
    if(confirm(`คุณต้องการลยข้อมูลพนักงานรหัส ${this.id()} หรือไม่?`)){
      // console.log("ลบข้อมูล"+this.id())
      this.onDelete.emit(this.id())//ส่งสัญญาณ ปล่ยอ Event
    }
  }
}
