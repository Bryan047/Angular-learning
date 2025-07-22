import { Component, input } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  // ============== components =================
  title=input<string>()
  // myapp=input()
  // <h1>{{title()}}</h1>
  // <h1>{{myapp()}}</h1>

  ////////////Require inputs////////////
  
}
