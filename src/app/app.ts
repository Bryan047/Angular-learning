import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // text interpolation expression and method
  // name="Bryan o Anal"
  // age = 20
  // address= "Buriram"
  
  // showAddress(){
  //   return "ที่อยู่ปัจจุบัน :"+this.address
  // }

  // =========add img================
    // imageurl="https://picsum.photos/id/122/367/267"
    // size = 250

    // doubleSize(){
    //   return this.size*2
    // }

    // ==========EventByding=============
    // name="Bryan"
    // showmessage(){
    //   alert("Hello World, " + this.name)
    // }

    // ===============TwoWay binding ============
   // username="admin"
  //   <h1>ยินดีต้อนรับ, {{username}}</h1>
  // <input type="text" [(ngModel)]="username">

  // ===========if else==============
    // userPermission="admin"
    
  //   @if(userPermission=="admin"){
  //     <h1>Hello, admin</h1>
  // }@else if (userPermission=="manager") {
  //     <h1>Hello, manager</h1>
  // }@else if (userPermission=="customer") {
  //     <h1>Hello, customer</h1>
  // }@else {
  //     <h1>pleas login</h1>
  // }

    // ======== swirch case==========
    userPermission="admin"
}
