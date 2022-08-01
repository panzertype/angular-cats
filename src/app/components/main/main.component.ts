import { CatsService } from './../../services/cats.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICat } from 'src/app/models/interfaces/ICat';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  cats$!: Observable<ICat[]>;

  constructor(private catsService: CatsService) {}

  ngOnInit(): void {
    this.cats$ = this.catsService.getCats(2);
  }
}
