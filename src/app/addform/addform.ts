import { Component, signal, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employees } from '../app';


@Component({
  selector: 'app-addform',
  imports: [FormsModule],
  templateUrl: './addform.html',
  styleUrl: './addform.css'
})
export class Addform {
  fullname = signal('')
  salary = signal(16000)
  onSave=output<Employees>()

  addNewEmployee(){
    let emp:Employees={
      id:Math.floor(Math.random()*1000), //0-99
      name:this.fullname(),
      salary:this.salary()
    }
    this.onSave.emit(emp)// ปล่อย event
    this.fullname.set("")
    this.salary.set(16000)
  }
}
