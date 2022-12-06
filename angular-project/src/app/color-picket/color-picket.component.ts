import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-picket',
  templateUrl: './color-picket.component.html',
  styleUrls: ['./color-picket.component.css']
})
export class ColorPicketComponent implements OnInit {
  background = '#00e067';
  onChance(value) {
    this.background = value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
