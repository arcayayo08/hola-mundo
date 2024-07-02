import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

  show = true;

  sentence: any = {
    message: 'Un gran poder requiere una gran responsabilidad',
    author: 'Ben Parker'
  }

  characters: string[] = ["Thor", "Spiderman", "Venom"]

}
