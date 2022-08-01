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

  getImage(url: string | undefined) {
    if (typeof url !== 'undefined') {
      return 'https://cdn2.thecatapi.com/images/' + url + '.jpg';
    } else {
      return '../../../assets/images/no_image.jpg';
    }
  }

  ngOnInit(): void {
    this.temperaments = this.cat.temperament.split(', ');
  }
}
