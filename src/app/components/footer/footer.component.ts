import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  name: string;
  year: number;

  constructor() {
    this.year = new Date().getFullYear();
    this.name = "Arcadio Herrera Abril"
  }

}
