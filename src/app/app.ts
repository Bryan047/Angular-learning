import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { LowerCasePipe, NgClass , NgStyle} from '@angular/common';
import { UpperCasePipe ,CurrencyPipe, DatePipe} from '@angular/common';
import { Header } from './header/header';
import { Item } from './item/item';

@Component({
  selector: 'app-root',
  imports: [Header,Item],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // isActive=false
  // color="blue"
  // size=69
  // myStyles={
  //   'background':"green",
  //   'color':"white",
  //   'font-this.size.px':this.size
  // }


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
    // userPermission="admin"
  //   @switch (userPermission) {
  //     @case ("admin") {
  //         <h1>Hello, admin</h1>
  //     }
  //     @case ("manager") {
  //         <h1>Hello, manager</h1>
  //     }
  //     @case ("customer") {
  //         <h1>Hello, customer</h1>
  //     }
  //     @default {
  //         <h1>pless login</h1>
  //     }
  // }

  // ==============for loop ================
      // data =[
      //   {id:1,name:"Bryan",salary:25000 ,active:"06/21/205"},
      //   {id:2,name:"Non",salary:18000 ,active:"06/20/205"},
      //   {id:3,name:"Nook",salary:35000 ,active:"06/23/205"},
      //   {id:4,name:"Danny",salary:20000, active:"06/24/205"}
      // ]

      // clearData(){
      //   this.data = []
      // }
      // changeMode(){
      //   this.isActive =!this.isActive
      // }

      // // ================  ==============
      // changStyle(){
      //   return{
      //     'color':"black",
      //     'font-size.px':"50px",
      //     'background':"gray"
      //   }
      // }

      // extention==========
    //   @for (employee of data; track employee.id){
    //     <h3> รหัสพนังงาน: {{employee.id}}</h3>
    //     <h3 > ชื่อพนักงาน: {{employee.name | lowercase}}</h3>
    //     <h3> เงินเดือนพนักงาน: {{employee.salary | currency:"JPY"}}</h3>
    //     <p>ใช้งานล่าสุด : {{employee.active | date: "fullDate" | uppercase}}</p>
    //     <hr>
    // }@empty {
    //     <h2> ไม่มีข้อมูลพนักงานในระบบ</h2>
    // }
    
    //     <button (click)="clearData()">ล้างข้อมูล</button>
    
// ==============signal and computed signal=================
//  fname=signal<string>("Non")
//  lname=signal<string>("Nadum")
//  exp=signal<number>(10)
//  skill=signal<string[]>(["ไทย","อังกฤษ","ญี่ปุ่น"])

//   fullName = computed(()=>{
//     return this.fname() + this.lname()
//   })

//   doubleExp = computed(()=>this.exp()*2)

//  change(){
//     this.fname.set("นนท์")
//     this.lname.set("นะดำ")
//     this.skill.set(["Thai","english","japanese"])
//  }
//  increment(){
//     this.exp.update((value)=>value+1)
//  }
//  decrement(){
//     this.exp.update((value)=>value-1)
//  }
// <div>
//     <h1>ข้อมูลพนักงาน</h1>
//     <h2>ชื่อพนักงาน: {{fullName()}}</h2>
//     <h2>ประสบการทำงาน: {{exp()}}</h2>
//     <h2>ประสบการทำงานx2: {{doubleExp()}}</h2>
//     <h2>ความสามารถ</h2>
//     <ul>
//     @for (item of skill(); track $index) {
//         <li>{{item}}</li>
//     }
//     </ul>
//     <hr>
//     <button (click)="change()">Switch</button>
//     <button (click)="increment()">+</button>
//     <button (click)="decrement()">-</button>
// </div>

// ============== components =================
// <app-header title="My App"/>

// <app-header myapp="MyProgram" />

///////////require components/////////
  data=[
    {id:1,name:"John",salary:20000},
    {id:2,name:"Jane",salary:25000},
    {id:3,name:"Bob",salary:30000}
  ]

}
