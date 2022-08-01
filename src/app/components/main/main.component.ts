import { CatsService } from './../../services/cats.service';
import { Component, OnInit } from '@angular/core';
import { ICat } from 'src/app/models/interfaces/ICat';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  cats: ICat[] = [];
  isLoading: boolean = true;
  paginatorLength: number = 0;

  constructor(private catsService: CatsService) {}

  ngOnInit(): void {
    this.catsService.getCats(2).subscribe((res) => {
      console.log(res);
      this.isLoading = false;
      this.cats = res.body;
      this.paginatorLength = res.headers.get('pagination-count');
    });
  }
}
