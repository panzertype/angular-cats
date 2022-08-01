import { Component, Input, OnInit } from '@angular/core';
import { ICat } from 'src/app/models/interfaces/ICat';

@Component({
  selector: 'app-cat-card',
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.scss'],
})
export class CatCardComponent implements OnInit {
  @Input() cat!: ICat;

  temperaments: string[] = [];

  constructor() {}

  ngOnInit(): void {
    this.temperaments = this.cat.temperament.split(', ');
  }
}
